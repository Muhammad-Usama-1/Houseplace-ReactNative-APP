import { StyleSheet } from "react-native";
import React from "react";
import AppText from "./AppText";
import { color } from "../config/colors";

const AppHeading = ({ children, style }) => {
  return <AppText style={[style, styles.text]}> {children} </AppText>;
};

export default AppHeading;

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 30,
    color: color.dark,
    textTransform: "capitalize",
  },
});
