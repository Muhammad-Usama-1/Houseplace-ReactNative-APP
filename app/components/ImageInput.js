import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { useFormikContext } from "formik";
import React, { useRef } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import { color } from "../config/colors";
import ErrorMsg from "./ErrorMsg";
const ImageInput = ({ name }) => {
  const scrollView = useRef();
  const { errors, touched, setFieldValue, values } = useFormikContext();
  const imageUris = values[name];
  const pickImage = async () => {
    if (imageUris.length >= 7)
      return alert("More than seven images are not allowed");
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
    });

    if (!result.cancelled) {
      setFieldValue(name, [...values[name], result.uri]);
    }
  };
  const handleDelete = (uri) => {
    Alert.alert("Delete Image", "Are you sure to delete an image?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () =>
          setFieldValue(
            name,
            imageUris.filter((img) => img !== uri)
          ),
      },
    ]);
  };

  return (
    <>
      <ScrollView
        horizontal
        style={styles.imageConntainer}
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        {imageUris?.map((uri) => (
          <TouchableOpacity key={uri} onPress={() => handleDelete(uri)}>
            <Image style={styles.image} source={{ uri: uri }} />
          </TouchableOpacity>
        ))}
        <TouchableHighlight
          onPress={() => pickImage()}
          style={styles.container}
        >
          <MaterialCommunityIcons name="camera" size={25} color={"black"} />
        </TouchableHighlight>
      </ScrollView>
      <ErrorMsg error={errors[name]} visible={touched[name]} />
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
    width: 70,
    height: 70,
    alignItems: "center",
    // justifyContent: "center",
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 20,
    margin: 10,
  },
  imageConntainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
