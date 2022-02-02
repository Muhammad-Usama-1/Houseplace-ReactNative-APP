import { StyleSheet, Switch, View } from "react-native";
import React from "react";
import { useFormikContext } from "formik";

import ErrorMsg from "./ErrorMsg";
import { color } from "../../config/colors";
import AppText from "../AppText";

const AppFormSwitch = ({ name, title }) => {
  const { setFieldValue, errors, touched, values } = useFormikContext();
  return (
    <View style={styles.container}>
      <AppText style={styles.text}> {title} </AppText>
      <Switch
        trackColor={{ false: "#767577", true: color.primary }}
        thumbColor={values[name] ? "#f4f4f4" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={(value) => setFieldValue(name, value)}
        value={values[name]}
      />
      <ErrorMsg error={errors[name]} visible={touched[name]} />
    </View>
  );
};

export default AppFormSwitch;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: color.white,
    fontWeight: "bold",
    backgroundColor: color.primary,
    padding: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderRadius: 10,
  },
});
