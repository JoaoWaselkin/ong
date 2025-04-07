import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFEDFA',
        padding: 20,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#EC7FA9',
        marginBottom: 20,
    },
    card: {
        width: 350,
        height: 150,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: 125,
        height: 125,
        borderRadius: 50,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#EC7FA9',
        marginLeft: 50
        
    },
    listCard:{
        flexDirection: 'row'
    }
});