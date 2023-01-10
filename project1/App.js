import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [text, settext] = useState("");
  const [goals, setgoals] = useState([]);
  const changetext = (e) => {
    settext(e);
  };

  const addgoal = () => {
    setgoals((currentgoals) => [
      ...currentgoals,
      { text: text, id: Math.random().toString() },
    ]);
    // settext("");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flexcontainer}>
        <TextInput
          value={text}
          onChangeText={changetext}
          style={styles.textinputstyle}
          placeholder="Enter text here..."
        />
        <Button title="ADD" onPress={addgoal} />
      </View>
      <View style={styles.goalcontainer}>
        <FlatList
          data={goals}
          renderItem={(goaldata) => {
            return (
              <View style={styles.goalsstyle}>
                <Text style={styles.textstyle}>{goaldata.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => {
            return item.id;
          }}
          // alwaysBounceVertical={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  flexcontainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    borderBottomWidth: 1,
  },
  textinputstyle: {
    borderWidth: 1,
    borderColor: "black",
    width: "80%",
    padding: 8,
    marginRight: 8,
  },
  goalcontainer: {
    flex: 3,
  },
  goalsstyle: {
    backgroundColor: "rgb(82,27,187)",
    marginBottom: 36,
    padding: 4,
    borderWidth: 1,
    borderRadius: 4,
  },
  textstyle: {
    color: "white",
    fontSize: 18,
  },
});
