import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { color } from "../config/colors";
function AppButton({ title, onPress, bgcolor = "primary" }) {
  return (
    // <TouchableOpacity
    //  style={[styles.btnContainer , {backgroundColor: color[bgcolor]}]} onPress={onPress}>
    //   <Text style={styles.text}>{title}</Text>
    // </TouchableOpacity>
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
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginVertical: 10,
  },
  text: {
    color: color.white,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 18,
  },
});

export default AppButton;
