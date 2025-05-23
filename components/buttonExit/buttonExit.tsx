// BackButton.js
import { Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Platform } from 'react-native';
import { clearAuthStorage } from '@/src/utils/authStorage';
import { router } from 'expo-router';

export const ButtonExit = () => {
    
    const handleLogout = async () => {
        if (Platform.OS === 'web') {
            const confirmLogout = window.confirm("Tem certeza que deseja sair?");
            if (confirmLogout) {
                await clearAuthStorage();
                console.log('DEBUG (Formulario): Usuário deslogado. Redirecionando para login.');
                router.replace('/stacks/login');
            }
        } else {
            Alert.alert(
                "Sair da Conta",
                "Tem certeza que deseja sair?",
                [
                    {
                        text: "Cancelar",
                        style: "cancel"
                    },
                    {
                        text: "Sair",
                        onPress: async () => {
                            await clearAuthStorage();
                            console.log('DEBUG (Formulario): Usuário deslogado. Redirecionando para login.');
                            router.replace('/stacks/login');
                        }
                    }
                ]
            );
        }
    };

    return (
        <TouchableOpacity style={styles.buttonExit} onPress={handleLogout}>

        <MaterialCommunityIcons name="arrow-left-bottom" size={24} color="white" />
        <Text style={styles.text}>Sair da conta</Text>

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({

  buttonExit: {

    width: '50%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    // marginTop: 20,
    borderRadius: 20,
    backgroundColor: '#EC7FA9',
  },

  text: {
    
    fontSize: 16,
    color: 'white',
    fontFamily: 'Nunito',
    textAlign: 'center',
    marginLeft: 5,
  },
});


