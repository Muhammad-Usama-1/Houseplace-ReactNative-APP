import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { color } from "../config/colors";
import { useNavigation } from "@react-navigation/native";

const Listing = ({ item, deleteAction }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ListingsDetails", { item })}
      style={styles.container}
    >
      <Image
        style={styles.image}
        source={{
          uri: item.images[0],
        }}
      />
      <View style={styles.detailsContainer}>
        {item.address && <AppText> {item.address} </AppText>}
        <AppText style={styles.title}> {item.title} </AppText>
        <AppText style={{ color: color.primary, fontWeight: "bold" }}>
          ${item.price} / Month
        </AppText>
        {/* icons start */}
        <View style={styles.iconsContainer}>
          <View style={styles.iconInfo}>
            <MaterialCommunityIcons
              name="bed-double-outline"
              size={20}
              color={"black"}
            />
            <AppText> {item.bedrooms} Bedrooms </AppText>
          </View>
          <View style={styles.iconInfo}>
            <MaterialCommunityIcons
              name="scale-bathroom"
              size={20}
              color={"black"}
            />
            <AppText> {item.bathrooms} Bathrooms </AppText>
          </View>
        </View>
        {/* icons end */}
      </View>
      {deleteAction && (
        <MaterialCommunityIcons
          style={{ alignSelf: "flex-start" }}
          name="close"
          size={32}
          color={"red"}
        />
      )}
    </TouchableOpacity>
  );
};

export default Listing;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  iconsContainer: {
    flexDirection: "row",
  },
  iconInfo: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  detailsContainer: {
    width: "100%",
    marginLeft: 10,
    // marginTop: -30,
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
});
