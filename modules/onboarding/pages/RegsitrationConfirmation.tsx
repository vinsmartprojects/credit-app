import { StyleSheet, Text, View,  Image } from 'react-native'
import React from 'react'
const onboardWelcome = require('../../../assets/images/onboardWelcome.png');
const RegsitrationConfirmation = () => {
  return (
    <View style={styles.container}>
        <Image
            style={styles.welcomeLogo}
            source={onboardWelcome}
        />
    </View>
  )
}

export default RegsitrationConfirmation

const styles = StyleSheet.create({
    container:{
             justifyContent: 'center',
             alignItems: 'center',
             flex: 1 
    },
    welcomeLogo:{
        alignself:'center',
        width: 250,
        height: 250,
    }
})