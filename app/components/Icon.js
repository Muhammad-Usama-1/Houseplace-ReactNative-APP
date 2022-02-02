import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Icon({
  name,
  size = 40,
  backgroundColor = "#5AC57A",
  iconColor = "#fff",
  onPress,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MaterialCommunityIcons name={name} size={size * 0.5} color={iconColor} />
    </TouchableOpacity>
  );
}

export default Icon;
