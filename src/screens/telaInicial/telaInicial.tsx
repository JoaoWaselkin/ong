import React from 'react';
import { View, Text, Image, TouchableOpacity, Pressable, ScrollView } from 'react-native';
import { styles } from './style';
import { router } from 'expo-router';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Logo = require('../../../assets/images/dog.png');
const Golden = require('../../../assets/images/goldenimage.png');
const Shih = require('../../../assets/images/shil.png');

export const TelaInicial = () => {
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Pressable
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <FontAwesome name="angle-left" size={30} color="black" />
        </Pressable>

        <Image
          source={Logo}
          style={styles.logo}
        />

        <View style={styles.section}>
          <Image
            source={Golden}
            style={styles.image}
          />
          <Text style={styles.text}>O Golden Retriever, do Reino Unido, é um cão dos sonhos por sua doçura, companheirismo e inteligência. Além de aprender truques facilmente e ser útil como cão-guia, ele é enérgico e adora agradar a todos. Sua paixão por natação e natureza amigável o tornaram um favorito das famílias globalmente, incluindo no Brasil, elevando sua popularidade.</Text>
        </View>

        <View style={styles.section}>
          <Image
            source={Shih}
            style={styles.image}
          />
          <Text style={styles.text}>O Shih Tzu é um cão pequeno e elegante do Tibete/China, com pelagem longa e personalidade afetuosa, brincalhona e às vezes teimosa. Corajoso e leal, apega-se aos donos e adapta-se bem a apartamentos, precisando de cuidados com a pelagem, exercícios e companhia. Tem uma história ligada à realeza chinesa.</Text>

        </View>
        <View style={styles.containerButtons}>
          <View>
            <TouchableOpacity
              style={styles.viewMoreButton}
              onPress={() => router.navigate('/stacks/home')}>
              <Text style={styles.viewMoreButtonText}>Ver animais</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={styles.viewMoreButton}
              onPress={() => router.navigate('/stacks/telaSobre')}>
              <Text style={styles.viewMoreButtonText}>Sobre a ong</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};