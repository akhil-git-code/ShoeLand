import {
  StyleSheet,
  Text,
  View,
  Modal,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../Components/CustomInput';
import Button from '../Components/Button';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleResetPassword = () => {
    // Validate email input
    if (!email) { 
      setEmailError('Email is required');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex to validate email
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setEmailError(''); // Clear error if validation passes
    setModalVisible(true); // Show the modal
  };

  return (
    <View style={styles.mainHead}>
      <Text style={styles.ForgotText}>Forgot Password</Text>
      <Text style={styles.ResetText}>
        Enter your email account to reset your password
      </Text>
      <View style={styles.inputFields}>
        <View style={styles.emailInput}>
          <CustomInput
            placeholder={'Email-Id'}
            value={email}
            setValue={setEmail}
          />
          {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
        </View>
      </View>
      <Button
        title="Reset Password"
        onPress={handleResetPassword} // Call the validation function on button press
        disabled={false}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <AntDesign name="mail" size={40} color="#900" />
            <Text style={styles.modalText}>Check your email</Text>
            <Text style={styles.modalText2}>
              We have sent password recovery {'\n'}instructions to your email.
            </Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.textStyle}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  mainHead: {
    flex: 1,
    marginVertical: 150,
  },
  ForgotText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
  ResetText: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 15,
  },
  inputFields: {
    marginVertical: 30,
  },
  emailInput: {
    width: 350,
    alignSelf: 'center',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
    fontSize: 12,
    textAlign: 'left',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 20,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  centeredView: {
    justifyContent: 'center',
    flex: 1,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalText2: {
    textAlign: 'center',
  },
});
