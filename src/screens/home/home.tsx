import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styles } from './style';
import { router } from 'expo-router';

const dogs = [
  {
    id: '1',
    nome: 'Julie',
    peso: '7kg',
    sexo: 'Fêmea',
    raca: 'Viralata',
    porte: 'Medio/Pequeno',
    castrado: 'Não',
    imagem: 'https://www.meupetamoroso.com.br/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-22-at-19.28.55-400x300.jpeg',
    descricao: 'Docil e amorosa.'
  },
  {
    id: '2',
    nome: 'Wladimir',
    peso: '5kg',
    sexo: 'Macho',
    raca: 'Viralata',
    porte: 'Pequeno',
    castrado: 'Não',
    imagem: 'https://www.meupetamoroso.com.br/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-22-at-14.41.50333-702x600.jpeg',
    descricao: 'Um cachorro fiel e companheiro.'
  },
  {
    id: '3',
    nome: 'Filhotes',
    peso: '1-2kgs',
    sexo: 'Macho',
    raca: 'Pitbull',
    porte: 'Pequeno',
    castrado: 'Não',
    imagem: 'https://www.meupetamoroso.com.br/wp-content/uploads/2022/09/IMG-20220901-WA0013-800x600.jpg',
    descricao: 'Divertidos e Brincalhões.'
  },
  {
    id: '4',
    nome: 'Rakim ',
    peso: '25kg',
    sexo: 'Macho',
    raca: 'Pitbull',
    porte: 'Médio',
    castrado: 'Sim',
    imagem: 'https://www.meupetamoroso.com.br/wp-content/uploads/2024/01/IMG_3598-750x600.jpeg',
    descricao: 'Super amigo e brincalhão.'
  },
  {
    id: '5',
    nome: 'Floquinha',
    peso: '15kg',
    sexo: 'Fêmea',
    raca: 'Viralata',
    porte: 'Médio',
    castrado: 'Não',
    imagem: 'https://www.meupetamoroso.com.br/wp-content/uploads/2024/01/IMG_5114-800x600.jpeg',
    descricao: 'Docil.'
  },
  {
    id: '6',
    nome: 'Tati',
    peso: '8kg',
    sexo: 'Fêmea',
    raca: 'Yorkshire',
    porte: 'Pequeno',
    castrado: 'Sim',
    imagem: 'https://www.meupetamoroso.com.br/wp-content/uploads/2023/07/IMG_20230701_114849_438-800x600.jpg',
    descricao: 'tati é charmosa e adora um colo.'
  },
  {
    id: '7',
    nome: 'Duque',
    peso: '11kg',
    sexo: 'Macho',
    raca: 'Sharpei mistura com Belga',
    porte: 'Médio',
    castrado: 'Sim',
    imagem: 'https://www.meupetamoroso.com.br/wp-content/uploads/2021/12/IMG_20211206_121152_432-768x600.jpg',
    descricao: 'tati é charmosa e adora um colo.'
  },
];

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

export const Home = () => {
  const [cachorros, setCachorros] = useState<Cachorro[]>([]);

  useEffect(() => {
    setCachorros(dogs);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<Text style={styles.title}> Encontre seu Melhor Amigo de Quatro Patas! </Text>}
        data={cachorros}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item?.imagem }} style={styles.image} />
            <Text style={styles.name}>{item?.nome}</Text>
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
      />
    </View>
  );
};