import { TouchableOpacity, View, Text, StyleSheet} from "react-native"
import { router } from 'expo-router'
import { FontAwesome5, Ionicons, Octicons } from "@expo/vector-icons"
import { FontAwesome6 } from "@expo/vector-icons"

export const BottomTab = () => {
    return (
        <View style={styles.containerTab}>
            <TouchableOpacity onPress={() => router.navigate('/stacks/home')} style={styles.buttonTab}>
                <Ionicons name="paw-outline" size={24} color="white" />
                <Text style={styles.textTab}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.navigate('/stacks/sobre')} style={styles.buttonTab}>
                <FontAwesome6 name="shield-dog" size={24} color="white" />
                <Text style={styles.textTab}>Sobre</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.navigate('/stacks/perfil')} style={styles.buttonTab}>
                <FontAwesome5 name="user-circle" size={24} color="white" />
                <Text style={styles.textTab}>Perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.navigate('/stacks/curiosidades')} style={styles.buttonTab}>
                <Ionicons name="star-outline" size={24} color="white" />
                <Text style={styles.textTab}>Detalhes</Text>
            </TouchableOpacity>
        </View>
    )
}

export const styles = StyleSheet.create({

    containerTab: {

        width: 300,
        height: 53,
        backgroundColor: '#EC7FA9',
        borderRadius: 20,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        top: '92%',
            
    },

    buttonTab: {
        alignItems: 'center',
        
    },

    textTab: {
        color: '#fff',
        fontFamily: 'nunito'
    },
})