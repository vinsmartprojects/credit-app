import React, { useRef } from "react";
import { Dimensions, Platform, StatusBar, StyleSheet } from "react-native";
import PagerView from "react-native-pager-view";
import { SafeAreaView } from "react-native-safe-area-context";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import ChooseLanguage from "../modules/onboarding/pages/ChooseLanguage";
import OnboardingPageContainer from "../modules/onboarding/pages/OnboardingPageContainer";

import { OnBoardingProvider } from "../modules/onboarding/provider/OnBoardingProvider";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"Home">) {
  const ref = useRef();
  return (
    <SafeAreaView style={styles.pagerView}>
      <OnBoardingProvider>
        <OnboardingPageContainer />
      </OnBoardingProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
    height: Dimensions.get("screen").height,
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
