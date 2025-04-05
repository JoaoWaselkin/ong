import { useState } from 'react'
import { router } from 'expo-router'
import { Text, View, TouchableOpacity, TextInput, Image} from "react-native"
import { styles  } from './style'


const Logo = require('../../assets/images/dog.png');

export const Login = () => {
    const [texto, setTexto] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <View style={styles.outerContainer}>
            <View style={styles.container}>
                <Image source={Logo} style={styles.logo}/>
                <Text style={styles.subtitle}>Ajude animais de rua a encontrar um novo lar!</Text>  
                <Text style={styles.title}>Login</Text>  

                <TextInput
                style={styles.input}
                onChangeText={setTexto}
                value={texto}
                placeholder="@seuUsuario"
                placeholderTextColor="#999"
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
                <TouchableOpacity style={styles.infoButton}>
                    <Text style={styles.secondaryButtonText}>Criar conta</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.infoButton}>
                    <Text style={styles.secondaryButtonText}>Esqueci minha senha</Text>
                </TouchableOpacity>
                </View>
                
                <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
</View>


    )
} 