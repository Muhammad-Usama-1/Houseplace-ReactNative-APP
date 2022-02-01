import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { color } from "./app/config/colors";
import RegisterScreen from "./app/screens/RegisterScreen";
import { createStackNavigator } from "@react-navigation/stack";
export default function App() {
  return <RegisterScreen />;
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
