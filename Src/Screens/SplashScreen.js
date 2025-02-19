import React, { useEffect } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';


const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate loading or setup process
    const timer = setTimeout(() => {
      navigation.navigate('OnBordingScreens'); // Navigate to Home screen after 3 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Shoe Land</Text>
      <ActivityIndicator size="large" color="grey" />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
