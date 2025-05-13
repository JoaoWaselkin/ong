import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styles } from '../../src/screens/cachorroScreen/style'; // Ajuste o caminho se necessário
import { router } from 'expo-router';
import { listarCachorros } from '../../src/api/cachorroService';

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

const CachorrosTabScreen = () => { // Renomeie o componente
const [cachorros, setCachorros] = useState<Cachorro[]>([]);
const [pagina, setPagina] = useState(0);
const [temMais, setTemMais] = useState(true);
const [isLoading, setIsLoading] = useState(false);

async function carregarMaisCachorros() {
    if (isLoading || !temMais) return;
    setIsLoading(true);
    try {
    const resposta = await listarCachorros(pagina);
    setCachorros(prev => [...prev, ...resposta.content]);
    setTemMais(!resposta.last);
    setPagina(prev => prev + 1);
    } catch (err) {
    console.error('Erro ao carregar cachorros:', err);
    } finally {
    setIsLoading(false);
    }
}

useEffect(() => {
    carregarMaisCachorros();
}, []);

return (
    <View style={styles.container}>
    <FlatList
        ListHeaderComponent={<Text style={styles.title}> Encontre seu Melhor Amigo de Quatro Patas! </Text>}
        data={cachorros}
        keyExtractor={(item) => item.id}
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
        onEndReached={carregarMaisCachorros}
        onEndReachedThreshold={0.5}
        ListFooterComponent={isLoading ? <ActivityIndicator size="small" /> : null}
    />
    </View>
);
};

export default CachorrosTabScreen; // Exporte o componente renomeado