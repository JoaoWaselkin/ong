import React from 'react';
import { View, Text, Image, TouchableOpacity, Pressable, ScrollView } from 'react-native';
import { styles } from './style';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '@/components/backButton/backButton';
import CustomButton from '@/components/buttonDefault/CustomButton';
import Logo from '@/components/logo/logo';
import { BottomTab } from '@/components/bottomTab/bottomTab';

const Golden = require('../../../assets/images/goldenimage.png');
const Shih = require('../../../assets/images/shil.png');

export const TelaInicial = () => {
  return (
      <View style={styles.container}>
          <ScrollView showsHorizontalScrollIndicator={false} style={styles.scrollViewContainer}>
            <SafeAreaView/>
              <View style={{
                flex: 1,
                flexDirection: 'column',
                // backgroundColor: 'black'
                }}>
                <BackButton/>
                <Logo/>
              </View>
                <View style={styles.section}>

                  <Text style={styles.titulo}>Curiosidades do Reino Animal</Text>
                  
                  <View style={styles.card}>
                    <Image
                      source={Golden}
                      style={styles.image}
                    />
                    <Text style={styles.text}>O Golden Retriever, do Reino Unido, é um cão dos sonhos por sua doçura, companheirismo e inteligência. Além de aprender truques facilmente e ser útil como cão-guia, ele é enérgico e adora agradar a todos. Sua paixão por natação e natureza amigável o tornaram um favorito das famílias globalmente, incluindo no Brasil, elevando sua popularidade.</Text>
                  </View>

                </View>

                <View style={styles.section}>

                  <View style={styles.card}>

                  <Image
                    source={Shih}
                    style={styles.image}
                  />
                  <Text style={styles.text}>O Shih Tzu é um cão pequeno e elegante do Tibete/China, com pelagem longa e personalidade afetuosa, brincalhona e às vezes teimosa. Corajoso e leal, apega-se aos donos e adapta-se bem a apartamentos, precisando de cuidados com a pelagem, exercícios e companhia. Tem uma história ligada à realeza chinesa.</Text>

                  </View>

                </View>
                <View style={styles.containerButtons}>
                  <View>

                    <CustomButton
                      title="Ver animais"
                      onPress={() => router.navigate('/stacks/home')}
                    />
                  </View>

                  <View>
                    <CustomButton
                      title="Sobre nós"
                      onPress={() => router.navigate('/stacks/sobre')}
                    />

                  </View>
                </View>
              {/* </SafeAreaView> */}
          </ScrollView>
          <View style={{alignItems: 'center', justifyContent: 'center', marginBottom: 15}}>
                <BottomTab/>
          </View>
          
        </View>    
    );
};