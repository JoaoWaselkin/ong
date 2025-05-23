import { View, Text } from 'react-native';
import { styles } from './style';
import { router } from 'expo-router';
import React, { useState } from 'react';
import BackButton from '@/components/backButton/backButton';
import CustomButton from '@/components/buttonDefault/CustomButton';
import Logo from '@/components/logo/logo';
import CustomInput from '@/components/CustomInput/CustomInput';


export const Formulario = () =>  {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');

    return(
        <View style={styles.containerPai}>
            <BackButton/>
            <View style={styles.container}>
                <Text style={styles.formularioTitulo}> Formulário de Adoção </Text>
                <Text style={styles.formularioSubtitle}>Preencha com atenção para darmos seguimento ao processo de adoção</Text>
                <Logo/>
                <Text style={styles.formularioTexto}>Informações Pessoais:</Text>

                <CustomInput
                    placeholder="Nome"
                    value={nome}
                    onChangeText={setNome}
                />

                <CustomInput
                    placeholder="Sobrenome"
                    value={sobrenome}
                    onChangeText={setSobrenome}
                />

                <CustomInput
                    placeholder="(XX) XXXXX-XXXX"
                    value={telefone}
                    onChangeText={setTelefone}
                />

                <CustomInput
                    placeholder="example@gmail.com"
                    onChangeText={setEmail}
                    value={email}
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <CustomButton
                    title="Avançar"
                    onPress={() => router.navigate('/stacks/informacoes')}
                />
            </View>
        </View>
    )


}