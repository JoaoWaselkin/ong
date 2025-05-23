import { useState } from 'react';
import { router } from 'expo-router';
import { Text, View, TouchableOpacity, TextInput, Image, Platform, Alert } from "react-native";
import { styles } from './style';
import BackButton from '@/components/backButton/backButton';
import { saveUserCredentials } from '../../utils/authStorage';
import Logo from '@/components/logo/logo'
import CustomInput from '@/components/CustomInput/CustomInput';


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
            <View style={styles.container}>
                <View style={{
                    width: 30,
                    height: 50
                }}>
                <BackButton/>
                </View>
                <View style={styles.containerCad}>
                    
                    <Text style={styles.title}> Seu cadastro é o primeiro passo para um futuro melhor, dê uma chance para quem não tem voz </Text>
                    <Text style={styles.subtitle}>Cadastre-se</Text>

                    <CustomInput
                        placeholder="@Username"
                        onChangeText={setUsername}
                        value={username}
                        placeholderTextColor="#999"
                        autoCapitalize="none"
                    />

                    <CustomInput
                        placeholder="example@gmail.com"
                        onChangeText={setEmail}
                        value={email}
                        placeholderTextColor="#999"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <CustomInput
                        placeholder="*********"
                        onChangeText={setSenha}
                        value={senha}
                        placeholderTextColor="#999"
                        secureTextEntry={true}
                    />

                    <Logo/>
                    <View style={styles.containerButtons}>
                        <TouchableOpacity
                            style={styles.button}
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
        </View>
    );
};