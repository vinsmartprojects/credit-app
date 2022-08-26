import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MobileNoInput from '../components/MobileNoInput'

const RetailerMobileReg = () => {

  const [mobile, setmobile] = useState("")
  function onValueChange(data:any){
    setmobile(data)
   }
  return (
    <View style={styles.container}>
       <View style={styles.content}>
      <Text>Welcome !!</Text>
      </View>
      <View style={styles.content}>
      <Text>Please Register your Mobile No</Text>
      </View>
      <View style={styles.content}>
      
      <MobileNoInput  value={mobile} onValueChange={onValueChange}/>
      </View>
    </View>
  )
}

export default RetailerMobileReg

const styles = StyleSheet.create({
  container:{
           justifyContent: 'center',
           alignItems: 'center',
           flex: 1 
  },
  content:{
      
      
  }
})