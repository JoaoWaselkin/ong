import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    containerPai: {
        flex: 1,
        backgroundColor: '#FFEDFA',

    },

    container: {
        height: 750,
        width: '90%',
        backgroundColor: '#FFEDFA',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto'
    },
    
    formularioTitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#EC7FA9',
        marginBottom: 50,
        fontFamily: 'nunitoBold',
    },

    formularioSubtitle: {
        fontSize: 16,
        fontWeight: 'regular',
        marginLeft: 25,
        marginRight: 20,
        marginBottom: 25,
        color: '#EC7FA9',
        textAlign: 'center',
        fontFamily: 'nunito',
    },

    formularioTexto: {
        fontSize: 16,
        fontWeight: 'regular',
        color: '#EC7FA9',
        marginBottom: 20,
        fontFamily: 'nunito',

    }
}); 