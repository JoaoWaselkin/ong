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
  const [isLoading, setIsLoading] = useState<boolean>(true); 
  
  useEffect(() => {
    async function carregarCachorros() {
      try {
        const dados = await listarCachorros();
        setCachorros(dados);
      } catch (err) {
        console.log('Erro ao carregar cachorros:', err);
      } finally {
        setIsLoading(false);
      }
    }

    carregarCachorros();
  }, []);

  if (isLoading) {
    
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Encontre seu Melhor Amigo de Quatro Patas! </Text>
      <FlatList
        data={cachorros}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          console.log('item', item)
          return (
            (
              <View style={styles.card}>
                <Image source={{ uri: item?.imagem }} style={styles.image} />
                <Text style={styles.name}>{item?.nome}</Text>
                <Text>{item?.descricao}</Text>
    
                <TouchableOpacity
                  style={styles.cardBotao}
                  onPress={() =>
                    router.push({
                      pathname: '/stacks/[id]',
                      params: {
                        id: item?.id,
                        name: item?.nome,
                        image: item?.imagem,
                        peso: item?.peso,
                        sexo: item?.sexo,
                        raca: item?.raca,
                        porte: item?.porte,
                        castrado: item?.castrado,
                        descricao: item?.descricao,
                      }
                    })
                  }
                >
                  <Text style={styles.saibaMais}>Saiba Mais</Text>
                </TouchableOpacity>
              </View>
            )
          )
        }}
      />
    </View>
  );
};