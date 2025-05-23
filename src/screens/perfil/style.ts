import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFEDFA',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    cardSobre: {
        width: '100%',
        height: 120,
        borderColor: '#FFEDFA',
        borderWidth: 1,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'
    },

    cardInfos: {

        flexDirection: 'row',
        width: '75%',
        height: 80,
        // backgroundColor: 'blue',
        right: 20,
        top: 15

    },

    iconPerfil: {

        width: 70,
        height: 80,
        // backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
    },

    iconInfos: {

        width: 120,
        height: 80,
        // backgroundColor: 'orange'
        
    },

    textInfo: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        fontFamily: 'Nunito',
        marginTop: 25,
        marginLeft: 5
    },

    cardInformacoes: {
        width: '80%',
        height: 'auto',
        minHeight: '60%',
        borderColor: '#FFEDFA',
        borderWidth: 2,
        borderRadius: 20,
        marginTop: 20,
        paddingBottom: 20,
        backgroundColor: '#FFF',
        marginBottom: 95,
        // alignItems: 'center',
        // justifyContent: 'center'
    },

    tituloInformacoes: {

        width: '70%',
        height: 30,
        // backgroundColor: 'black',
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 12,
        fontSize: 18,
        fontWeight: 'normal',
        fontFamily: 'Nunitobold'
        // textTransform: 'uppercase'
    },

    cardConfig: {

        width: '85%',
        height: 350,
        // backgroundColor: 'blue',
        margin: 'auto',
        marginBottom: 20

    },

    cardCadastro: {
        
        flexDirection: 'row',
        width: 'auto',
        height: 50,
        // backgroundColor: 'black'

    },

    imageCadastro: {

        width: '15%',
        height: 'auto',
        // backgroundColor: 'green',
        alignItems: 'center'
    },

    cardTexts: {
        
        flexDirection: 'column',
        width: '70%',
        height: 'auto',
        // backgroundColor: 'orange'
    },

    titleCadastro: {
        color: 'black',
        width: '80%',
        height: 'auto',
        fontSize: 15,
        fontFamily: 'NunitoBold'
        
    },

    textCadastro: {
        color: '#333',
        width: '100%',
        height: 'auto',
        // backgroundColor: 'black',
        fontSize: 13,
        fontFamily: 'Nunito',
        
    },

    setaCadastro: {

        width: '15%',
        height: 'auto',
        // backgroundColor: 'green',
        alignItems: 'center'
    },

    line: {

        width: '100%',
        height: 1,
        backgroundColor: 'black',
        opacity: 0.1,
        marginBottom: 15
    },


})