import { View, Text, Image, ActivityIndicator, TouchableOpacity, Platform, Alert } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { styles } from './style';
import { ScrollView } from 'react-native-gesture-handler';
import { capitalizeFirstLetter } from '../../../scripts/muda-texto';
import BackButton from '@/components/backButton/backButton';
import CustomButton from '@/components/buttonDefault/CustomButton';

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

export default function Details() {
  const params = useLocalSearchParams();

  const animal: Cachorro = {
    id: typeof params.id === 'string' ? params.id : (params.id?.[0] || ''),
    nome: typeof params.nome === 'string' ? params.nome : '',
    peso: typeof params.peso === 'string' ? params.peso : '',
    sexo: typeof params.sexo === 'string' ? params.sexo : '',
    raca: typeof params.raca === 'string' ? params.raca : '',
    porte: typeof params.porte === 'string' ? params.porte : '',
    castrado: typeof params.castrado === 'string' ? params.castrado : '',
    imagem: typeof params.imagem === 'string' ? params.imagem : '',
    descricao: typeof params.descricao === 'string' ? params.descricao : '',
  };

  if (!animal || !animal.id) {
    return (
      <View style={styles.container}>
        <Text>Animal não encontrado ou dados incompletos.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.containerPai} contentContainerStyle={styles.scrollContent}>
      <View style={{
        width: 30,
        height: 50,
        right: 180
      }}>
        <BackButton />
      </View>
      <View style={styles.container}>
        <Text style={styles.titulo}> Informações importantes para a adoção de {animal.nome} </Text>
        <View>
          <Image source={{ uri: animal.imagem }} style={styles.image} />
        </View>

        <View style={styles.caracteristicas}>
          <Text style={styles.name}> {animal.nome} </Text>
          <Text style={styles.label}>Descrição:</Text>
          <Text style={styles.descricao}>{animal.descricao}</Text>

          <View style={styles.infoGrid}>
            <View style={styles.infoItem}>
              <Text style={styles.label}>Raça:</Text>
              <Text style={styles.value}>{capitalizeFirstLetter(animal.raca)}</Text>
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