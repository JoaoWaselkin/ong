import { Image, View, Text, Button, TouchableOpacity } from 'react-native';
import { stylesHomeScreen } from './style'
import { router } from 'expo-router';

const Logo = require('../../../assets/images/logoNew.png');

export const HomeScreen = () => {
  return (
    <View style={stylesHomeScreen.Container} >
      <Image source={Logo} style={stylesHomeScreen.logo}/>
      <TouchableOpacity onPress={() => router.navigate('/stacks/login')}>
        <Text style={stylesHomeScreen.textoLogin} >Login</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => router.navigate('/stacks/home')}>
        <Text style={stylesHomeScreen.textoLogin} >Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.navigate('/stacks/sobre')}>
        <Text style={stylesHomeScreen.textoLogin} >Sobre</Text>
      </TouchableOpacity>

    </View> 


  );    
}



