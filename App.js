import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CreateListingScreen from "./app/screens/CreateListingScreen";
import ExploreScreen from "./app/screens/ExploreScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import SignInScreen from "./app/screens/SignInScreen";

export default function App() {
  return <CreateListingScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
