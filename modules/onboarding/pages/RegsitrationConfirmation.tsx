import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
const onBoardSuccessRegistration = require("../../../assets/images/successRegistration.png");
const RegsitrationConfirmation = () => {
  return (
    <View style={styles.container}>
      <View style={{}}>
        <Image style={styles.welcomeLogo} source={onBoardSuccessRegistration} />
      </View>
      <View style={{}}>
        <Text>OnBoarding Successfull!!</Text>
      </View>
      <View style={{paddingVertical:15}}>
        <Text>Goto Dashboard</Text>
      </View>
    </View>
  );
};

export default RegsitrationConfirmation;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  welcomeLogo: {
    alignself: "center",
    width: 250,
    height: 250,
  },
});
