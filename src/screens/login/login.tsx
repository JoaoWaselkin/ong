import { useState } from 'react';
import { router } from 'expo-router';
import { Text, View, TouchableOpacity, TextInput, Image, Alert, Pressable } from 'react-native';
import { styles } from './style';
import * as SecureStore from 'expo-secure-store';
import CustomButton from '@/components/CustomButton';
import * as LocalAuthentication from 'expo-local-authentication';

const Logo = require('../../../assets/images/logoNew.png');

export const Login = () => {
  const [email, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  const realizarLoginLocal = async () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      if (email !== '' && senha !== '') {
        router.navigate('/stacks/home');
      } else {
        alert('Os campos de Email e Senha precisam estar preenchidos!');
      }
    }, 2000);
  };

  const entrarComBiometria = async () => {
    const compatible = await LocalAuthentication.hasHardwareAsync();
    if (!compatible) {
      Alert.alert('Erro', 'Seu aparelho não tem suporte a biometria.');
      return;
    }

    const isBiometricEnrolled = await LocalAuthentication.isEnrolledAsync();
    if (!isBiometricEnrolled) {
      Alert.alert('Login', 'Nenhuma biometria encontrada. Por favor, cadastre uma biometria no seu dispositivo!');
      return;
    }

    const auth = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Login com Biometria',
      fallbackLabel: 'Biometria Não Reconhecida'
    });

    if (auth.success) {
      router.navigate('/stacks/home');
    } else {
      Alert.alert('Falha na Autenticação', 'Não foi possível autenticar com a biometria. Tente novamente.');
    }
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.subtitle}>Ajude animais de rua a encontrar um novo lar!</Text>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          onChangeText={setUsuario}
          value={email}
          placeholder="seu@email.com"
          placeholderTextColor="#999"
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          onChangeText={setSenha}
          value={senha}
          placeholder="*********"
          placeholderTextColor="#999"
          secureTextEntry={true}
        />

        <View style={styles.containerButtons}>
          <TouchableOpacity
            style={styles.infoButton}
            onPress={() => router.navigate('/stacks/cadastro')}
          >
            <Text style={styles.secondaryButtonText}>Criar conta</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.infoButton}
            onPress={() => router.navigate('/stacks/recuperarConta')}
          >
            <Text style={styles.secondaryButtonText}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        <CustomButton
          title="Login"
          onPress={realizarLoginLocal}
          loading={loading}
          disabled={loading}
        />

        <CustomButton
          title="Entrar com a biometria"
          onPress={entrarComBiometria}
        />
      </View>
    </View>
  );
};