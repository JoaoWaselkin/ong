import { useEffect } from 'react';
import { View, Text, Platform } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';

export const Face = () => {
  const [permission, requestPermission] = useCameraPermissions();

  useEffect(() => {
    requestPermission();
  }, []);

  if (!permission?.granted) {
    return <Text>Solicitando permissão para câmera...</Text>;
  }

  if (Platform.OS === 'web') {
    return <Text>CameraView não é suportado no navegador.</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <CameraView style={{ flex: 1 }} facing='front' />
    </View>
  );
}