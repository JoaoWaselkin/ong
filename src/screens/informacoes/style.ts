import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFEDFA',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    informacoesTitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#EC7FA9',
        marginTop: 65,
        marginBottom: 25,
        marginLeft: 25,
        marginRight: 25,
        textAlign: 'justify'
    },

    informacoesTexto:{
        fontSize: 16,
        color: '#E69DB8',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        textAlign: 'justify',
    },

    listaTexto: {
        fontSize: 16,
        color: '#E69DB8',
        marginLeft: 15,
        marginRight: 15,
        padding: 5,
    },

    subtitleTexto: {
        fontSize: 16,
        color: '#EC7FA9',
        marginBottom: 5,
        marginRight: 141,
        fontWeight: 'medium',
    },

    button: {
        backgroundColor: '#EC7FA9',
        borderRadius: 20,
        marginTop: 20,
        padding: 10,
        width: '85%',
        alignItems: 'center'
    },

    logo: {
        width: 150,
        height: 150,
        marginBottom: 25
    },


}) 