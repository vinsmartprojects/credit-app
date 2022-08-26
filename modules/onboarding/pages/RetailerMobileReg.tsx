import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import MobileNoInput from "../components/MobileNoInput";
import { OnBoardingContext } from "../provider/OnBoardingProvider";
import OnBoardingPageController from "../components/OnBoardingPageController";

const RetailerMobileReg = ({onSetPage}:any) => {
  const { onBoardingInputs, onTextInputChange }: any =
    useContext(OnBoardingContext);
  useEffect(() => {
    
  }, [onBoardingInputs]);

  function onValueChange(data: any) {
    onTextInputChange({ key: "mobile", value: data });
  }
  return (
    <View style={styles.container}>
      <View style={{}}>
        <Text style={{ fontSize: 20, paddingVertical: 15 }}>
          Welcome - {onBoardingInputs?.language}
        </Text>
        <Text style={{ fontSize: 18 }}>Enter Your Mobile Number</Text>
      </View>
      <View style={{ paddingVertical: 30 }}>
        <MobileNoInput
          value={onBoardingInputs?.mobile}
          onValueChange={onValueChange}
          placeholder="XX XXX XXX  XXX"
        />
      </View>
      <View style={{ marginVertical: 30 }}>
        <OnBoardingPageController next={4} back={3} onSetPage={onSetPage} />
      </View>
    </View>
  );
};

export default RetailerMobileReg;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    paddingHorizontal: 30,
    paddingTop: 125,
    flex: 1,
  },
  welcomeLogo: {
    alignself: "center",
    width: 350,
    height: 350,
  },
});
