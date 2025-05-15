import { useEffect, useRef, useState } from 'react';
import { Button, View, Text } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';
import { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';

interface Point {
  x: number;
  y: number;
}

interface Size {
  width: number;
  height: number;
}

interface FaceBounds {
  origin: Point;
  size: Size;
}

interface FaceLandmarks {
  bottomMouth: Point;
  leftCheek: Point;
  leftEar: Point;
  leftEye: Point;
  leftMouth: Point;
  noseBase: Point;
  rightCheek: Point;
  rightEar: Point;
  rightEye: Point;
  rightMouth: Point;
}

interface Face {
  bounds: FaceBounds;
  leftEyeOpenProbability?: number;
  rightEyeOpenProbability?: number;
  rollAngle?: number;
  smilingProbability?: number;
  yawAngle?: number;
  landmarks?: FaceLandmarks;
}

interface FaceDetectionResult {
  faces: Face[];
}

export const Face = () => {
  const [faceDetected, setFaceDetected] = useState<boolean | null>(null); // Inicialmente null para indicar que ainda não houve detecção
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);

  const faceValues = useSharedValue({
    width: 0,
    height: 0,
    x: 0,
    y: 0
  });

  function handleFacesDetected({ faces }: FaceDetectionResult) {
    const face = faces[0] as any;
    if (face) {
      const { size, origin } = face.bounds
      faceValues.value = {
        width: size.width,
        height: size.height,
        x: origin.x,
        y: origin.y
      }
      setFaceDetected(true);
    } else {
      setFaceDetected(false);
    }
  }

  const AnimatedStyle = useAnimatedStyle(() => ({
    position : 'absolute',
    zIndex: 1,
    width: faceValues.value.width,
    height: faceValues.value.height,
    transform: [
      {translateX: faceValues.value.x},
      {translateY: faceValues.value.y}
    ],
    borderColor: 'blue',
    borderWidth: 10
  }));

  useEffect(() => {
    requestPermission();
  }, []);

      const detectFaces = async () => {
        setFaceDetected(null);
        if (cameraRef.current) {
          try {
            const photo = await cameraRef.current.takePictureAsync({ skipProcessing: true });
            const result = await FaceDetector.detectFacesAsync(photo.uri, {
              mode: FaceDetector.FaceDetectorMode.accurate,
              detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
              runClassifications: FaceDetector.FaceDetectorClassifications.all,
            });
            console.log('Faces detectadas:', result.faces);
            handleFacesDetected(result);
          } catch (error) {
            console.error("Erro ao detectar faces:", error);
            setFaceDetected(false);
          }
        }
      };

  if (!permission?.granted) {
    return <Text>Solicitando permissão para câmera...</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <CameraView
        ref={cameraRef}
        style={{ flex: 1 }}
        facing='front'
      />
      <Button title="Detectar rosto" onPress={detectFaces} />
      {faceDetected === true && (
        <Text style={{ position: 'absolute', bottom: 20, left: 20, backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', padding: 10, borderRadius: 5 }}>
          Rosto Detectado!
        </Text>
      )}
      {faceDetected === false && (
        <Text style={{ position: 'absolute', bottom: 20, left: 20, backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', padding: 10, borderRadius: 5 }}>
          Nenhum Rosto Detectado
        </Text>
      )}
      {faceDetected === null && (
        <Text style={{ position: 'absolute', bottom: 20, left: 20, backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', padding: 10, borderRadius: 5 }}>
          Detectando...
        </Text>
      )}
    </View>
  );
};