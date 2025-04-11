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
        marginLeft: 70
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
        color: '#EC7FA9',
        margin: 5,
        marginLeft: 97
    },
    descricao: {
        fontSize: 14,
        textAlign: 'center',
        color: '#000',
        padding: 10
    },

    caracteristicas: {
        fontSize: 14,
        textAlign: 'justify',
        color: '#000',
        padding: 10,
        maxHeight: 200
    }
});