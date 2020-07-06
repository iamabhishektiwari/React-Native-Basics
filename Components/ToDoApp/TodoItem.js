import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function ToDoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <Text style={{ textAlign: "left" }}>{item.text}</Text>
        <MaterialIcons
          style={styles.icon}
          name="delete"
          size={24}
          color="black"
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#bbb",
    padding: 16,
    marginTop: 16,
    borderStyle: "dashed",
    borderRadius: 10,
    justifyContent: "flex-end",
  },
  icon: {
    marginLeft: "auto",
  },
});
