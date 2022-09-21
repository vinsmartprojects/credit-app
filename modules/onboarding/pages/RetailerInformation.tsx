import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { TextField } from "react-native-ui-lib";
import {
  onBoardingTitle,
  onBoardingTitleFour,
  onBoardingTitleThree,
  onBoardingTitleTwo,
} from "../../../constants/OnboardingStyle";
import { OnBoardingContext } from "../provider/OnBoardingProvider";
import OnBoardingPageController from "../components/OnBoardingPageController";

const RetailerInformation = ({onSetPage}:any) => {
  const { onBoardingInputs, onTextInputChange }: any =
    useContext(OnBoardingContext);
  useEffect(() => {}, [onBoardingInputs]);
  return (
    <View style={styles.container}>
      <View style={{ paddingVertical: 15 }}>
        <Text style={onBoardingTitleTwo}>Welcome{onBoardingInputs?.language}</Text>
      </View>
      <View style={{ paddingVertical: 5 }}>
        <Text style={onBoardingTitleThree}>{onBoardingInputs?.mobile}</Text>
      </View>
      <View style={{ paddingVertical: 5 }}>
        <Text style={onBoardingTitleFour}>
          Complete Your Retailer Registraion
        </Text>
      </View>
      <View style={{ paddingVertical: 30 }}>
        <View>
          <Text>Store Name</Text>
          <TextField
            migrate
            label="Store Name"
            style={{ border: 1 }}
            placeholder={"Store Name"}
            floatingPlaceholder
            value={onBoardingInputs?.storeName}
            onChangeText={(_value: any) =>
              onTextInputChange({ key: "storeName", value: _value })
            }
            enableErrors
            validate={["required", "string", (value: any) => value.length < 10]}
            validationMessage={["Field is required", "Store Name is invalid"]}
            maxLength={10}
            height={40}
            backgroundColor="#ddd"
          />
        </View>
        <View>
          <Text>Owner Name</Text>
          <TextField
            migrate
            label="Owner Name"
            style={{ border: 1 }}
            placeholder={"Owner Name"}
            floatingPlaceholder
            value={onBoardingInputs?.ownerName}
            onChangeText={(_value: any) =>
              onTextInputChange({ key: "ownerName", value: _value })
            }
            enableErrors
            validate={["required", "string", (value: any) => value.length < 10]}
            validationMessage={["Field is required", "Owner Name is invalid"]}
            maxLength={10}
            height={40}
            backgroundColor="#ddd"
          />
        </View>
        <View>
          <Text>Area Pincode</Text>
          <TextField
            migrate
            label="Area Pincode"
            style={{ border: 1 }}
            placeholder={"Area Pincode"}
            floatingPlaceholder
            value={onBoardingInputs?.pincode}
            onChangeText={(_value: any) =>
              onTextInputChange({ key: "pincode", value: _value })
            }
            enableErrors
            validate={["required", "string", (value: any) => value.length < 10]}
            validationMessage={["Field is required", "Pincode is invalid"]}
            maxLength={10}
            height={40}
            backgroundColor="#ddd"
          />
        </View>
      </View>
      <View style={{ marginVertical: 30 }}>
        <OnBoardingPageController next={4} back={3} onSetPage={onSetPage}   />
      </View>
    </View>
  );
};

export default RetailerInformation;

const styles = StyleSheet.create({
  container: {
    paddingTop: Dimensions.get("screen").height / 6,
    paddingHorizontal: 30,
    flex: 1,
  },
});
