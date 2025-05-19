import { View, Text, FlatList, Image, TouchableOpacity, TextInput, Pressable } from 'react-native';
import { styles } from './style';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import BackButton from '@/components/backButton';

const Logo = require('../../../assets/images/logoNew.png');

export const Formulario = () =>  {
    const [nome, setUsuario] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');

    return(
        <View style={styles.container}>
            <BackButton/>

            <Text style={styles.formularioTitulo}> Formulário de Adoção </Text>

            <Text style={styles.formularioSubtitle}>Preencha com atenção para darmos seguimento ao processo de adoção</Text>
            <Image source={Logo} style={styles.logo}/>
            <Text style={styles.formularioTexto}>Informações Pessoais:</Text>

        <TextInput
            style={styles.input}
            onChangeText={setUsuario}
            value={nome}
            placeholder="Nome"
            placeholderTextColor="#999"
        />

        <TextInput
            style={styles.input}
            onChangeText={setUsuario}
            value={sobrenome}
            placeholder="Sobrenome"
            placeholderTextColor="#999"
        />

        <TextInput
            style={styles.input}
            onChangeText={setUsuario}
            value={telefone}
            placeholder="(11)99999-9999"
            placeholderTextColor="#999"
        />

        <TextInput
            style={styles.input}
            onChangeText={setUsuario}
            value={email}
            placeholder="seu@email.com"
            placeholderTextColor="#999"
        />

        <TouchableOpacity onPress={() => router.navigate('/stacks/informacoes')} style={styles.button}>
            <Text style={styles.botaoAvancar}> Avançar </Text>
        </TouchableOpacity>

        </View>
    )


}