import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import Card from "../components/Card";
import Numberscreen from "../components/Numberscreen";
import Title from "../components/Title";


function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minboundary = 1;
let maxboundary = 100;
export default function Gamescreen({ userenterednumber, Ongameover }) {
  const initialguess = generateRandomBetween(1, 100, userenterednumber);
  const [currentguess, setcurrentguess] = useState(initialguess);
  useEffect(() => {
    if (currentguess == userenterednumber) {
      Ongameover();
    }
  }, [currentguess, userenterednumber, Ongameover]);

  const nextnumberguess = (direction) => {
    if (
      (direction === "lower" && currentguess < userenterednumber) ||
      (direction === "greater" && currentguess > userenterednumber)
    ) {
      Alert.alert("Don't Lie!!", "You know that is wrong....", [
        {
          text: "sorry!",
          style: "cancel",
        },
      ]);
      return;
    }
    if (direction === "greater") {
      minboundary = currentguess + 1;
    } else {
      maxboundary = currentguess;
    }
    const newnumber = generateRandomBetween(
      minboundary,
      maxboundary,
      currentguess
    );
    setcurrentguess(newnumber);
  };
  return (
    <View style={styles.screen}>
      <Title children={`Opponent's Guess`} />
      <Numberscreen guess={currentguess} />
      <Card>
        <Text style={styles.guesshead}>Higher or Lower?</Text>
        <View style={styles.buttoncontainer}>
          <View style={{ flex: 1 }}>
            <Button handlepress={nextnumberguess.bind(this, "lower")}>-</Button>
          </View>
          <View style={{ flex: 1 }}>
            <Button handlepress={nextnumberguess.bind(this, "greater")}>
              +
            </Button>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  guesshead: {
    marginBottom: 30,
    color: "#ddb52f",
    fontSize: 26,
  },
  buttoncontainer: {
    flexDirection: "row",
  },
});
