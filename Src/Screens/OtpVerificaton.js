import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import Button from '../Components/Button';

const OtpVerificaton = () => {
    const [otp, onChangeOTP] = useState("");
  return (
    <View style={styles.mainHead}>
      <Text style={styles.OtpText}>OTP Verfication</Text>
      <Text style={styles.ResetText}>
        Please check your email abcxyz123@gmail.com{'\n'} to see the verfication
        code
      </Text>
      <Text style={styles.OtpCodeText}>OTP Code</Text>
      <View style={styles.OtpCheckBoxes}>
        <TextInput
          style={styles.OtpBox}
          onChangeText={onChangeOTP}
          value={otp}
          placeholder="0"
        />
        <TextInput
          style={styles.OtpBox}
          onChangeText={onChangeOTP}
          value={otp}
          placeholder="0"
        />
        <TextInput
          style={styles.OtpBox}
          onChangeText={onChangeOTP}
          value={otp}
          placeholder="0"
        />
        <TextInput
          style={styles.OtpBox}
          onChangeText={onChangeOTP}
          value={otp}
          placeholder="0"
        />
      </View>
      <Button 
  title="Verfiy "
//   onPress={() => alert('Button Pressed!')}
  //backgroundColor="green"
//   textColor="red"
 //  disabled={false}
/>
    </View>
  );
};

export default OtpVerificaton;

const styles = StyleSheet.create({
  mainHead: {
    flex: 1,
    marginVertical: 150,
    // backgroundColor: "lightblue",
  },
  OtpText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
  ResetText: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 15,
  },
  OtpCodeText:{
    fontWeight: 'bold',
    fontSize:20,
    marginVertical: 35,
    marginBottom:20,
     marginHorizontal:20,
    // justifyContent: 'center',
    // textAlign:"left",
  },
  OtpCheckBoxes:{
    justifyContent: "center",
    flexDirection: "row",
    gap:20
  },
  OtpBox: {
    textAlign: "center",
    fontSize: 20,
     backgroundColor: "lightgrey",
    // borderWidth: 2,
    height: 60,
    width: 72,
    marginBottom: 40, // this margin is use create space before button..
    borderRadius: 15,
    // paddingLeft: 40,
  },

});
