import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const KeyboardAvoidingComponent = () => {
   const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [savedEmail, setSavedEmail] = useState('');
    const [savedPassword, setSavedPassword] = useState('');

    // Save data from User in AsyncStorage
  const setData = async () => {
    try {
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('password', password);
      alert('Data Saved Sucessfully');
      setEmail('');
      setPassword('');
    } catch (error) {
      alert('Error saving data');
    }
  };

  // Get data from User in AsyncStorage
  const getData = async () => {
    try {
      const storedEmail = await AsyncStorage.getItem('email');
      const storedPassword = await AsyncStorage.getItem('password');
      setSavedEmail(storedEmail);
      setSavedPassword(storedPassword);
    } catch (error) {
      alert('Error Loading data');
    }
  };

  // Remove User Data from AsyncStorage
  const removeData = async () => {
    await AsyncStorage.removeItem('email');
    await AsyncStorage.removeItem('password');
    setSavedEmail('');
    setSavedPassword('');
    alert('Data removed');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.inner}>
          <Text style={styles.header}>Header</Text>
          <TextInput
                  style={styles.input}
                  placeholder="Enter your name"
                  value={email}
                  onChangeText={setEmail}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Enter password"
                  value={password}
                  secureTextEntry
                  onChangeText={setPassword}
                />
          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={() => alert('Pressed')} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});

export default KeyboardAvoidingComponent;
