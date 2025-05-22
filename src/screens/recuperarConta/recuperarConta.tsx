import { useState } from 'react'
import { Text, View, TouchableOpacity, Image} from "react-native"
import { styles } from './style'
import BackButton from '@/components/backButton/backButton'
import CustomInput from '@/components/CustomInput/CustomInput'

const Logo = require('../../../assets/images/logoSad.png');

export const RecuperarConta = () => {
    const [email, setEmail] = useState('');

    return (
        <View style={styles.outerContainer}>
            <BackButton/>

            <View style={styles.container}>

                <Text style={styles.subtitle}>Problemas para acessar sua conta?</Text>  
                <Image source={Logo} style={styles.logo}/>
                <Text style={styles.title}>Recupere aqui!</Text>  

                <CustomInput
                    placeholder="example@gmail.com"
                    onChangeText={setEmail}
                    value={email}
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
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