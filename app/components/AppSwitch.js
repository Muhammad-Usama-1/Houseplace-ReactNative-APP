import { StyleSheet, Switch, View } from "react-native";
import React from "react";

import AppText from "./AppText";
import { color } from "../config/colors";

const AppSwitch = ({ title, onChange, value, ...otherProps }) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>{title}</AppText>
      <Switch {...otherProps} onChange={onChange} value={value} />
    </View>
  );
};

export default AppSwitch;

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
