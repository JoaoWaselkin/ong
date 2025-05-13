import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Ou outra biblioteca de ícones

export default function TabLayout() {
return (
    <Tabs>
    <Tabs.Screen
        name="cachorros" // Nome da rota (corresponde ao nome do arquivo sem a extensão)
        options={{
        tabBarLabel: 'Cachorros',
        tabBarIcon: ({ color, size }) => (
            <Ionicons name="paw-outline" size={size} color={color} />
        ),
          headerShown: false, // Oculta o header padrão desta tela
        }}
    />
      {/* Adicione outras abas aqui, por exemplo: */}
    {/* <Tabs.Screen
        name="outra-aba"
        options={{
        tabBarLabel: 'Outra Aba',
        tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle-outline" size={size} color={color} />
        ),
        }}
      /> */}
    </Tabs>
);
}