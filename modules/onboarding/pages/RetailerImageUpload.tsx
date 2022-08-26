import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import ImageUploader from "../components/ImageUploader";
import {
  onBoardingTitleFour,
  onBoardingTitleThree,
} from "../../../constants/OnboardingStyle";
import { OnBoardingContext } from "../provider/OnBoardingProvider";

const RetailerImageUpload = ({onSetPage}:any) => {
  const { onBoardingInputs, onUploadChange }: any =
    useContext(OnBoardingContext);
  useEffect(() => {}, [onBoardingInputs]);

  function onUploaded(data: any) {
    onUploadChange(data);
  }
  return (
    <View style={styles.container}>
      <View style={{ paddingVertical: 30 }}>
        <Text style={onBoardingTitleThree}>Upload Profile Image</Text>
      </View>
      <View>
        <ImageUploader
          imageFile={onBoardingInputs?.profileImageFile}
          onUploaded={onUploaded}
        />
      </View>
    </View>
  );
};

export default RetailerImageUpload;

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
