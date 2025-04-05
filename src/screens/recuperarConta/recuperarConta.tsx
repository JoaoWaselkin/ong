import { useState } from 'react'
import { router } from 'expo-router'
import { Text, View, TouchableOpacity, TextInput, Image} from "react-native"
import { styles } from './style'


const Logo = require('../../../assets/images/dog2.png');

export const RecuperarConta = () => {
    const [email, setEmail] = useState('');

    return (
        <View style={styles.outerContainer}>
            <View style={styles.container}>

                <Text style={styles.subtitle}>Problemas para acessar sua conta?</Text>  
                <Image source={Logo} style={styles.logo}/>
                <Text style={styles.title}>Recupere aqui!</Text>  

                <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="seu@email.com"
                placeholderTextColor="#999"
                />
                
                <View style={styles.containerButtons}>
                <TouchableOpacity style={styles.infoButton}>
                    <Text style={styles.secondaryButtonText}>Enviar Email</Text>
                </TouchableOpacity>
                </View>
            </View>
</View>


    )
} 