import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
const onboardWelcome = require("../../../assets/images/onboardWelcome.png");
const WelcomeScreen = ({ onSetPage }: any) => {
  return (
    <View style={styles.container}>
      <View style={{}}>
        <Text style={{ fontSize: 20, paddingVertical: 15 }}>
          Start Onboarding
        </Text>
        <Text style={{ fontSize: 30 }}>Your Retail Store.</Text>
      </View>
      <View style={{}}>
        <Image style={styles.welcomeLogo} source={onboardWelcome} />
      </View>
      <Pressable
        style={{
          borderWidth: 0.5,
          borderColor: "#ddd",
          paddingHorizontal: 15,
          paddingVertical: 5,
          borderRadius: 15,
        }}
        onPress={(e: any) => {
          onSetPage(1);
        }}
      >
        <Text style={{ fontSize: 18 }}>Continue</Text>
      </Pressable>
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
