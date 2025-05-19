import { useState } from 'react';
import { router } from 'expo-router';
import { Text, View, TouchableOpacity, TextInput, Image, Alert, Pressable } from 'react-native';
import { styles } from './style';
import * as SecureStore from 'expo-secure-store';
import CustomButton from '@/components/CustomButton';

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

  const entrarComFaceIDLocal = async () => {
    router.navigate('/stacks/reconhecimento');
    alert('A funcionalidade de autenticação com FaceID ou Biometria será implementada aqui.');
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
          onPress={entrarComFaceIDLocal}

        />
      </View>
    </View>
  );
};