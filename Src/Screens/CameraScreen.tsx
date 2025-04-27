import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useRef, useState} from 'react';
import {Camera, CameraType} from 'react-native-camera-kit';

const CameraScreen = () => {
  const cameraRef = useRef(null);
  const [photo, setPhoto] = useState(null);

  const takePicture = async () => {
    try {
      const data = await cameraRef.current.capture();
      setPhoto(data.uri); // Store captured image URI
    } catch (error) {
      console.error('Error capturing photo:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <Camera
          ref={cameraRef}
          style={styles.camera}
          cameraType={CameraType.Back}
          flashMode="auto"
        />
      </View>

      <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
        <Text style={styles.captureButtonText}>Capture</Text>
      </TouchableOpacity>

      {photo && (
        <View style={styles.photoContainer}>
          <Text style={styles.photoText}>Captured Image:</Text>
          <Image source={{uri: photo}} style={styles.photo} />
        </View>
      )}
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraContainer: {
    width: 550,
    padding: '20%',
    height: 480,
  },
  camera: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    borderRadius: 10, // Optional: Rounded edges for the camera view
  },
  captureButton: {
    position: 'absolute',
    bottom: 50,
    left: '50%',
    transform: [{translateX: -50}],
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 50,
    padding: 20,
    alignItems: 'center',
  },
  captureButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  photoContainer: {
    position: 'absolute',
    bottom: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 8,
  },
  photoText: {
    color: 'white',
    fontSize: 14,
    marginBottom: 5,
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
});
