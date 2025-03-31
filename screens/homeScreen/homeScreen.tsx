import { Image, View, Text, Button, TouchableOpacity } from 'react-native';
import { stylesHomeScreen } from './style'
import { router } from 'expo-router';
 
const Logo = require('../../assets/images/dog.png');

export const HomeScreen = () => {
  return (
    <View style={stylesHomeScreen.titleContainer} >
      <Image source={Logo} style={stylesHomeScreen.logo}/>
      <Text style={stylesHomeScreen.title}>Ajude um animal</Text>
      <Text style={stylesHomeScreen.subtitle}>Encontre um novo melhor amigo para alegrar seus dias!</Text>
      <TouchableOpacity onPress={() => router.navigate('../../screens/login/login')}>
        <Text>Faça Login</Text>
      </TouchableOpacity>

    </View> 


  );    
}



