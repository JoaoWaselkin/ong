import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Splash } from '@/src/screens/splash/splashScreen';

// Outros imports (que por enquanto não são usados)
// import { HomeScreen } from '../src/screens/boasVindas/boasVindas';
// import { Login } from '../src/screens/login/login';
// import { CachorroScreen } from '../src/screens/home/home';
// import { Cadastro } from '@/src/screens/cadastro/cadastro';
// import { TelaInicial } from '@/src/screens/curiosidades/curiosidades';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Splash />
    </GestureHandlerRootView>
  );
}
