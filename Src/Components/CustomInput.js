import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default Custominput = ({ value, setValue, placeholder, secureTextEntry, maxLength,keyboardType, disabled}) => {
    
  
  return (
    <View style={styles.container} >
      <TextInput 
        value={value}
        maxLength={maxLength}
        onChangeText={setValue}
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholderTextColor={'#969696'}
       disabled={disabled}
      />
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F7F7F7',
        borderWidth:1,
        borderRadius:8,
        borderColor:'#F7F7F7',
        paddingHorizontal: 10,
        paddingVertical: 5,
        elevation:5,
        height:52,
        justifyContent:'center'
    },
    input:{
      color:'#000'
    }
})




{/* <Custominput placeholder={'Email-Id'} value={firstname} setValue={(text) => setFname(text)} /> */}