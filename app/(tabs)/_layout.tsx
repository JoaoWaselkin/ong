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
        bottom: 20,
        left: 16,
        right: 16,
        height: 62,
        elevation: 0,
        backgroundColor: '#EC7FA9',
        borderRadius: 16,
        alignItems: 'center',
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
              paddingRight: 150  
            }}>

              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                color={focused ? '#FFEDFA' : 'black'}
                size={24}
              />
              <Text style={{
                color: focused ? '#FFEDFA' : 'black',
                fontSize: 12,
                marginTop: 4,
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
              paddingLeft: 250 
            
            }}>

              <Ionicons
                name={focused ? 'book' : 'book-outline'}
                color={focused ? '#FFEDFA' : '#black'}
                size={24}
              />
              <Text style={{
                color: focused ? '#FFEDFA' : 'black',
                fontSize: 12,
                marginTop: 4,
              }}>
                Sobre
              </Text>
            </View>
          )
        }}
      /> }

    </Tabs>
);
}