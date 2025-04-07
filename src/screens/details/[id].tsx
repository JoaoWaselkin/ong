import { View, Text, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { styles } from './style'

export default function Details() {
    const { name, image, description } = useLocalSearchParams();

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <Image source={{ uri: image as string }} style={styles.image} />
            <Text style={styles.descricao}>{description}</Text>
            <Text>ver com os guri oq colocar</Text>
        </View>
    );
}


