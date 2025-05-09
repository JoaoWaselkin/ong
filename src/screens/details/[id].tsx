import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { styles } from './style';
import { ScrollView } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';

interface Animal {
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

export default function Details() {
  const { id } = useLocalSearchParams(); // Assume que a URL ou navegação envia um id
  const [animal, setAnimal] = useState<Animal | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnimal = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8080/cachorro/buscar/${id}`); // substitua pela sua URL real
        const data = await response.json();
        setAnimal(data);
      } catch (error) {
        console.error('Erro ao buscar o animal:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimal();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#000" />
        <Text>Carregando dados...</Text>
      </View>
    );
  }

  if (!animal) {
    return (
      <View style={styles.container}>
        <Text>Animal não encontrado.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}> Informações Importantes para a Adoção de {animal.nome} </Text>
      <Image source={{ uri: animal.imagem }} style={styles.image} />
      <Text style={styles.name}> Apaixone-se por {animal.nome} </Text>
      <View style={styles.caracteristicas}>
        <Text style={styles.caracteristicasAnimal}>Raça: {animal.raca}</Text>
        <Text style={styles.caracteristicasAnimal}>Porte: {animal.porte}</Text>
        <Text style={styles.caracteristicasAnimal}>Sexo: {animal.sexo}</Text>
        <Text style={styles.caracteristicasAnimal}>Peso: {animal.peso}</Text>
        <Text style={styles.caracteristicasAnimal}>Castrado: {animal.castrado}</Text>
      </View>
      <Text style={styles.descricao}>{animal.descricao}</Text>
    </ScrollView>
  );
}