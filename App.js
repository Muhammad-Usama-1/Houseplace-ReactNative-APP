import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ExploreScreen from "./app/screens/ExploreScreen";

export default function App() {
  return <ExploreScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
