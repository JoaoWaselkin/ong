import { View, Text, Image, StyleSheet, ActivityIndicator,  TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { styles } from './style';
import { Pressable, ScrollView } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import { ExpoRouter, router } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { capitalizeFirstLetter } from '../../../scripts/muda-texto'
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
  const { id } = useLocalSearchParams();
  const [animal, setAnimal] = useState<Animal | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnimal = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8080/cachorro/buscar/${id}`);
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
  <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
    <Pressable
        style={styles.backButton}
        onPress={() => router.back()}
        >
        <FontAwesome name="angle-left" size={30} color="black" />
      </Pressable>
    <Text style={styles.titulo}> Informações importantes para a adoção de {animal.nome} </Text>
    <Image source={{ uri: animal.imagem }} style={styles.image} />
    <Text style={styles.name}> Apaixone-se por {animal.nome} </Text>
    <View style={styles.caracteristicas}>
      <Text style={styles.caracteristicasAnimal}>Raça: {animal.raca}</Text>
      <Text style={styles.caracteristicasAnimal}>Porte: {capitalizeFirstLetter(animal.porte)}</Text>
      <Text style={styles.caracteristicasAnimal}>Sexo: {capitalizeFirstLetter(animal.sexo)}</Text>
      <Text style={styles.caracteristicasAnimal}>Peso: {animal.peso}</Text>
      <Text style={styles.caracteristicasAnimal}>Castrado: {capitalizeFirstLetter(animal.castrado)}</Text>
    </View>
    <Text style={styles.descricao}>{animal.descricao}</Text>

    <TouchableOpacity style={styles.button} onPress={() => router.navigate('/stacks/formulario')}>
      <Text style={styles.botaoAdoteme}> Adote-me </Text>
    </TouchableOpacity>

  </ScrollView>
  );
}