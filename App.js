import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import React from "react";
import { color } from "./app/config/colors";
import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import CreateListingScreen from "./app/screens/CreateListingScreen";
import RegisterScreen from "./app/screens/RegisterScreen";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
    // <CreateListingScreen />
    // <RegisterScreen />
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
