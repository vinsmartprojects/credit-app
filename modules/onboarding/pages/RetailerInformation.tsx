import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextField } from 'react-native-ui-lib'

const RetailerInformation = () => {
  const [storeName, setstoreName] = useState("")
  return (
    <View style={styles.container}>
        <View>
      <Text>Welcome</Text>
      </View>
      <View>
      <Text>+1988842 55542</Text>
      </View>
         <View>
      <Text>Complete Your Retailer Registraion</Text>
      </View>
      <View>
      <Text>Store Name</Text>
      <TextField
        migrate
        label="Store Name"
        style={{ border: 1, }}
        placeholder={"Store Name"}
        floatingPlaceholder
        value={storeName}
        onChangeText={(_value: any) => setstoreName(_value)}
        enableErrors
        validate={['required', 'number', (value: any) => value.length < 10]}
        validationMessage={['Field is required', 'Mobile No is invalid']}
        
        maxLength={10}
        height={40}

        backgroundColor="#ddd"
      /></View>
      <View>
      <Text>Owner Name</Text>
      <TextField
        migrate
        label="Store Name"
        style={{ border: 1, }}
        placeholder={"Store Name"}
        floatingPlaceholder
        value={storeName}
        onChangeText={(_value: any) => setstoreName(_value)}
 
        validate={['required', 'number', (value: any) => value.length < 10]}
        validationMessage={['Field is required', 'Mobile No is invalid']}
   
        maxLength={10}
        height={40}

        backgroundColor="#ddd"
      /></View>
<View>
      <Text>Area Pinocde</Text>
      <TextField
        migrate
        label="Store Name"
        style={{ border: 1, }}
        placeholder={"Store Name"}
        floatingPlaceholder
        floatOnFocus
        value={storeName}
        onChangeText={(_value: any) => setstoreName(_value)}
        enableErrors
        validate={['required', 'number', (value: any) => value.length < 10]}
        validationMessage={['Field is required', 'Mobile No is invalid']}

        maxLength={10}
        height={40}

        backgroundColor="#ddd"
      /></View>


    </View>
  )
}

export default RetailerInformation

const styles = StyleSheet.create({

  container: {
    justifyContent: 'center',
    paddingHorizontal: 30,
    flex: 1
  },
})