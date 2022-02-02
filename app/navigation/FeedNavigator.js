import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ExploreScreen from "../screens/ExploreScreen";

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Feed" component={ExploreScreen} />
    <Stack.Screen name="Listings" component={ListingsScreen} />
    <Stack.Screen name="ListingsDetails" component={ListingDetailsScreen} />
  </Stack.Navigator>
);
export default FeedNavigator;
