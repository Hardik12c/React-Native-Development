import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Button from "../components/Button";

export default function Gamestart() {
  return (
    <View style={styles.inputcontainer}>
      <TextInput
        style={styles.numberinput}
        maxLength={2}
        autoCapitalize="none"
        keyboardType="number-pad"
        autoCorrect={false}
      />
      <View style={styles.buttoncontainer}>
        <View style={{flex:1}}>
          <Button>Reset</Button>
        </View>
        <View style={{flex:1}}>
          <Button>Confirm</Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputcontainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 24,
    borderRadius: 8,
    marginTop: 100,
    padding: 6,
    backgroundColor: "#3b0421",
    elevation: 10,
    shadowColor: "#000000",
    shadowOffset: { width: 20, height: 50 },
    shadowRadius: 25,
    shadowOpacity: 1,
  },
  numberinput: {
    height: 50,
    width: 50,
    fontWeight: "bold",
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    fontWeight: "bold",
    fontSize: 32,
    marginVertical: 8,
    textAlign: "center",
  },
  buttoncontainer: {
    flexDirection: "row",
  },
});
