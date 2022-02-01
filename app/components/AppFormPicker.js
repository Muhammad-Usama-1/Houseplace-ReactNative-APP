import { StyleSheet, View } from "react-native";
import React from "react";
import AppPicker from "./AppPicker";
import { useFormikContext } from "formik";
import ErrorMsg from "./ErrorMsg";

const AppFormPicker = ({ name, items, placeholder }) => {
  const { setFieldValue, errors, touched, values } = useFormikContext();
  return (
    <View>
      <AppPicker
        placeholder={placeholder}
        items={items}
        selectedItem={values[name]}
        onSelectItem={(item) => setFieldValue(name, item)}
      />
      <ErrorMsg error={errors[name]} visible={touched[name]} />
    </View>
  );
};

export default AppFormPicker;

const styles = StyleSheet.create({});
