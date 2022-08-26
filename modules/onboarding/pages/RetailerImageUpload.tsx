import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageUploader from "../components/ImageUploader";

const RetailerImageUpload = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Complete Your Retailer Registraion</Text>
      </View>
      <View>
        <Text> Profile Image to Get Personal Touch</Text>
      </View>
      <ImageUploader />
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
