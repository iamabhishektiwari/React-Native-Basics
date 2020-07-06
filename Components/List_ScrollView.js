import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function List_ScrollView() {
  const [people, setPeople] = useState([
    { name: "abhishek", id: "1" },
    { name: "Pranav", id: "2" },
    { name: "Demo", id: "3" },
    { name: "Remo", id: "4" },
    { name: "Khyati", id: "5" },
    { name: "Ananya", id: "6" },
    { name: "Alia", id: "7" },
    { name: "Katrina", id: "8" },
  ]);

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter((person) => person.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );

  //   return (
  //     <ScrollView style={styles.container}>
  //       {people.map((item) => {
  //         return (
  //           <View key={item.key}>
  //             <Text style={styles.item}>
  //               {item.key}. {item.name}
  //             </Text>
  //           </View>
  //         );
  //       })}
  //     </ScrollView>
  //   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    backgroundColor: "pink",
    padding: 20,
  },
  body: {
    backgroundColor: "tomato",
    padding: 20,
  },
  item: {
    padding: 30,
    marginTop: 24,
    backgroundColor: "pink",
    fontSize: 25,
    marginHorizontal: 20,
    marginTop: 24,
  },
});
