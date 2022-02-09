import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import FeedNavigator from "./FeedNavigator";
import AuthNavigator from "./AuthNavigator";
import CreateListingScreen from "../screens/CreateListingScreen";
import AuthContext from "../auth/context";
import { auth } from "../api/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import OfferScreen from "../screens/OfferScreen";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  const authContext = useContext(AuthContext);

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
        name="Home"
        component={FeedNavigator}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="offer" size={size} color={color} />
          ),
        }}
        name="Offer"
        component={OfferScreen}
      />

      {authContext.user && (
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="plus" size={size} color={color} />
            ),
          }}
          name="Create List"
          component={CreateListingScreen}
        />
      )}

      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
        name="profile"
        component={AuthNavigator}
      />
    </Tab.Navigator>
  );
}
