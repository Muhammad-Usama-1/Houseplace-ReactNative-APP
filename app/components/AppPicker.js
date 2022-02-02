import {
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import AppButton from "./AppButton";
const AppPicker = ({ placeholder, items, onSelectItem, selectedItem }) => {
  const handleSelect = (item) => {
    setIsVisible(false);
    onSelectItem(item);
  };
  const [isVisible, setIsVisible] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={() => setIsVisible(!isVisible)}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          style={{ marginRight: 5 }}
          name="apps"
          color="black"
          size={32}
        />
        <AppText style={styles.text}>
          {selectedItem ? selectedItem.title : placeholder}
        </AppText>
        <MaterialCommunityIcons name="chevron-down" color="black" size={32} />
        <Modal
          style={styles.modalWindow}
          animationType="slide"
          visible={isVisible}
        >
          <View>
            <FlatList
              data={items}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.categoryOptions}>
                  <AppText onPress={() => handleSelect(item)}>
                    {item.title}
                  </AppText>
                </View>
              )}
            />
          </View>
          <AppButton title="close" onPress={() => setIsVisible(false)} />
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 20,
    backgroundColor: "white",
    padding: 10,
    alignItems: "center",
  },
  text: {
    flex: 1,
  },

  categoryOptions: {
    padding: 5,
  },
});
