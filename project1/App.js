import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";

export default function App() {
  const [text, settext] = useState("");

  const changetext = (e) => {
    settext(e);
  };

  const addgoal = () => {
    console.log(text);
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
        <Text>your Goals are here</Text>
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
});
