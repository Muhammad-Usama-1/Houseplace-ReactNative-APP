import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RegisterScreen from "../screens/RegisterScreen";
import SignInScreen from "../screens/SignInScreen";
import ExploreScreen from "../screens/ExploreScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{ headerShown: false }}
      name="Register"
      component={RegisterScreen}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name="Sign In"
      component={SignInScreen}
    />
    <Stack.Screen name="Home" component={ExploreScreen} />
  </Stack.Navigator>
);
export default AuthNavigator;
