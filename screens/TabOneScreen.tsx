import React from 'react';
import { Dimensions, Platform, StatusBar, StyleSheet } from 'react-native';
import PagerView from 'react-native-pager-view';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import ChooseLanguage from '../modules/onboarding/pages/ChooseLanguage';
import RegsitrationConfirmation from '../modules/onboarding/pages/RegsitrationConfirmation';
import RetailerImageUpload from '../modules/onboarding/pages/RetailerImageUpload';
import RetailerInformation from '../modules/onboarding/pages/RetailerInformation';
import RetailerMobileReg from '../modules/onboarding/pages/RetailerMobileReg';
import WelcomeScreen from '../modules/onboarding/pages/WelcomeScreen';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <PagerView style={styles.pagerView} initialPage={0} showPageIndicator>
  

    <View key="1">
      <WelcomeScreen />
    </View>
    <View key="2">
      <ChooseLanguage />
    </View>
    <View key="3">
      <RetailerMobileReg />
    </View>
    <View key="4">
      <RetailerInformation />
    </View>
    <View key="5">
      <RetailerImageUpload />
    </View>
    <View key="6">
      <RegsitrationConfirmation />
    </View>
  </PagerView>

  );
}

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
    height: Dimensions.get('screen').height
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
    backgroundColor: "#ddd"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
