import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Incubator } from "react-native-ui-lib";
import {
  onBoardingTitle,
  onBoardingSelect,
} from "../../../constants/OnboardingStyle";
import { Picker } from "@react-native-picker/picker";
type Props = {};

const ChooseLanguage = (props: Props) => {
  useEffect(() => {}, []);
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            color: "#000",
            fontSize: 25,
          }}
        >
          Choose Your Language
        </Text>
      </View>
      <Picker
        style={{
          backgroundColor: "#ddd",
          width: 250,
          fontSize: 25,
          marginTop:15,
        }}
        collapsable
        itemStyle={{ fontSize: 20 }}
        mode="dialog"
        numberOfLines={5}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
      >
        <Picker.Item label="English" value="en" />
        <Picker.Item label="हिंदी" value="hi" />
        <Picker.Item label="ಕನ್ನಡ" value="kn" />

        <Picker.Item label="తెలుగు" value="tl" />
      </Picker>
    </View>
  );
};

export default ChooseLanguage;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingHorizontal:15
  },
  welcomeLogo: {
    alignself: "center",
    width: 250,
    height: 250,
  },
});
