import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFEDFA',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    
    formularioTitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#EC7FA9',
        marginTop: 75,
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