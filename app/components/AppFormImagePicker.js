import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageInput from "./ImageInput";
import { useFormikContext } from "formik";
import ErrorMsg from "./ErrorMsg";

const AppFormImagePicker = ({ name }) => {
  return (
    <View>
      <ImageInput />
    </View>
  );
};

export default AppFormImagePicker;

const styles = StyleSheet.create({});
