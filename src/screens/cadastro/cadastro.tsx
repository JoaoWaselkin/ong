import { useState } from 'react';
import { router } from 'expo-router';
import { Text, View, TouchableOpacity, TextInput, Image, Platform, Alert } from "react-native";
import { styles } from './style';
import BackButton from '@/components/backButton/backButton';
import { saveUserCredentials } from '../../utils/authStorage';

const Logo = require('../../../assets/images/logoNew.png');

export const Cadastro = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);

    const handleCadastro = async () => {
        setLoading(true);
        console.log('DEBUG (Cadastro): Iniciando handleCadastro...');
        console.log(`DEBUG (Cadastro): Campos - Usuário: "${username}", Email: "${email}", Senha: "${senha}"`);

        const emailRegex = /\S+@\S+\.\S+/;
        let errorMessage = '';

        if (!username.trim()) {
            errorMessage = ' por favor, preencha o campo de usuário.';
        } else if (!email.trim()) {
            errorMessage = ' por favor, preencha o campo de e-mail.';
        } else if (!emailRegex.test(email)) {
            errorMessage = ' por favor, insira um e-mail válido.';
        } else if (!senha.trim()) {
            errorMessage = ' por favor, preencha o campo de senha.';
        } else if (senha.length < 6) {
            errorMessage = ' a senha deve ter no mínimo 6 caracteres.';
        }

        if (errorMessage) {
            console.log('DEBUG (Cadastro): Erro de validação:', errorMessage);
            alert('Erro no cadastro,' + errorMessage);
            setLoading(false);
            return;
        }

        try {
            console.log('DEBUG (Cadastro): Chamando saveUserCredentials...');
            await saveUserCredentials(username, email, senha);

            alert('Sucesso! Cadastro realizado com sucesso! Agora você pode fazer login.');
            console.log('DEBUG (Cadastro): Redirecionando para login...');
            router.navigate('/stacks/login');
        } catch (error) {
            console.error("DEBUG (Cadastro): Erro ao cadastrar:", error);
            alert('Ocorreu um erro ao tentar cadastrar. Tente novamente.');
        } finally {
            setLoading(false);
            console.log('DEBUG (Cadastro): handleCadastro concluído.');
        }
    };

    return (
        <View style={styles.outerContainer}>
            <BackButton/>

            <View style={styles.container}>
                <Text style={styles.title}> Seu cadastro é o primeiro passo para um futuro melhor, dê uma chance para quem não tem voz </Text>
                <Text style={styles.subtitle}>Cadastre-se</Text>

                <TextInput
                    style={styles.input}
                    onChangeText={setUsername}
                    value={username}
                    placeholder="@seuUsuario"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="exemplo@email.com"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={setSenha}
                    value={senha}
                    placeholder="*********"
                    placeholderTextColor="#999"
                    secureTextEntry={true}
                />

                <Image source={Logo} style={styles.logo}/>

                <View style={styles.containerButtons}>
                    <TouchableOpacity
                        style={styles.infoButton}
                        onPress={handleCadastro}
                        disabled={loading}
                    >
                        <Text style={styles.secondaryButtonText}>
                            {loading ? 'Cadastrando...' : 'Criar conta'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};