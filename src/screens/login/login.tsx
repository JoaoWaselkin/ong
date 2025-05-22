import { useState, useEffect } from 'react';
import { Platform, Text, View, TouchableOpacity, TextInput, Image, ActivityIndicator, Alert } from 'react-native';
import { router } from 'expo-router';
import { styles } from './style';
import CustomButton from '@/components/buttonDefault/CustomButton';
import Logo from '@/components/logo/logo';
import * as LocalAuthentication from 'expo-local-authentication';
import { verifyUserCredentials, getAuthenticatedStatus, setAuthenticatedStatus } from '../../utils/authStorage';
import CustomInput from '@/components/CustomInput/CustomInput';


export const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    console.log('DEBUG (Login): useEffect - Verificando status de login inicial...');
    const checkLoginStatus = async () => {
      try {
        const authenticated = await getAuthenticatedStatus();
        if (authenticated) {
          console.log('DEBUG (Login): Usuário já autenticado, redirecionando para home.');
          router.navigate('/stacks/home');
        } else {
          console.log('DEBUG (Login): Usuário não autenticado.');
        }
      } catch (error) {
        console.error("DEBUG (Login): Erro ao verificar status de login:", error);
      } finally {
        setAppLoading(false);
        console.log('DEBUG (Login): appLoading definido para false.');
      }
    };

    checkLoginStatus();
  }, []);

  const realizarLoginLocal = async () => {
    setLoading(true);
    console.log('DEBUG (Login): Iniciando realizarLoginLocal...');
    console.log(`DEBUG (Login): Campos - Email: "${email}", Senha: "${senha}"`);

    // Pequeno delay para simular um processo de login
    await new Promise(resolve => setTimeout(resolve, 500));

    try {
      if (!email.trim() || !senha.trim()) {
        console.log('DEBUG (Login): Erro de validação: campos vazios.');
        alert('Erro no Login, por favor, preencha todos os campos.');
        return;
      }

      console.log('DEBUG (Login): Chamando verifyUserCredentials...');
      const isValid = await verifyUserCredentials(email, senha);
      
      if (isValid) {
        console.log('DEBUG (Login): Credenciais válidas. Definindo status de autenticação...');
        await setAuthenticatedStatus(true);
        console.log('DEBUG (Login): Redirecionando para home...');
        router.navigate('/stacks/home');
      } else {
        console.log('DEBUG (Login): Credenciais inválidas.');
        alert('Erro no Login, Email ou senha inválidos. Tente novamente.');
      }
    } catch (error) {
      console.error("DEBUG (Login): Erro ao tentar fazer login:", error);
      alert('Ocorreu um erro ao tentar fazer login. Tente novamente.');
    } finally {
      setLoading(false);
      console.log('DEBUG (Login): realizarLoginLocal concluído.');
    }
  };

  const entrarComBiometria = async () => {
    console.log('DEBUG (Login): Tentando entrar com biometria...');
    if (Platform.OS === 'web') {
        console.log('DEBUG (Login): Biometria não disponível na web.');
        alert('Não Disponível, a biometria não está disponível na web.');
        return;
    }

    const compatible = await LocalAuthentication.hasHardwareAsync();
    if (!compatible) {
      console.log('DEBUG (Login): Aparelho não tem suporte a biometria.');
      alert('Erro de Biometria, Seu aparelho não tem suporte a biometria.');
      return;
    }

    const isBiometricEnrolled = await LocalAuthentication.isEnrolledAsync();
    if (!isBiometricEnrolled) {
      console.log('DEBUG (Login): Nenhuma biometria encontrada no dispositivo.');
      alert('Erro de Biometria, Nenhuma biometria encontrada. Por favor, cadastre uma biometria no seu dispositivo!');
      return;
    }

    console.log('DEBUG (Login): Iniciando autenticação biométrica...');
    const auth = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Login com Biometria',
      fallbackLabel: 'Biometria Não Reconhecida'
    });

    if (auth.success) {
      console.log('DEBUG (Login): Autenticação biométrica bem-sucedida. Definindo status...');
      await setAuthenticatedStatus(true);
      console.log('DEBUG (Login): Redirecionando para home...');
      router.navigate('/stacks/home');
    } else {
      console.log('DEBUG (Login): Autenticação biométrica falhou.');
      alert('Autenticação Falhou, não foi possível autenticar com a biometria. Tente novamente.');
    }
    console.log('DEBUG (Login): entarComBiometria concluído.');
  };

  if (appLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={{ marginTop: 10 }}>Verificando autenticação...</Text>
      </View>
    );
  }

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Logo/>
        <Text style={styles.subtitle}>Ajude animais de rua a encontrar um novo lar!</Text>
        <Text style={styles.title}>Login</Text>

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

        {/* Renderiza o botão de biometria apenas se não for a plataforma web */}
        {Platform.OS !== 'web' && (
            <CustomButton
                title="Entrar com a biometria"
                onPress={entrarComBiometria}
            />
        )}
      </View>
    </View>
  );
};