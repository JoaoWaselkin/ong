import { Image, View, Text, Button } from 'react-native';
import { stylesHomeScreen } from './style'
import { router } from 'expo-router';
 
const Logo = require('../../assets/images/dog.png');

export const HomeScreen = () => {
  return (
    <View style={stylesHomeScreen.titleContainer} >
      <Image source={Logo} style={stylesHomeScreen.logo}/>
      <Text style={stylesHomeScreen.title}>Ajude um animal</Text>
      <Text style={stylesHomeScreen.subtitle}>Encontre um novo melhor amigo para alegrar seus dias!</Text>
      <Button title='Faça login' onPress={() => router.navigate('/../screens/login/login')} />

    </View>


  );    
}



