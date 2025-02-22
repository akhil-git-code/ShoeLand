import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'react-native-image-picker';
import Button from '../Components/Button';
import CustomInput from '../Components/CustomInput';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyProfile = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState(
    require('../Assets/myprofileicon.png'),
  );
  const [isEditable, setIsEditable] = useState(false); // Initially set to false (non-editable)

  // Function that handle profile image update
  const handleEditImage = () => {
    ImagePicker.launchImageLibrary(
      {mediaType: 'photo', quality: 0.8},
      response => {
        if (response.assets && response.assets.length > 0) {
          setProfileImage({uri: response.assets[0].uri});
        }
      },
    );
  };

  // Function for save profile changes
  const handleSave = () => {
    if (!email.includes('@') || !email.includes('.')) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }
    if (password.length < 6|| !password.includes()) {
      Alert.alert(
        'Weak Password',
        'Password must be at least 6 characters long.',
      );
      return;
    }
    Alert.alert('Profile Updated', `Name: ${name}\nEmail: ${email}`);
  };

  // Function to toggle edit mode (make inputs editable)
  const handleEditPress = () => {
    setIsEditable(true); // Enable editing when edit icon is clicked
  };

//  // Signout functionality
//   const handleSignOut = async () => {
//     try {
//       // Clear stored user session
//       await AsyncStorage.removeItem('userToken');
      
//       // Redirect to login screen
//       navigation.replace('SignIn');
//     } catch (error) {
//       Alert.alert('Sign Out Error', 'Failed to sign out. Please try again.');
//     }
//   };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity  onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={38} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity onPress={handleEditPress}>
          <Icon name="create-outline" size={38} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Profile Image */}
      <View style={styles.profileContainer}>
        <Image source={profileImage} style={styles.profileImage} />
        <TouchableOpacity
          style={styles.editIconContainer}
          onPress={handleEditImage}>
          <Icon name="camera-outline" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.profileName}>{name}</Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
        <Text style={styles.label}>Full Name</Text>
        <CustomInput
          placeholder="Enter Name"
          value={name}
          setValue={setName}
          disabled={!isEditable} // If isEditable is false, input will be disabled
        />

        <Text style={styles.label}>Email Address</Text>
        <CustomInput
          placeholder="Enter Email"
          // keyboardType="email-address"
          value={email}
          setValue={setEmail}
          disabled={!isEditable} // If isEditable is false, input will be disabled
        />

        <Text style={styles.label}>Password</Text>
        <CustomInput
          placeholder="Enter Password"
          secureTextEntry
          value={password}
          setValue={setPassword}
          disabled={!isEditable} // If isEditable is false, input will be disabled
        />
      </View>

      <Button
        title={isEditable ? 'Save Changes' : 'Sign Up'}
        onPress={handleSave} // Trigger validation on press
      />

      {/* Sign Out Button */}
      <TouchableOpacity onPress={handleSignOut} style={styles.signOutButton}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color:"black",
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 32,
    position: 'relative',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  editIconContainer: {
    position: 'absolute',
    top: 100,
    backgroundColor: '#007bff',
    borderRadius: 20,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 30,
  },
  profileName: {
    marginTop: 15,
    fontSize: 25,
    fontWeight: '600',
  },
  form: {
    width: '100%',
    marginBottom: 40,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 10,
    color: '#333',
    marginVertical: 15,
  },
  signOutButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  signOutText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default MyProfile;
