import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {};

const OnBoardingPageController = ({ next, back, onSetPage }: any) => {
  return (
    <View>
      <View style={{ marginVertical: 30 }}>
        <Pressable
          style={{
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
          <Text style={{ fontSize: 18 }}>back</Text>
        </Pressable>
        <Pressable
          style={{
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
      </View>
    </View>
  );
};

export default OnBoardingPageController;

const styles = StyleSheet.create({});
