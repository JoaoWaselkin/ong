import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d17b9f',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
});