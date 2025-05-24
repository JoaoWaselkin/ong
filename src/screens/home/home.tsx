import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styles } from './style';
import { router } from 'expo-router';
import { listarCachorros } from '../../api/cachorroService';
import SearchBar from '@/components/searchBar/SearchBar';
import { BottomTab } from '@/components/bottomTab/bottomTab';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Cachorro {
  id: string;
  nome: string;
  peso: string;
  sexo: string;
  raca: string;
  porte: string;
  castrado: string;
  imagem: string;
  descricao: string;
}

export const CachorroScreen = () => {
  const [cachorros, setCachorros] = useState<Cachorro[]>([]);
  const [pagina, setPagina] = useState(0);
  const [temMais, setTemMais] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  async function carregarMaisCachorros() {
    if (isLoading || !temMais) return;

    setIsLoading(true);
    try {
      const resposta = await listarCachorros(pagina);

      if (resposta && Array.isArray(resposta.content)) {
        setCachorros(prev => [...prev, ...resposta.content]);
        setTemMais(resposta.last === false); // ou !resposta.last
        setPagina(prev => prev + 1);
        setErro(null); // limpa erros anteriores
      } else {
        console.warn('Resposta inesperada da API:', resposta);
        setErro('Resposta inesperada da API. Tente novamente mais tarde.');
        setTemMais(false); // evita chamadas infinitas
      }
    } catch (err) {
      console.error('Erro ao carregar cachorros:', err);
      setErro('Erro ao carregar cachorros. Verifique sua conexão.');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    carregarMaisCachorros(); // carrega a primeira página ao montar
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView/>
      <SearchBar placeholder="Buscar animais..." />

      {erro && (
        <Text style={{ color: 'red', textAlign: 'center', marginBottom: 10 }}>
          {erro}
        </Text>
      )}

      <FlatList
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={
          <Text style={styles.title}> Encontre seu melhor amigo de quatro patas! </Text>
        }
        data={Array.isArray(cachorros) ? cachorros : []}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item?.imagem }} style={styles.image} />
            <Text style={styles.name}>{item?.nome}</Text>
            <Text style={styles.raca}>{item?.raca}</Text>

            <TouchableOpacity
              style={styles.cardBotao}
              onPress={() =>
                router.push({
                  pathname: '/stacks/[id]',
                  params: { id: item.id },
                })
              }
            >
              <Text style={styles.saibaMais}>Saiba Mais</Text>
            </TouchableOpacity>
          </View>
        )}
        onEndReached={carregarMaisCachorros}
        onEndReachedThreshold={0.5}
        ListFooterComponent={isLoading ? <ActivityIndicator size="small" /> : null}
      />

      <BottomTab />
    </View>
  );
};
