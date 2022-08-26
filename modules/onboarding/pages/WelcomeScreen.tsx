import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
const onboardWelcome = require("../../../assets/images/onboardWelcome.png");
const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{}}>
        <Text style={{ fontSize: 20, paddingVertical: 15 }}>
          Start Onboarding
        </Text>
        <Text style={{ fontSize: 30 }}>Your Retail Business.</Text>
      </View>
      <View style={{}}>
        <Image style={styles.welcomeLogo} source={onboardWelcome} />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 125,
    flex: 1,
  },
  welcomeLogo: {
    alignself: "center",
    width: 350,
    height: 350,
  },
});
