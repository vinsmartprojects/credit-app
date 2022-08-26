import { StyleSheet, Text, View,TextInput  } from 'react-native'
import React from 'react'
import { TextField } from 'react-native-ui-lib'

const MobileNoInput = ({placeholder,value,onValueChange}:any) => {
  return (
 
      <TextField
      migrate
      
      style={{border:1,}}
  placeholder={placeholder}
  floatingPlaceholder
  value={value}
  onChangeText={(_value:any) => onValueChange(_value)}
  enableErrors
  validate={['required', 'number', (value:any) => value.length <10]}
  validationMessage={['Field is required', 'Mobile No is invalid']}
  showCharCounter
  maxLength={10}
  height={40}
  width={250}
  backgroundColor="#ddd"
/>
    
  )
}

export default MobileNoInput

const styles = StyleSheet.create({})