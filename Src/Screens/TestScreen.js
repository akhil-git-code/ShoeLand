// import {Image, StyleSheet, Text, View} from 'react-native';
// import React from 'react';

// const HomePage = () => {
//   return (
//     <View style={styles.mainHead}>
//       <View style={styles.Header}>
//         <View style={styles.HeaderSection}>
//           <View style={styles.MyProfileandText}>
//             <Image
//               style={styles.myprofileicon}
//               source={require('../Assets/myprofileicon.png')}
//             />
//             {/* <Text style={styles.HomePageText}>Akhil React</Text> */}
//           </View>

//         </View>
//         <View style={styles.HeaderSection}>
//             <Image
//               style={styles.myprofileicon}
//               source={require('../Assets/myprofileicon.png')}
//             />
//             </View>
//         {/* <View style={styles.NotificationArea}>
//         <Image
//           style={styles.notificationIcon}
//           source={require('../Assets/notificationicon.png')}
//         />
//       </View> */}
//       </View>
//     </View>
//   );
// };

// export default HomePage;

// const styles = StyleSheet.create({
//   mainHead: {
//     flex: 1,
//     margin: 10,
//   },
//   Header: {
//     flexDirection: 'row',
//   },
//   HeaderSection: {
//     backgroundColor: '#d7d9db',
//     borderRadius: 25,
//     padding: 5,
//   },
//   MyProfileandText: {
//     flexDirection: 'row',
//   },
//   myprofileicon: {
//     height: 45,
//     width: 45,
//     borderRadius: 30,
//   },
//   HomePageText: {
//     //   // justifyContent:"center",
//     textAlignVertical: 'center',
//     padding: 5,
//   },
//   NotificationArea: {
//     // backgroundColor: '#d7d9db',
//     borderRadius: 25,
//     flexDirection: 'row',
//     // alignItems: 'center',
//     // padding: 5,
//   },
//   notificationIcon: {
//     height: 45,
//     width: 45,
//     left: 190,
//     backgroundColor: '#d7d9db',
//     borderRadius: 30,
//     // justifyContent:"flex-end"
//   },
// });

// import {Alert, Button, View} from 'react-native';
// import React from 'react';

// const App = () => {
//    const showAlert = () => {
//   //   Alert.alert('Hello!', 'This is a simple alert box.',[
//   //     {
//   //       text:'cancel',
//   //     //   onPress: () => console.log('Cancel Pressed'),
//   //     //  style: 'cancel',
//   //     },
//   //     {
//   //       text:'Ok',
//   //     }
//   //   ]);
//   // };
//   //const confirmAction = () => {
//     Alert.alert(
//       "Confirm Action",
//       "Do you agree to proceed?",
//       [
//         { text: "No", onPress: () => console.log("User declined.") },
//         { text: "Yes", onPress: () => console.log("User agreed.") }
//       ]
//     );
//   };

//   return (
//     <View>
//       <Button title="Show Alert" onPress={showAlert} />
//     </View>
//   );
// };

// export default App;

// // const showAlertWithButtons = () => {
// //   Alert.alert('Delete Item', 'Are you sure you want to delete this item?', [
// //     {
// //       text: 'Cancel',
// //       onPress: () => console.log('Cancel Pressed'),
// //       style: 'cancel',
// //     },
// //     {
// //       text: 'Delete',
// //       onPress: () => console.log('Delete Pressed'),
// //       style: 'destructive', // For iOS, marks it as a destructive action
// //     },
// //   ]);
// // };

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleRegistration = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!userName || !userEmail || !userPassword) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    if (!emailRegex.test(userEmail)) {
      Alert.alert('Error', 'Invalid email format.');
      return;
    }

    if (userPassword.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters.');
      return;
    }

    try {
      Alert.alert(
        'Success',
        'You have registered successfully!',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Login'),
          },
        ],
      );
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={userName}
        onChangeText={setUserName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={userEmail}
        onChangeText={setUserEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={userPassword}
        onChangeText={setUserPassword}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegistration} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    borderColor: '#ccc',
  },
});

export default RegisterScreen;
