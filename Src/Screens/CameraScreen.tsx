import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Pressable,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Camera, CameraType} from 'react-native-camera-kit';

const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window');
const pendingHeight = (deviceHeight - deviceWidth) / 2;
console.log('pendingHeight', pendingHeight);
console.log('width', deviceHeight);
const CameraScreen = () => {
  const cameraRef = useRef(null);
  const [mode, setMode] = useState('camera');
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android') {
        await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
      }
    })();
  }, []);
  806.1818181818181;

  const takePicture = async () => {
    try {
      if (cameraRef.current) {
        // safety check to avoid null errors
        const data = await cameraRef.current.capture();
        setPhoto(data.uri);
      }
    } catch (error) {
      console.error('Error capturing photo:', error);
    }
  };

  const cancelCamera = () => {
    console.log('✅ Cancel Camera:', photo);
    // 👉 here you can navigate or upload photo
  };

  const retakePhoto = () => {
    setPhoto(null);
  };

  const usePhoto = () => {
    console.log('✅ Using photo:', photo);
    // 👉 here you can navigate or upload photo
  };

  return (
    <View style={styles.container}>
      <View style={styles.crossAndBackBtn}>
        {!photo ? (
          <Pressable style={styles.crossBtnWrapper} onPress={cancelCamera}>
            <Image
              source={require('../Assets/delete.png')}
              style={styles.crossBtn}
            />
          </Pressable>
        ) : (
          <Pressable style={styles.backOnCaemra} onPress={retakePhoto}>
            <Image
              source={require('../Assets/arrow.png')}
              style={styles.arrowBtn}
            />
          </Pressable>
        )}
      </View>

      {!photo ? (
        <View style={[styles.cameraContainer]}>
          <Camera
            ref={cameraRef}
            style={styles.camera}
            cameraType={CameraType.Back}
            flashMode="auto"
          />
          <View
            style={[
              styles.upperOverlay,
              {width: deviceWidth, height: pendingHeight},
            ]}
          />
          <View
            style={[
              styles.bottomOverlay,
              {width: deviceWidth, height: pendingHeight},
            ]}
          />
        </View>
      ) : (
        <Image
          source={{uri: photo}}
          style={{width: deviceWidth, height: deviceWidth}}
          resizeMode="cover"
        />
      )}
      {!photo ? (
        <View style={styles.imagePickAndCaputreBtn}>
          <Pressable style={styles.selectFromGallery}>
            <Image
              source={require('../Assets/gallery.png')}
              style={styles.pickGallery}
            />
          </Pressable>

          <Pressable style={styles.captureButton} onPress={takePicture}>
            <View style={styles.clickBtn} />

            {/* <Text style={styles.captureButtonText}>Capture</Text> */}
          </Pressable>
          <View style={styles.rightSpace} />
        </View>
      ) : (
        <View style={styles.retakePhotoAndUsePhotoBtn}>
          <Pressable style={styles.reTakePhotoBtn} onPress={retakePhoto}>
            <Image
              source={require('../Assets/bin.png')}
              style={styles.retakeImag}
            />
            <Text style={styles.retakeText}>Retake Photo</Text>
          </Pressable>

          <Pressable style={styles.usePhotoBtn} onPress={usePhoto}>
            <Image
              source={require('../Assets/check.png')}
              style={styles.retakeImag}
            />
            <Text style={styles.usePhotoText}>Use Photo</Text>
          </Pressable>
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
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  crossAndBackBtn: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
  },
  crossBtnWrapper: {
    padding: 10,
  },

  crossBtn: {
    width: 20,
    height: 20,
  },
  backOnCaemra: {},
  arrowBtn: {
    width: 35,
    height: 35,
  },
  cameraContainer: {
    position: 'relative',
    flex: 1,
    width: '100%',
    height: '100%',
  },
  camera: {
    flex: 1,
  },
  upperOverlay: {
    position: 'absolute',
    // top: '50%',

    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderColor: '#fff',
  },
  bottomOverlay: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',

    backgroundColor: 'rgba(0,0,0,0.6)',
    borderColor: '#fff',
  },
  imagePickAndCaputreBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    alignSelf: 'flex-start',
    position: 'absolute',
    bottom: 70,
  },
  pickGallery: {
    height: 35,
    width: 35,
  },
  selectFromGallery: {
    flex: 1,
    height: 50,
    width: 50,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  captureButton: {
    flex: 2,
    borderRadius: 50,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clickBtn: {
    height: 80,
    width: 80,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
  },
  rightSpace: {
    flex: 1,
  },
  retakePhotoAndUsePhotoBtn: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 60,
    gap: 10,
  },
  reTakePhotoBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#292727',
  },

  retakeImag: {
    height: 20,
    width: 20,
  },
  retakeText: {
    fontSize: 15,
    fontWeight: 'medium',
    color: '#FFFFFF',
  },
  usePhotoBtn: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    borderRadius: 20,
    padding: 10,
  },
  usePhotoText: {
    fontSize: 15,
    fontWeight: 'medium',
    color: '#252525',
  },
});
