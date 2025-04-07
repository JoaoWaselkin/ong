import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { router } from 'expo-router';
import React from 'react';

const dogs = [
    {
        id: '1',
        name: 'Rex',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFUAfyVe3Easiycyh3isP9wDQTYuSmGPsPQvLIJdEYvQ_DsFq5Ez2Nh_QjiS3oZ3B8ZPfK9cZQyIStmQMV1lDPLw',
        description: 'Rex é um cachorrinho alegre e muito protetor.'
    },
    {
        id: '2',
        name: 'Luna',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv_tK5ErnyzvOBs76Uzgcs1co6PEzX9PBbUQ&s',
        description: 'Luna é uma cachorrinha carinhosa e brincalhona.'
    },
    {
        id: '3',
        name: 'Thor',
        image: 'https://www.petz.com.br/blog/wp-content/uploads/2020/07/raca-de-cachorro-muito-popular-no-brasil-1.jpg',
        description: 'Thor adora correr e brincar com crianças.'
    },
];

export const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Encontre seu Melhor Amigo de Quatro Patas! </Text>
            <FlatList
                data={dogs}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => router.push({
                            pathname: '/stacks/[id]',
                            params: {
                                id: item.id,
                                name: item.name,
                                image: item.image,
                                description: item.description,
                            }
                        })}
                    >
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text style={styles.name}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};
