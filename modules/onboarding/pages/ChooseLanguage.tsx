import _ from "lodash";
import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import { Incubator } from "react-native-ui-lib";
import OnBoardingPageController from "../components/OnBoardingPageController";
 
import {
  enabledLanguages,
  OnBoardingContext,
} from "../provider/OnBoardingProvider";
type Props = {};

const ChooseLanguagePicker = ({ onSetPage }: any) => {
  const { onBoardingInputs, onTextInputChange }: any =
    useContext(OnBoardingContext);

  function onLangChanged(data: any) {
    onTextInputChange({ key: "language", value: data });
  }
  return (
    <View style={styles.container}>
      <View style={{}}>
        <Text
          style={{
            color: "#000",
            fontSize: 25,
          }}
        >
          Choose Your Language
        </Text>
      </View>
      <View style={{ marginVertical: 30 }}>
        <Incubator.WheelPicker
          initialValue={onBoardingInputs?.language}
          items={enabledLanguages}
          numberOfVisibleRows={6}
          onChange={(data: any) => {
            console.log(data);
            onLangChanged(data);
          }}
        />
      </View>
      <View style={{ marginVertical: 30 }}>
        <OnBoardingPageController next={2} back={0} onSetPage={onSetPage} />
      </View>
    </View>
  );
};

export default ChooseLanguagePicker;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    height: Dimensions.get("screen").height,
  },
});
