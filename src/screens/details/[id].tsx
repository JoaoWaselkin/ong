import { View, Text, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { styles } from './style'
import { ScrollView } from 'react-native-gesture-handler';

export default function Details() {
    const { name, image, description, peso, sexo, castrado, raca, porte } = useLocalSearchParams();

    return (
        <View style={styles.container}>

                <Text style={styles.titulo}> Informações Importantes para a Adoção de {name} </Text>


                <Image source={{ uri: image as string }} style={styles.image} />
                <Text style={styles.name}> Apaixone-se por {name} </Text>
                <Text style={styles.caracteristicasAnimal}>Raça: {raca}</Text>
                <Text style={styles.caracteristicasAnimal}>Porte: {porte}</Text>
                <Text style={styles.caracteristicasAnimal}>Sexo: {sexo}</Text>
                <Text style={styles.caracteristicasAnimal}>Peso: {peso}</Text>
                <Text style={styles.caracteristicasAnimal}>Castrado: {castrado}</Text>
                <Text style={styles.descricao}>{description}</Text>
            

        </View>
    );
}


