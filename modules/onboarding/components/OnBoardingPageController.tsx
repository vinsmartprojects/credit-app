import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
type Props = {};
const OnBoardingPageController = ({
  hideNext,
  hideBack,
  next,
  back,
  onSetPage,
}: any) => {
  return (
    <View
      style={{
        marginVertical: 30,
        display: "flex",

        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {!hideNext && (
        <Pressable
          style={{
            flexGrow: 1,
            borderWidth: 0.5,
            borderColor: "#ddd",
            paddingHorizontal: 15,
            paddingVertical: 5,
            borderRadius: 15,
          }}
          onPress={(e: any) => {
            onSetPage(back);
          }}
        >
          <Text style={{ fontSize: 18 }}>Back </Text>
        </Pressable>
      )}
      <View style={{ flexGrow: 1 }}></View>
      {!hideNext && (
        <Pressable
          style={{
            flexGrow: 1,
            borderWidth: 0.5,
            borderColor: "#ddd",
            paddingHorizontal: 15,
            paddingVertical: 5,
            borderRadius: 15,
          }}
          onPress={(e: any) => {
            onSetPage(next);
          }}
        >
          <Text style={{ fontSize: 18 }}>Continue</Text>
        </Pressable>
      )}
    </View>
  );
};

export default OnBoardingPageController;

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
