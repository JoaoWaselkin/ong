import { View, Text, FlatList, Image, TouchableOpacity, TextInput, Pressable, ScrollView } from 'react-native';
import { styles } from './style';
import { ExpoRoot, router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import BackButton from '@/components/backButton/backButton';
import Logo from '@/components/logo/logo';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';



export const Informacoes = () => {


    return (
        <ScrollView 
        style={styles.scrollViewContainer}
        >
            <View style={styles.container}>
                <View style={styles.header}>
                    <BackButton />
                    <Logo/>
                    <Text></Text>
                </View>

                <View style={styles.contentContainer}>
                    <View style={styles.contentContainerTitulo}>
                        <Text style={styles.pageTitulo}>Nossos valores</Text>
                        <Text style={styles.pageSubtitulo}>Os valores são as crenças, que moldam a identidade e constroem confiança com os consumidores.</Text>
                    </View>

                    <View style={styles.card}>
                        <AntDesign name="hearto" size={50} color="#" />
                        <Text style={styles.cardTitulo}>Amor e cuidado</Text>
                        <Text style={styles.cardTexto}>Promovemos o amor e o cuidado incondicional com todos os cães que acolhemos.</Text>
                    </View>

                    <View style={styles.card}>
                        <Ionicons name="paw-outline" size={50} color="black" />
                        <Text style={styles.cardTitulo}>Resgate e reabilitação</Text>
                        <Text style={styles.cardTexto}>Resgatamos cães em situação de risco e trabalhamos para sua recuperação física e emocional.</Text>
                    </View>

                    <View style={styles.card}>
                        <AntDesign name="home" size={50} color="#" />
                        <Text style={styles.cardTitulo}>Adoção responsável</Text>
                        <Text style={styles.cardTexto}>Incentivamos a adoção consciente, garantindo lares seguros e amorosos para os cães.</Text>
                    </View>

                    <View style={styles.card}>
                        <Ionicons name="medkit" size={50} color="black" />
                        <Text style={styles.cardTitulo}>Educação comunitária</Text>
                        <Text style={styles.cardTexto}>Educamos a comunidade sobre a importância do respeito e bem-estar animal.</Text>
                    </View>

                    <View style={styles.card}>
                        <Ionicons name="people" size={50} color="black" />
                        <Text style={styles.cardTitulo}>Transparência</Text>
                        <Text style={styles.cardTexto}>Atuamos com transparência em nossas ações, garantindo a confiança dos colaboradores e adotantes.</Text>
                    </View>

                    <View style={styles.card}>
                        <Ionicons name="leaf" size={50} color="black" />
                        <Text style={styles.cardTitulo}>Voluntariado</Text>
                        <Text style={styles.cardTexto}>Valorizamos o trabalho voluntário como força vital da nossa ONG.</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}