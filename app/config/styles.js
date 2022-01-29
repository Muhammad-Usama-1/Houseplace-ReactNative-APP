import { Platform } from "react-native";
import { color } from "./colors";
export default {
  text: {
    color: color.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  color,
};
