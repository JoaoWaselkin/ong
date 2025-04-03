import { Image, View, Text, Button, TouchableOpacity } from 'react-native';
import { stylesHomeScreen } from './style'
import { router } from 'expo-router';

const Logo = require('../../assets/images/dog.png');

export const HomeScreen = () => {
  return (
    <View style={stylesHomeScreen.Container} >
      <Image source={Logo} style={stylesHomeScreen.logo}/>
      <TouchableOpacity onPress={() => router.navigate('../../screens/login/login')}>
        <Text style={stylesHomeScreen.textoLogin} >Login</Text>
      </TouchableOpacity>

    </View> 


  );    
}



