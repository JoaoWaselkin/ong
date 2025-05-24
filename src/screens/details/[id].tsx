import { View, Text, Image, StyleSheet, ActivityIndicator,  TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { styles } from './style';
import { Pressable, ScrollView } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import { ExpoRouter, router } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { capitalizeFirstLetter } from '../../../scripts/muda-texto'
import BackButton from '@/components/backButton/backButton';
import CustomButton from '@/components/buttonDefault/CustomButton';
import { Platform, Alert } from 'react-native';
import { clearAuthStorage } from '@/src/utils/authStorage';
import { API_URL } from '@/src/api/cachorroService';

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
        const response = await fetch(`${API_URL}/${id}`);
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

  const handleLogout = async () => {
        if (Platform.OS === 'web') {
            const confirmLogout = window.confirm("Tem certeza que deseja sair?");
            if (confirmLogout) {
                await clearAuthStorage();
                console.log('DEBUG (Formulario): Usuário deslogado. Redirecionando para login.');
                router.replace('/stacks/login');
            }
        } else {
            Alert.alert(
                "Sair da Conta",
                "Tem certeza que deseja sair?",
                [
                    {
                        text: "Cancelar",
                        style: "cancel"
                    },
                    {
                        text: "Sair",
                        onPress: async () => {
                            await clearAuthStorage();
                            console.log('DEBUG (Formulario): Usuário deslogado. Redirecionando para login.');
                            router.replace('/stacks/login');
                        }
                    }
                ]
            );
        }
    };

  return (
  <ScrollView style={styles.containerPai} contentContainerStyle={styles.scrollContent}>
    <View style={{
              width: 30,
              height: 50,
              right: 180
          }}>
        <BackButton/>
    </View>
    <View style={styles.container}>
        <Text style={styles.titulo}> Informações importantes para a adoção de {animal.nome} </Text>
        <View >
          <Image source={{ uri: animal.imagem }} style={styles.image} />
          <View>
            
          </View>
        </View>

        <View style={styles.caracteristicas}>
      <Text style={styles.name}> {animal.nome} </Text>
      <Text style={styles.descricao}>{animal.descricao}</Text>

      <View style={styles.infoGrid}>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Raça:</Text>
          <Text style={styles.value}>{animal.raca}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Porte:</Text>
          <Text style={styles.value}>{capitalizeFirstLetter(animal.porte)}</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.label}>Sexo:</Text>
          <Text style={styles.value}>{capitalizeFirstLetter(animal.sexo)}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Peso:</Text>
          <Text style={styles.value}>{animal.peso}</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.label}>Castrado:</Text>
          <Text style={styles.value}>{capitalizeFirstLetter(animal.castrado)}</Text>
        </View>
      </View>
    </View>

        <CustomButton
              title="Adote-me"
              onPress={() => router.navigate('/stacks/formulario')}
        />

    </View>
  </ScrollView>
  );
}