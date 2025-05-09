import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styles } from './style'; // Certifique-se de importar os estilos corretos
import { router } from 'expo-router';
import { listarCachorros } from '../../api/cachorroService'; // Função que chama a API

// Definindo o tipo para o objeto cachorro
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
  const [cachorros, setCachorros] = useState<Cachorro[]>([]); // Estado para armazenar os cachorros
  const [isLoading, setIsLoading] = useState<boolean>(true); // Estado para indicar se os dados estão sendo carregados

  // Função para carregar os cachorros quando o componente for montado
  useEffect(() => {
    async function carregarCachorros() {
      try {
        const dados = await listarCachorros(); // Chama a API para buscar os dados
        setCachorros(dados); // Armazena os dados no estado
      } catch (err) {
        console.log('Erro ao carregar cachorros:', err);
      } finally {
        setIsLoading(false); // Marca que o carregamento foi finalizado
      }
    }

    carregarCachorros(); // Chama a função ao carregar o componente
  }, []); // O array vazio garante que essa função será executada apenas uma vez

  if (isLoading) {
    // Se os dados ainda estiverem sendo carregados, exibe um indicador de carregamento
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Encontre seu Melhor Amigo de Quatro Patas! </Text>
      <FlatList
        data={cachorros} // Passa os cachorros do estado para o FlatList
        keyExtractor={(item) => item.id} // Usado para garantir a chave única para cada item
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imagem }} style={styles.image} /> {/* Exibe a imagem */}
            <Text style={styles.name}>{item.nome}</Text> {/* Exibe o nome do cachorro */}
            <Text>{item.descricao}</Text> {/* Exibe a descrição */}

            <TouchableOpacity
              style={styles.cardBotao}
              onPress={() =>
                router.push({
                  pathname: '/stacks/[id]',
                  params: {
                    id: item.id,
                    name: item.nome,
                    image: item.imagem,
                    peso: item.peso,
                    sexo: item.sexo,
                    raca: item.raca,
                    porte: item.porte,
                    castrado: item.castrado,
                    description: item.descricao,
                  }
                })
              }
            >
              <Text style={styles.saibaMais}>Saiba Mais</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};