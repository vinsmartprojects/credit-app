import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Dimensions,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import PagerView from "react-native-pager-view";
import { OnBoardingContext } from "../provider/OnBoardingProvider";
import ChooseLanguage from "./ChooseLanguage";
import RegsitrationConfirmation from "./RegsitrationConfirmation";
import RetailerImageUpload from "./RetailerImageUpload";
import RetailerInformation from "./RetailerInformation";
import RetailerMobileReg from "./RetailerMobileReg";
import WelcomeScreen from "./WelcomeScreen";

type Props = {};

const OnboardingPageContainer = (props: Props) => {
  const { currentStage, setcurrentStage }: any = useContext(OnBoardingContext);
  const _pageViewRef = useRef<any>();
  const [pageViewRef, setpageViewRef] = useState<any>(_pageViewRef);

  useEffect(() => {}, [currentStage]);
  function onSetPage(pageNumber: Number) {
    pageViewRef.setPage(pageNumber);
  }
  function onBackScrolled({}: any) {
    const _currentPage = pageViewRef.currentPage();
    console.log(_currentPage);
    pageViewRef.setPage(currentStage - 1);
  }
  return (
    <PagerView
      ref={(pageViewRef) => {
        setpageViewRef(pageViewRef);
      }}
      style={styles.pagerView}
      initialPage={currentStage}
      scrollEnabled={false}
    >
      <View key="1">
        <WelcomeScreen onSetPage={onSetPage} />
      </View>
      <View key="2">
        <ChooseLanguage onSetPage={onSetPage} />
      </View>
      <View key="3">
        <RetailerMobileReg  onSetPage={onSetPage} />
      </View>
      <View key="4">
        <RetailerInformation onSetPage={onSetPage} />
      </View>
      <View key="5">
        <RetailerImageUpload  onSetPage={onSetPage} />
      </View>
      <View key="6">
        <RegsitrationConfirmation onSetPage={onSetPage}   />
      </View>
    </PagerView>
  );
};

export default OnboardingPageContainer;

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
    height: Dimensions.get("screen").height,
    backgroundColor: "#fff",
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50,
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
