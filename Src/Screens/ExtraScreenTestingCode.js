// import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
// import React, {useState} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const ExtraScreenTestingCode = () => {
//   const [user, setUser] = useState('');
//   const setData = async () => {
//     await AsyncStorage.setItem('name', 'Akhil Kumar');
//   };
//   const getData = async () => {
//     const name = await AsyncStorage.getItem('name');
//     setUser(name);
//   };
//   const removeData = async () => {
//     const name = await AsyncStorage.removeItem('name');
//     setUser('');
//   };

//   return (
//     <View>
//       <View style={{marginTop: 100, marginLeft: 30}}>
//         <Text style={{fontSize: 40}}>
//           AsyncStorage with React Native | {user}
//         </Text>
//       </View>

//       <TouchableOpacity style={styles.firstButtonWrapper}>
//         <Text style={{fontSize: 18, textAlign: 'center'}} onPress={setData}>
//           Set Data
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.secondButtonWrapper}>
//         <Text style={{fontSize: 18, textAlign: 'center'}} onPress={getData}>
//           Get Data
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.thirdButtonWrapper}>
//         <Text style={{fontSize: 18, textAlign: 'center'}} onPress={removeData}>
//           Remove Data
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default ExtraScreenTestingCode;

// const styles = StyleSheet.create({
//   firstButtonWrapper: {
//     width: 300,
//     backgroundColor: '#67e3f9',
//     paddingVertical: 12,

//     marginTop: 20,
//     borderRadius: 10,
//     alignSelf: 'center',
//   },
//   secondButtonWrapper: {
//     width: 300,
//     backgroundColor: '#59fa77',
//     paddingVertical: 12,

//     marginTop: 20,
//     borderRadius: 10,
//     alignSelf: 'center',
//   },
//   thirdButtonWrapper:{
//     width: 300,
//     backgroundColor: '#fc6f5b',
//     paddingVertical: 12,

//     marginTop: 20,
//     borderRadius: 10,
//     alignSelf: 'center',
//   }
// });

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
import AsyncStorage from '@react-native-async-storage/async-storage';

const ExtraScreenTestingCode = () => {
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
        <View style={{marginTop: 100, alignItems: 'center'}}>
          <Text style={{fontSize: 40}}>AsyncStorage with React Native</Text>
          {/* Show saved email */}
          {savedEmail ? (
            <Text style={{fontSize: 18, marginVertical: 10}}>
              Saved Email: {savedEmail}
            </Text>
          ) : null}
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
          <TouchableOpacity style={styles.firstButtonWrapper}>
            <Text style={{fontSize: 18, textAlign: 'center'}} onPress={setData}>
              Set Data
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondButtonWrapper}>
            <Text style={{fontSize: 18, textAlign: 'center'}} onPress={getData}>
              Get Data
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.thirdButtonWrapper}>
            <Text
              style={{fontSize: 18, textAlign: 'center'}}
              onPress={removeData}>
              Remove Data
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ExtraScreenTestingCode;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%',
    alignSelf: 'center',
    marginVertical: 100,
  },
  firstButtonWrapper: {
    width: 300,
    backgroundColor: '#67e3f9',
    paddingVertical: 12,
    marginTop: 20,
    borderRadius: 10,
    alignSelf: 'center',
  },
  secondButtonWrapper: {
    width: 300,
    backgroundColor: '#59fa77',
    paddingVertical: 12,
    marginTop: 20,
    borderRadius: 10,
    alignSelf: 'center',
  },
  thirdButtonWrapper: {
    width: 300,
    backgroundColor: '#fc6f5b',
    paddingVertical: 12,
    marginTop: 20,
    borderRadius: 10,
    alignSelf: 'center',
  },
});
