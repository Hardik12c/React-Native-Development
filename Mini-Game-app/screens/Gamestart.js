import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Button from "../components/Button";
import Card from "../components/Card";
import Title from "../components/Title";

export default function Gamestart(props) {
  const [enterednumber, setenterednumber] = useState("");
  const inputhandler = (enterednumber) => {
    setenterednumber(enterednumber);
  };
  const resetinputhandler = () => {
    setenterednumber("");
  };
  const confirminputhandler = () => {
    const number = parseInt(enterednumber);
    if (isNaN(number) || number <= 0 || number > 99) {
      Alert.alert(
        "Invalid Number",
        "Number must be in the range between 0 and 99",
        [{ text: "Okay", style: "default", onPress: resetinputhandler }]
      );
      return;
    }
    props.screenupdate(number);
  };
  const { height, width } = useWindowDimensions();
  const margittopdistance = height < 400 ? 30 : 150;
  return (
    <ScrollView>
      <View
        style={[styles.gamestartcontainer, { marginTop: margittopdistance }]}
      >
        <Title children={"Guess my number"} />
        <Card>
          <Text style={styles.inputinstructions}>Enter a Number</Text>
          <TextInput
            style={styles.numberinput}
            maxLength={2}
            autoCapitalize="none"
            keyboardType="number-pad"
            autoCorrect={false}
            value={enterednumber}
            onChangeText={inputhandler}
          />
          <View style={styles.buttoncontainer}>
            <View style={{ flex: 1 }}>
              <Button handlepress={resetinputhandler}>Reset</Button>
            </View>
            <View style={{ flex: 1 }}>
              <Button handlepress={confirminputhandler}>Confirm</Button>
            </View>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  gamestartcontainer: {
    flex: 1,
    alignItems: "center",
  },
  inputinstructions: {
    color: "#ddb52f",
    fontSize: 26,
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
