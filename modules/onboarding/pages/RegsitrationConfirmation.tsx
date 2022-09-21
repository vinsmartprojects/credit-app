import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useContext, useEffect } from "react";
import { OnBoardingContext } from "../provider/OnBoardingProvider";
import OnBoardingPageController from "../components/OnBoardingPageController";
const onBoardSuccessRegistration = require("../../../assets/images/successRegistration.png");
const RegsitrationConfirmation = ({ onSetPage }: any) => {
  const { onBoardingInputs, onUploadChange, onRegister }: any =
    useContext(OnBoardingContext);
  useEffect(() => {}, [onBoardingInputs]);
  return (
    <View style={styles.container}>
      <View style={{}}>
        <Image style={styles.welcomeLogo} source={onBoardSuccessRegistration} />
      </View>
      <View style={{}}>
        <Text>OnBoarding Successfull!!</Text>
      </View>
      <Pressable style={{ paddingVertical: 15 }} onPress={onRegister}>
        <Text>Register</Text>
      </Pressable>

      <View style={{ marginVertical: 30 }}>
        <OnBoardingPageController  back={5} onSetPage={onSetPage}  hideNext/>
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
