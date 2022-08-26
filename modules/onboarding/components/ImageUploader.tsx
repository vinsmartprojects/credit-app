import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
const defaultImage = require('../../../assets/images/no-image.jpg');
export default function ImageUploader() {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result: any = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (<View style={{}}>
        <View style={{}}>
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius: 100 }} />}
            {!image && <Image source={defaultImage} style={{ width: 200, height: 200, borderRadius: 100 }} />}
        </View>
        <View style={{ width: 100, alignItems: "flex-end" }}><Button title="Add +" onPress={pickImage} /></View>
    </View>
    );
}