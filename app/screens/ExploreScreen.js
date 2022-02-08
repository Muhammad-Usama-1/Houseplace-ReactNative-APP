import { FlatList, ImageBackground, StyleSheet, View } from "react-native";
import React, { useState } from "react";

import AppText from "../components/AppText";
import Category from "../components/Category";
import { color } from "../config/colors";
import data from "../dev-data/listings";
import Screen from "../components/Screen";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../api/firebase.config";
import ActivityIndicator from "../components/ActivityIndicator";

const categories = [
  {
    id: 1,
    title: "Places for rent",
    category: "rent",
    image:
      "https://media.istockphoto.com/photos/front-view-of-an-acadian-renovated-home-with-columns-sidewalks-and-a-picture-id1332179910?b=1&k=20&m=1332179910&s=170667a&w=0&h=o3j8Y3Cs5iy_U_z43PI7kJZwcDyoguxjscsEFyI5mfw=",
  },
  {
    id: 2,
    title: "Places for Sale",
    category: "sell",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
];
const ExploreScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const hanldeExplore = async (item) => {
    setList([]);
    setLoading(true);
    const colRef = collection(db, "listings");
    const q = query(colRef, where("category", "==", item.category));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      list.push({ ...doc.data(), id: doc.id });
    });
    setLoading(false);
    navigation.navigate("Listings", {
      data: list,
      title: item.title,
    });
  };
  console.log(list);
  return (
    <Screen style={styles.container}>
      {/* <AppText style={styles.heading}>Explore</AppText> */}
      <ActivityIndicator visible={loading} />
      <View style={styles.containerBig}>
        <ImageBackground
          source={{
            uri: "https://media.istockphoto.com/photos/home-with-blue-siding-and-stone-faade-on-base-of-home-picture-id1272128530?b=1&k=20&m=1272128530&s=170667a&w=0&h=k9lT5-DEmkmehDb-EKRHoP1-op2DTgz4ibiWGXmj7h8=",
          }}
          resizeMethod="resize"
          style={styles.mostviwedimage}
        >
          <View style={styles.innerContainer}>
            <AppText style={styles.dimText}>
              Beautiful Stratford Condo - $2,000
            </AppText>
          </View>
        </ImageBackground>
      </View>
      {/* ----------Background complete */}
      <AppText style={{ fontSize: 30, marginTop: 20 }}>Category</AppText>

      <FlatList
        numColumns={2}
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Category item={item} onPress={() => hanldeExplore(item)} />
        )}
      />
    </Screen>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  cotegoryContainer: {
    flexDirection: "row",
    width: "100%",
  },
  innerContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0, 0.50)",
    justifyContent: "center",

    padding: 10,
  },

  container: {
    backgroundColor: color.light,
    padding: 10,
  },
  dimText: {
    color: color.white,
    backgroundColor: "rgba(0,0,0, 0.50)",

    padding: 10,
  },
  heading: {
    fontSize: 50,
    fontWeight: "100",
    color: "#000",
    marginBottom: 20,
  },
  mostviwedimage: {
    width: "100%",
    height: 200,
    overflow: "hidden",
    borderRadius: 10,
  },
  subHeading: {
    fontSize: 20,
  },
});
