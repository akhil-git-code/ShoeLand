import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({
  title,
  onPress,
  color = 'green', // Default button color
  textColor = 'white', // Default text color
  backgroundColor = 'blue', // Default background color
  style,
  disabled = false, // Default disabled state
}) => {
  return (
    <View style={styles.mainView}>
      <TouchableOpacity onPress={onPress}
      disabled={disabled}>
        <View style={[styles.button, { backgroundColor}]}>
          <Text style={[styles.buttonText, {color: textColor}]}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  mainView: {
    // padding: 10,
    alignSelf: 'center',
  },
  button: {
    width: 350,
    height: 50,

    // backgroundColor: 'blue',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems:"center",
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: "bold",
  },
});
