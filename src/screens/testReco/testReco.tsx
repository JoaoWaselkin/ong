import { useState, useEffect } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { styles } from './style';
import { router } from 'expo-router';

export const TestReco = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function verifyAvaiableAuthentication(){
    const compatible = await LocalAuthentication.hasHardwareAsync();
    console.log(compatible);

    const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
    console.log(types.map(type => LocalAuthentication.AuthenticationType[type]))
  }

  async function handleAuthentication(){
    const isBiometricEnrolled = await LocalAuthentication.isEnrolledAsync();
    console.log(isBiometricEnrolled)
    if(!isBiometricEnrolled){
        return Alert.alert('Login', 'Nenhuma biometria encontrada. Por favor, cadastre no dispositivo!')
    }
    const auth = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Login Com Biometria',
        fallbackLabel: 'Biometria Não Reconhecida'
    });
    setIsAuthenticated(auth.success);
      if (auth.success) {
      router.navigate('/stacks/home');
    }

}

  useEffect(() => {
    verifyAvaiableAuthentication();
  }, []);
    
    return (
    <View style={styles.container}>
      <Text>Usuario Conectado: { isAuthenticated ? 'Sim' : 'Não'}</Text>
      <Button title= "entrar" onPress={handleAuthentication}/>
    </View>
  );
}