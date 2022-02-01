import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppTextInput from "./AppTextInput";
import { useFormikContext } from "formik";

import ErrorMsg from "./ErrorMsg";
const AppFormInput = ({ placeholder, icon, name, ...otherProps }) => {
  const { handleChange, handleBlur, values, errors, touched } =
    useFormikContext();
  return (
    <View>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        value={values[name]}
        placeholder={placeholder}
        icon={icon}
        {...otherProps}
      />
      <ErrorMsg error={errors[name]} visible={touched[name]} />
    </View>
  );
};

export default AppFormInput;

const styles = StyleSheet.create({});
