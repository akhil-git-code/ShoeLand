import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';

interface CustomInputProps {
  value: string;
  setValue: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  maxLength?: number;
  keyboardType?: TextInputProps['keyboardType'];
  disabled?: boolean;
  onPress?: () => void;
  editable?: boolean;
  style?: object;
}

const CustomInput: React.FC<CustomInputProps> = ({
  value,
  setValue,
  placeholder,
  secureTextEntry = false,
  maxLength,
  keyboardType = 'default',
  disabled = false,
  onPress,
  editable = true,
  style,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={onPress ? 0.7 : 1}
      style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        maxLength={maxLength}
        keyboardType={keyboardType}
        placeholderTextColor="#969696"
        editable={!disabled && editable}
        style={[styles.input, style]}
        pointerEvents={onPress ? 'none' : 'auto'}
      />
    </TouchableOpacity>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F7',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#F7F7F7',
    paddingHorizontal: 10,
    paddingVertical: 5,
    elevation: 5,
    height: 52,
    justifyContent: 'center',
  },
  input: {
    color: '#000',
  },
});
