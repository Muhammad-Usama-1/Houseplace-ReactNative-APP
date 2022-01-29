import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import { color } from "../config/colors";

const AppTag = ({ children, backgroundColor = "primary" }) => {
  return (
    <View style={styles.container}>
      <AppText
        style={[styles.text, { backgroundColor: color[backgroundColor] }]}
      >
        {children}
      </AppText>
    </View>
  );
};

export default AppTag;

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    flexGrow: 0,
    flexShrink: 1,
  },
  text: {
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: color.white,
  },
});
