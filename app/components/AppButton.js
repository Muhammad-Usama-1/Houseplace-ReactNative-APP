import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { color } from "../config/colors";
function AppButton({ title, onPress, bgcolor = "primary" }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btnContainer, { backgroundColor: color[bgcolor] }]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    width: "100%",
    backgroundColor: color.primary,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginVertical: 5,
  },
  text: {
    color: color.white,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 15,
  },
});

export default AppButton;
