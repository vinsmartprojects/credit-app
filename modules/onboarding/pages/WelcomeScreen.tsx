import { StyleSheet, Text, View,  Image } from 'react-native'
import React from 'react'
const onboardWelcome = require('../../../assets/images/onboardWelcome.png');
const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{}}>
        <Image style={styles.welcomeLogo} source={onboardWelcome} />
      </View>
      <View style={{}}>
        <Text> Start Registering Your Retail Business!</Text>
      </View>
      <View style={{paddingVertical:15}}>
        <Text>Goto Dashboard</Text>
      </View>
    </View>
  )
}

export default WelcomeScreen

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