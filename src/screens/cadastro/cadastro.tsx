import { useState } from 'react'
import { router } from 'expo-router'
import { Text, View, TouchableOpacity, TextInput, Image} from "react-native"
import { styles } from './style'


const Logo = require('../../../assets/images/dog.png');

export const Cadastro = () => {
    const [texto, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <View style={styles.outerContainer}>
            <View style={styles.container}>

                <Text style={styles.title}> Seu cadastro é o primeiro passo para um futuro melhor, dê uma chance para quem não tem voz </Text>  
                <Text style={styles.subtitle}>Cadastre-se</Text>  

                <TextInput
                style={styles.input}
                onChangeText={setUsuario}
                value={texto}
                placeholder="@seuUsuario"
                placeholderTextColor="#999"
                />

                <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="examplo@email.com"
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

                <Image source={Logo} style={styles.logo}/>
                
                <View style={styles.containerButtons}>
                <TouchableOpacity style={styles.infoButton}>
                    <Text style={styles.secondaryButtonText}>Criar conta</Text>
                </TouchableOpacity>
                </View>
            </View>
</View>


    )
} 