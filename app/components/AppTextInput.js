import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          style={styles.icon}
          name={icon}
          color={defaultStyles.color.medium}
          size={32}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.color.medium}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: defaultStyles.color.white,
    borderRadius: 25,
    flexDirection: "row",
    padding: 10,
    marginVertical: 5,
  },
  icon: {
    marginRight: 10,
  },
});
export default AppTextInput;
