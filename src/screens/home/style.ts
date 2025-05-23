import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    listContent: {
        paddingBottom: 5,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFEDFA',
        padding: 20,
        paddingBottom: 45,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#EC7FA9',
        marginBottom: 20,
        fontFamily: 'nunitoBold',
    },
    card: {
        width: 250,
        height: 250,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FED2E2',
        borderRadius: 8,
        borderColor:'#EC7FA9',
        padding: 15,
        margin: 25,
        marginBottom: 35,
        marginLeft: 'auto',
        marginRight: 'auto',
        shadowColor: '#EC7FA9',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: 210,
        height: 210,
        borderRadius: 25,
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 5,
        fontFamily: 'nunito',
    },
    listCard:{
        flexDirection: 'row'
    },  
    cardContainer: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginHorizontal: 16, 
    },
    cardBotao:{
        height: 40,
        width: 125,
        backgroundColor: '#EC7FA9',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },

    saibaMais:{
        fontSize: 15,
        fontWeight: 'medium',
        color: '#fff',
        fontFamily: 'nunito',
    },
});