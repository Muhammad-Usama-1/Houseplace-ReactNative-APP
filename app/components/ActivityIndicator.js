import React from "react";
import LottieView from "lottie-react-native";
import AppText from "./AppText";
const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;

  return (
    <AppText>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/loader.json")}
      />
    </AppText>
  );
};

export default ActivityIndicator;
