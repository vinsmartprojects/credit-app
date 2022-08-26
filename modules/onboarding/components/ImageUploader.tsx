import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform, Pressable, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
const defaultImage = require("../../../assets/images/no-image.jpg");
export default function ImageUploader({ imageFile, onUploaded }: any) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {

    console.log("pickImage")
    // No permissions request is necessary for launching the image library
    let result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,

      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
        onUploaded(result.uri);
    }
  };
  const cancelImage = () => {
    onUploaded(null);
  };
  return (
    <View style={{ borderRadius: 100, borderWidth: 0.5 }}>
      {imageFile && (
        <View style={{}}>
          <Image
            source={{ uri: imageFile }}
            style={{ width: 200, height: 200, borderRadius: 100 }}
          />

          <Button color={"red"} title="X" onPress={cancelImage} />
        </View>
      )}

      {!imageFile && (
        <Pressable onPress={()=>{pickImage()}}>
          <View style={{}}>
            <Image
              source={defaultImage}
              style={{ width: 200, height: 200, borderRadius: 100 }}
            />
          </View>
          <View style={{}}>
            <Text style={{ fontSize: 30 }}>+</Text>
          </View>
        </Pressable>
      )}
    </View>
  );
}
