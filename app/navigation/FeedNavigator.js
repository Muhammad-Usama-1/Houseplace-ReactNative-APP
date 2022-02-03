import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ExploreScreen from "../screens/ExploreScreen";
import { Text } from "react-native";
import MessagesScreen from "../screens/MessagesScreen";

const Stack = createNativeStackNavigator();
const Message = () => <Text>Message Screen</Text>;
const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Feed" component={ExploreScreen} />
    <Stack.Screen name="Listings" component={ListingsScreen} />
    <Stack.Screen name="ListingsDetails" component={ListingDetailsScreen} />
    <Stack.Screen name="Messages" component={MessagesScreen} />
  </Stack.Navigator>
);
export default FeedNavigator;
