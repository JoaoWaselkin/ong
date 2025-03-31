import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { router } from 'expo-router';
import React from 'react';

const dogs = [
    { id: '1', name: 'Rex', image: 'https://via.placeholder.com/150' },
    { id: '2', name: 'Luna', image: 'https://via.placeholder.com/150' },
    { id: '3', name: 'Thor', image: 'https://via.placeholder.com/150' },
    { id: '4', name: 'Mel', image: 'https://via.placeholder.com/150' },
];

export const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cachorros para Adoção</Text>
            <FlatList
                data={dogs}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card} >
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text style={styles.name}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};
