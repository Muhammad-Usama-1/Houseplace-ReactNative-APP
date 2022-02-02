import { StyleSheet } from "react-native";
import React from "react";
import AppText from "../AppText";

const ErrorMsg = ({ error, visible }) => {
  if (!error || !visible) return null;
  return <AppText style={styles.error}> {error} </AppText>;
};

export default ErrorMsg;

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});
