import { Platform } from "react-native";
import { color } from "./colors";
export default {
  text: {
    color: color.dark,
    fontSize: 15,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  color,
};
