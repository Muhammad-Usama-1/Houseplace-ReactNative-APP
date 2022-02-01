import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import React from "react";
import { color } from "./app/config/colors";
import RegisterScreen from "./app/screens/RegisterScreen";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "./app/screens/SignInScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ExploreScreen from "./app/screens/ExploreScreen";
const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ title: "Explore Amazing Places" }}
        name="Explore"
        component={ExploreScreen}
      />
      <Stack.Screen
        options={({ route }) => ({
          title: `Places For ${route.params?.title}`,
        })}
        name="Listings"
        component={ListingsScreen}
      />
      <Stack.Screen
        options={({ route }) => ({ title: route.params?.item?.title })}
        name="ListingsDetails"
        component={ListingDetailsScreen}
      />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
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
