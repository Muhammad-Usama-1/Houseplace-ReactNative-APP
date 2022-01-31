import {
  Alert,
  Image,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import { color } from "../config/colors";
const ImageInput = () => {
  const [images, setImages] = useState([]);
  const handleDelete = (img) => {
    console.log(img);
    Alert.alert("Delete Image", "Are you sure to delete an image?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () =>
          setImages(images.filter((image) => image.uri !== img.uri)),
      },
    ]);
  };
  const pickImage = async () => {
    if (images.length >= 3) return alert("More than 3 images are not allowed");
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.cancelled) {
      setImages([...images, result]);
    }
  };

  return (
    <>
      <View style={styles.imageConntainer}>
        {images?.map((img) => (
          <>
            <TouchableOpacity onPress={() => handleDelete(img)}>
              <Image
                onPress={() => console.log("Image Tapped")}
                style={styles.image}
                source={{ uri: img.uri }}
              />
            </TouchableOpacity>
          </>
        ))}
        <TouchableHighlight
          onPress={() => pickImage()}
          style={styles.container}
        >
          <MaterialCommunityIcons name="camera" size={50} color={"black"} />
        </TouchableHighlight>
      </View>
    </>
  );
};

export default ImageInput;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 20,
    borderRadius: 20,
    backgroundColor: color.white,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 20,
    margin: 10,
  },
  imageConntainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
