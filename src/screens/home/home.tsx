import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator, TouchableHighlight } from 'react-native';
import { styles } from './style';
import { router } from 'expo-router';
import { listarCachorros } from '../../api/cachorroService';
import SearchBar from '@/components/searchBar/SearchBar';
import { Ionicons } from '@expo/vector-icons'; 
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Octicons from '@expo/vector-icons/Octicons';
import { BottomTab } from '@/components/bottomTab/bottomTab';

// import { TouchableOpacityBase } from 'react-native';


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
      <SearchBar placeholder="Buscar animais..." />
      <FlatList
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={<Text style={styles.title}> Encontre seu melhor amigo de quatro patas! </Text>}
        data={cachorros}
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

      <BottomTab/>
    </View>
  );
};