import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function AddToDo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => submitHandler(text)}
        title="add todo"
        color="coral"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
});
