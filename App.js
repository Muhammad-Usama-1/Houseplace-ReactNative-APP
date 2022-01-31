import { StyleSheet } from "react-native";

import React from "react";
import { color } from "./app/config/colors";
import AppText from "./app/components/AppText";
import Screen from "./app/components/Screen";
export default function App() {
  return (
    <Screen style={styles.container}>
      <AppText style={styles.text}> Build Form Validations with Yup </AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.light,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: color.primary,
    fontWeight: "bold",
    fontSize: 24,
  },
});
