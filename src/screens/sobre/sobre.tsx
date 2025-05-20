import { View, Text, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './style';
import { ExpoRoot, router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import BackButton from '@/components/backButton/backButton';

const Logo = require('../../../assets/images/logoNew.png');

interface ItemComoFunciona {
    id: string;
    texto: string;
}


export const Sobre = () => {

    const comoFunciona = [
        '1- ONGs ou protetores fazem o seu cadastro gratuitamente e no mesmo instante já podem publicar os animais com detalhes sobre suas características e personalidade;',
        '2- Pessoas que estão interessadas em ter um novo bichinho vão entrar no site e procurar um que tenha a ver com o perfil dele;',
        '3- Quando acharem aquele especial, elas entram em contato para adoção e pronto, é só combinar com a ONG ou protetor como buscar o mais novo membro da família!'
    ];

    const renderItem = ({ item }: { item: ItemComoFunciona }) => (
        <View>
            <Text style={styles.listaTexto}>• {item.texto}</Text>
        </View>
    );

        const ListHeader = () => (
            <>

            <BackButton/>

            <Text style={styles.informacoesTitulo}>Sobre a Ong</Text>


            <Text style={styles.informacoesTexto}>O Meu Pet Amoroso é um app onde ONGs, protetores de animais ou pessoas comuns podem divulgar cães e gatos para adoção. Por outro lado, pessoas interessadas em ter um novo bichinho de estimação, poderão encontrar aqui seu novo peludo.</Text>

            {<Image source={Logo} style={styles.logo}/>}

            <Text style={styles.informacoesTexto}>Quer divulgar um cão ou gato para adoção?
            Se você está dando lar temporário ou quer divulgar um animal para adoção, faça seu cadastro no site e, em seguida, publique o bichinho. Coloque o máximo de características e fotos sobre ele: assim você aumenta as chances de encontrar alguém que realmente combine com seu perfil, ajudando a evitar decepção e futuros abandonos. Pelo mesmo motivo, seja sincero quanto ao estado de saúde e características do animal.
            Importante: este é um site de adoção e a venda de animais é proibida, ok? Usuários que tentarem vender animais serão banidos do site.</Text>


        </>
    );

            const ListFooter= () => (
            <>

            <Text style={styles.informacoesTituloContato}>Contatos</Text>


            <Text style={styles.informacoesTexto}>Email: faleconosco@meupetamoroso.com.br.</Text>
            <Text style={styles.informacoesTexto}>Telefone/WhatsApp: (11) 99269-2529</Text>



        </>
    );

    return(
        <View style={styles.container}>
            <FlatList
                data={comoFunciona.map((resp, index) => ({ id: index.toString(), texto: resp }))}
                renderItem={renderItem}
                keyExtractor={(item: ItemComoFunciona) => item.id}
                ListHeaderComponent={ListHeader}
                ListFooterComponent={ListFooter}
            />
        </View>
    )

}