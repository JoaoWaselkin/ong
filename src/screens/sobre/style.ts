import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

        container: {
        flex: 1,
        backgroundColor: '#FFEDFA',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 80
    },

    listaTexto: {
        fontSize: 16,
        color: '#E69DB8',
        marginLeft: 15,
        marginRight: 15,
        padding: 5,
    },

        logo: {
        width: 150,
        height: 150,
        marginBottom: 25,
        marginLeft: 'auto',
        marginRight: 'auto',
    },

        informacoesTexto:{
        fontSize: 16,
        color: '#E69DB8',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        textAlign: 'justify',
    },

        informacoesTitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#EC7FA9',
        marginTop: 65,
        marginBottom: 25,
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'justify'
    },

    informacoesTituloContato: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#EC7FA9',
        marginTop: 50,
        marginBottom: 15,
        marginLeft: 15,
        marginRight: 'auto',
        textAlign: 'justify'
    }
    
})