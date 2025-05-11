import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { router } from 'expo-router';
import React from 'react';

const dogs = [
    {
        id: '1',
        name: 'Rex',
        peso: '3kg',
        sexo: 'Masculino',
        raca: 'Chihuahua',
        porte: 'Pequeno',
        castrado: 'Nao',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFUAfyVe3Easiycyh3isP9wDQTYuSmGPsPQvLIJdEYvQ_DsFq5Ez2Nh_QjiS3oZ3B8ZPfK9cZQyIStmQMV1lDPLw',
        description: 'Rex é um cachorrinho alegre e muito protetor.'
    },
    {
        id: '2',
        name: 'Luna',
        peso: '5kg',
        sexo: 'Feminino',
        raca: 'Shih Tzu',
        porte: 'Pequeno',
        castrado: 'Nao',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv_tK5ErnyzvOBs76Uzgcs1co6PEzX9PBbUQ&s',
        description: 'Luna é uma cachorrinha carinhosa e brincalhona.'
    },
    {
        id: '3',
        name: 'Thor',
        peso: '30kg',
        sexo: 'Masculino',
        raca: 'Golden Retriever',
        porte: 'Grande',
        castrado: 'Sim',
        image: 'https://www.petz.com.br/blog/wp-content/uploads/2020/07/raca-de-cachorro-muito-popular-no-brasil-1.jpg',
        description: 'Thor adora correr e brincar com crianças.'
    },
];

export const Home = () => {
    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}> Encontre seu Melhor Amigo de Quatro Patas! </Text> */}
            <FlatList
                ListHeaderComponent={<Text style={styles.title}> Encontre seu Melhor Amigo de Quatro Patas! </Text>}
                data={dogs}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>

                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text style={styles.name}>{item.name}</Text>

                        <TouchableOpacity
                            style={styles.cardBotao}
                                onPress={() => router.push({
                                    pathname: '/stacks/[id]',
                                    params: {
                                        id: item.id,
                                        name: item.name,
                                        image: item.image,
                                        peso: item.peso,
                                        sexo: item.sexo,
                                        raca: item.raca,
                                        porte: item.porte,
                                        castrado: item.castrado,
                                        description: item.description,
                                    }
                                })}
                        >
                            <Text style={styles.saibaMais}>Saiba Mais</Text>
                        </TouchableOpacity>
                    
                    </View>
                )}
                
            />
        </View>
    );
};