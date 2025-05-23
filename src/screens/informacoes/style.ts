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
        marginBottom: 10,
        marginLeft: 25,
        marginRight: 25,
        textAlign: 'center',
        fontFamily: 'nunitoBold',
    },

    informacoesTexto:{
        fontSize: 16,
        color: '#A97487',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        marginTop: 15,
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
        fontSize: 20,
        color: '#EC7FA9',
        marginBottom: 5,
        marginRight: 'auto',
        marginLeft: 'auto',
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
        width: 200,
        height: 200,
        marginBottom: 10,
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

    cardTop: {
        height: 330, 
        width: 350, 
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems:'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 5,
    },

    containerCard: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        paddingBottom: 20,
        gap: 10
    },

    card: {
        height: 180,
        width: 150,
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    cardTexto: {
        color: '#A97487',
        fontSize: 14,
        fontFamily: 'nunito',
        fontWeight: 'regular',
        textAlign: 'center',
        // paddingTop: 10
    }
}) 