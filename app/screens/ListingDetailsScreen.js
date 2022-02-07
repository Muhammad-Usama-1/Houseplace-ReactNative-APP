import { Image, StyleSheet, View } from "react-native";
import React from "react";

import AppButton from "../components/AppButton";
import AppTag from "../components/AppTag";
import AppText from "../components/AppText";
import Screen from "../components/Screen";

const ListingDetailsScreen = ({ route, navigation }) => {
  let { item } = route.params;

  return (
    <Screen style={styles.container}>
      <Image style={styles.image} source={{ uri: item.images[0] }} />

      <View style={styles.detailsContainer}>
        <AppText style={styles.subHeading}> {item.title} </AppText>
        <AppText style={{ fontWeight: "bold" }}> {item.address} </AppText>
        <View style={styles.tagContainer}>
          <AppTag> For {item.category} </AppTag>
          {item.offer ? (
            <AppTag backgroundColor="dark"> $500 disconut</AppTag>
          ) : null}
        </View>
        <View style={{ marginTop: 10, paddingLeft: 10 }}>
          <AppText>{item.bedrooms} Bedrooms </AppText>
          <AppText>{item.bathrooms} Bathrooms </AppText>
          {item.parking && <AppText>Parking Spot </AppText>}
          {item.furnished && <AppText>Furnished </AppText>}
          <AppButton
            onPress={() => navigation.navigate("Messages")}
            title="Contact Landlord"
          />
        </View>
      </View>
    </Screen>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  container: {},
  subHeading: {
    fontWeight: "bold",
    fontSize: 26,
  },
  detailsContainer: {
    padding: 10,
    marginTop: 10,
  },
  tagContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
});
