import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFEDFA',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 20
    },

    informacoesTitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#EC7FA9',
        marginTop: 70,
        marginBottom: 25,
        marginLeft: 25,
        marginRight: 25,
        textAlign: 'justify',
        fontFamily: 'nunitoBold',
    },

    informacoesTexto:{
        fontSize: 16,
        color: '#E69DB8',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        textAlign: 'justify',
        fontFamily: 'nunito',
    },

    listaTexto: {
        fontSize: 16,
        color: '#E69DB8',
        marginLeft: 15,
        marginRight: 15,
        padding: 5,
        fontFamily: 'nunito',
    },

    subtitleTexto: {
        fontSize: 16,
        color: '#EC7FA9',
        marginBottom: 5,
        marginRight: 141,
        marginLeft: 15,
        fontWeight: 'medium',
        fontFamily: 'nunito',
    },

    button: {
        backgroundColor: '#EC7FA9',
        borderRadius: 20,
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 10,
        width: '85%',
        alignItems: 'center'
    },

    logo: {
        width: 150,
        height: 150,
        marginBottom: 25,
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    botaoAvancar: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: 'nunito',
    },

    backButton: {
    position: 'absolute',
    minWidth: '9%',
    top: 15,
    left: 20,
    zIndex: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#EC7FA9',
},
}) 