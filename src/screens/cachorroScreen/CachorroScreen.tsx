import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styles } from './style';
import { router } from 'expo-router';
import { listarCachorros } from '../../api/cachorroService';


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

  async function carregarMaisCachorros() {
    if (isLoading || !temMais) return;

    setIsLoading(true);
    try {
      const resposta = await listarCachorros(pagina);
      setCachorros(prev => [...prev, ...resposta.content]); // adiciona à lista
      setTemMais(!resposta.last); // se for a última página, para de carregar
      setPagina(prev => prev + 1); // próxima página
    } catch (err) {
      console.error('Erro ao carregar cachorros:', err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    carregarMaisCachorros(); // carrega a primeira página ao montar
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Encontre seu Melhor Amigo de Quatro Patas! </Text>
      <FlatList
        data={cachorros}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item?.imagem }} style={styles.image} />
            <Text style={styles.name}>{item?.nome}</Text>
            <Text>{item?.descricao}</Text>
            <TouchableOpacity
              style={styles.cardBotao}
              onPress={() =>
                router.push({
                  pathname: '/stacks/[id]',
                  params: { ...item },
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
    </View>
  );
};
