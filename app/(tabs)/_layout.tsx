import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Ou outra biblioteca de ícones
import  React  from 'react'
import { Dimensions, Text, View } from 'react-native';


export default function TabLayout() {

const { width, height } = Dimensions.get("window")

return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        position: 'absolute',
        bottom: 15,
        left: 16,
        right: 16,
        height: 62,
        elevation: 0,
        backgroundColor: '#EC7FA9',
        borderRadius: 16,
        // alignItems: 'center',
        justifyContent: 'space-around',
      }
    }}>

      <Tabs.Screen
        name="cachorros"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              alignItems: 'center',
              paddingTop: 22,
              width: width/5,
              paddingRight: 5,
            }}>

              <Ionicons
                name={focused ? 'paw' : 'paw-outline'}
                color={focused ? '#FFEDFA' : 'white'}
                size={24}
              />
              <Text style={{
                color: focused ? '#FFEDFA' : 'white',
                fontSize: 12,
                marginTop: 4,
                fontFamily: 'nunito',
              }}>
                Home
              </Text>
            </View>
          )
        }}
      />
      { <Tabs.Screen
        name="sobre"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              alignItems: 'center',
              paddingTop: 22,
              width: width/5,
              paddingRight: 15,
            }}>

              <Ionicons
                name={focused ? 'book' : 'book-outline'}
                color={focused ? '#FFEDFA' : 'white'}
                size={24}
              />
              <Text style={{
                color: focused ? '#FFEDFA' : 'white',
                fontSize: 12,
                marginTop: 4,
                fontFamily: 'nunito',
              }}>
                Sobre
              </Text>
            </View>
          )
        }}
      /> }

            { <Tabs.Screen
        name="telaInicial"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              alignItems: 'center',
              paddingTop: 22,
              width: width/5,
              paddingRight: 5,
              paddingLeft: 15,
            }}>

              <Ionicons
                name={focused ? 'star' : 'star-outline'}
                color={focused ? '#FFEDFA' : 'white'}
                size={24}
              />
              <Text style={{
                color: focused ? '#FFEDFA' : 'white',
                fontSize: 12,
                marginTop: 4,
                fontFamily: 'nunito',
              }}>
                Curiosidades
              </Text>
            </View>
          )
        }}
      /> }

    </Tabs>
);
}