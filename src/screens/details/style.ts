import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFEDFA',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },


    image: {
        width: 250,
        height: 250,
        borderRadius: 10,
        margin: 15,
    },

    titulo: {
        color: '#EC7FA9',
        margin: 25,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10
    },

    name: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#E69DB8',
        margin: 5,
    },
    descricao: {
        fontSize: 15,
        textAlign: 'center',
        color: '#E69DB8',
        padding: 10
    },
    
    caracteristicas:{
        marginRight: 150
    },


    caracteristicasAnimal:{
        padding: 10,
        color: '#E69DB8',
        fontWeight: 'medium',
        fontSize: 16,
    },

    button: {
        backgroundColor: '#EC7FA9',
        borderRadius: 20,
        marginTop: 20,
        padding: 10,
        width: '85%',
        alignItems: 'center'
    },

    botaoAdoteme: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold'
    }
});