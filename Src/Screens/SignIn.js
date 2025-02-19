import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../Components/CustomInput';
import Button from '../Components/Button';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Validation function
  const handleSignIn = () => {
    if (!email) {
      Alert.alert('Error', 'Email is required.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }

    // Password validation
    if (password.length < 6) {
      Alert.alert('Weak Password', 'Password must be at least 6 characters long.');
      return;
    }
    if (!/[a-zA-Z]/.test(password)) {
      Alert.alert('Weak Password', 'Password must include at least one letter.');
      return;
    }
    if (!/\d/.test(password)) {
      Alert.alert('Weak Password', 'Password must include at least one number.');
      return;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      Alert.alert('Weak Password', 'Password must include at least one special character.');
      return;
    }

    // If all validations pass
    Alert.alert('Success', 'Sign-in successful!');
    navigation.navigate('MainApp'); // Navigate to HomePage on successful validation
  };

  return (
    <View style={styles.mainHead}>
      <Text style={styles.SigninText}>Sign in now</Text>
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
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Button title="Sign In" onPress={handleSignIn} />
      <View style={styles.footerText}>
        <Text style={styles.dontAccount}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.connectText}>Or connect</Text>
      <View style={styles.SocialIcon}>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.facebook.com')}>
          <Image
            style={styles.allSocialIcon}
            source={require('../Assets/facebookicon.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.instagram.com')}>
          <Image
            style={styles.allSocialIcon}
            source={require('../Assets/instagramicon.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.twitter.com')}>
          <Image
            style={styles.allSocialIcon}
            source={require('../Assets/twitter.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  mainHead: {
    flex: 1,
    marginVertical: 150,
  },
  SigninText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
  SigninText2: {
    textAlign: 'center',
    fontSize: 15,
  },
  inputFields: {
    margin: 40,
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
  forgotText: {
    color: '#2381e4',
    fontWeight: '500',
    textAlign: 'right',
    marginVertical: 15,
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
    marginVertical: 90,
    gap: 20,
  },
  allSocialIcon: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});
