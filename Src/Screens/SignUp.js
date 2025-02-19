// import {StyleSheet, Text, View, Image} from 'react-native';
// import React, {useState} from 'react';
// import CustomInput from '../Components/CustomInput';
// import Button from '../Components/Button';
// import { TouchableOpacity } from 'react-native-gesture-handler';

// const SignUp = ({navigation}) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmpassword, setConfirmPassword] = useState('');
//   return (
//     <View style={styles.mainHead}>
//       <Text style={styles.SignUpText}>Sign up now</Text>
//       <Text style={styles.SigninText2}>Please sign in to continue our app</Text>
//       <View style={styles.inputFields}>
//         <View style={styles.emailInput}x>
//           <CustomInput placeholder={'Email-Id'} value={email} setValue={(setEmail)}
//           maxLength={20}/>
//         </View>
//         <View style={styles.passwordInput}>
//           <CustomInput placeholder={'Password'} value={password} setValue={(setPassword)}
//           secureTextEntry={true}/>
//         </View>
//         <View style={styles.passwordInput}>
//           <CustomInput placeholder={'Password'} value={confirmpassword} setValue={(setConfirmPassword)}
//           secureTextEntry={true}/>
//           <Text style={styles.passwordText}>Password must be 8 Characters</Text>
//         </View>
//       </View>
//       <Button
//   title="Sign Up"
// //   onPress={() => alert('Button Pressed!')}
//   //backgroundColor="green"
// //   textColor="red"
//  //  disabled={false}
// />
//       <View style={styles.footerText}>
//       <Text style={styles.dontAccount}>Already have an Account </Text>
//       <TouchableOpacity
//       onPress={() => navigation.navigate('SignIn')}>
//         <Text style={styles.signUpText}>Sign In</Text>
//         </TouchableOpacity>
//         </View>
//       <Text style={styles.connectText}>Or connnect</Text>
//       <View style={styles.SocialIcon}>
//         <Image style={styles.FacebookIcon}source={require("../Assets/facebookicon.png")}/>
//         <Image style={styles.FacebookIcon}source={require("../Assets/instagramicon.png")}/>
//         <Image style={styles.FacebookIcon}source={require("../Assets/twitter.png")}/>
//       </View>
//     </View>
//   );
// };

// export default SignUp;

// const styles = StyleSheet.create({
//   mainHead: {
//     flex: 1,
//     marginVertical:150,
//     // backgroundColor: "lightblue",
//   },
//   SignUpText: {
//     textAlign: 'center',
//     fontWeight: 'bold',
//     fontSize: 25,
//     color:"black"
//   },
//   SigninText2: {
//     textAlign: 'center',
//     marginVertical: 10,
//     fontSize: 15,
//   },
//   inputFields: {
//     marginVertical: 30,
//     gap: 30,
//   },
//   emailInput: {
//     width: 350,
//     alignSelf: 'center',
//   },
//   passwordInput: {
//     width: 350,
//     alignSelf: 'center',
//   },
//   passwordText: {
//     // fontSize:15,
//     marginVertical: 15,
//   },
//   SignInButton:{
//     width:370,
//     alignSelf:"center",
//   },
//   footerText:{
//     flexDirection:'row',
//     alignSelf: "center",
//     marginTop:40
//   },
//   dontAccount:{
//     fontSize: 15
//   },
//   signUpText:{
//     fontWeight:'bold',
//     color:'#2381e4',
//     fontSize: 15
//   },
//   connectText:{
//     textAlign:"center",
//     marginVertical:20,
//     fontSize: 15
//   },
//   SocialIcon:{
//     flexDirection:"row",
//     alignSelf:"center",
//     marginVertical:10,
//     gap:20
//   },
//   FacebookIcon:{
//     height:40,
//     width:40,
//     borderRadius:20,
//   }
// });

import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../Components/CustomInput';
import Button from '../Components/Button';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Validation function
  const handleSignUp = () => {
    if (!email) {
      Alert.alert('Error', 'Email is required.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }

    if (!password) {
      Alert.alert('Error', 'Password is required.');
      return;
    }
    if (password.length < 8) {
      Alert.alert('Error', 'Password must be at least 8 characters.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    Alert.alert('Success', 'Account created successfully!');
    navigation.navigate('SignIn'); // Navigate to SignIn screen
  };

  return (
    <View style={styles.mainHead}>
      <Text style={styles.SignUpText}>Sign up now</Text>
      <Text style={styles.SigninText2}>Please sign in to continue our app</Text>
      <View style={styles.inputFields}>
        <View style={styles.emailInput}>
          <CustomInput
            placeholder={'Email-Id'}
            value={email}
            setValue={setEmail}
            maxLength={50}
          />
        </View>
        <View style={styles.passwordInput}>
          <CustomInput
            placeholder={'Password'}
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.passwordInput}>
          <CustomInput
            placeholder={'Confirm Password'}
            value={confirmPassword}
            setValue={setConfirmPassword}
            secureTextEntry={true}
          />
          <Text style={styles.passwordText}>
            Password must be at least 8 characters.
          </Text>
        </View>
      </View>
      <Button
        title="Sign Up"
        onPress={handleSignUp} // Trigger validation on press
      />
      <View style={styles.footerText}>
        <Text style={styles.dontAccount}>Already have an Account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.signUpText}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.connectText}>Or connect</Text>
      <View style={styles.SocialIcon}>
        <Image
          style={styles.FacebookIcon}
          source={require('../Assets/facebookicon.png')}
        />
        <Image
          style={styles.FacebookIcon}
          source={require('../Assets/instagramicon.png')}
        />
        <Image
          style={styles.FacebookIcon}
          source={require('../Assets/twitter.png')}
        />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  mainHead: {
    flex: 1,
    marginVertical: 150,
  },
  SignUpText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
  SigninText2: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 15,
  },
  inputFields: {
    marginVertical: 30,
    gap: 30,
  },
  emailInput: {
    width: 350,
    alignSelf: 'center',
  },
  passwordInput: {
    width: 350,
    alignSelf: 'center',
  },
  passwordText: {
    marginVertical: 15,
  },
  SignInButton: {
    width: 370,
    alignSelf: 'center',
  },
  footerText: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 40,
  },
  dontAccount: {
    fontSize: 15,
  },
  signUpText: {
    fontWeight: 'bold',
    color: '#2381e4',
    fontSize: 15,
  },
  connectText: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 15,
  },
  SocialIcon: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 10,
    gap: 20,
  },
  FacebookIcon: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});
