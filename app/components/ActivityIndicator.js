import React from "react";
import LottieView from "lottie-react-native";

const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;

  return (
    <LottieView
      style={{ zIndex: 10 }}
      autoPlay
      loop
      source={require("../assets/animations/loading.json")}
    />
  );
};

export default ActivityIndicator;
