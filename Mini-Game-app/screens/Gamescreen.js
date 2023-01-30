import React, { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Button from "../components/Button";
import Card from "../components/Card";
import GuessLogItem from "../components/Guesslogitem";
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
  const [guessrounds, setguessrounds] = useState([initialguess]);
  useEffect(() => {
    if (currentguess == userenterednumber) {
      Ongameover(guessrounds.length);
    }
  }, [currentguess, userenterednumber, Ongameover]);
  useEffect(() => {
    minboundary = 1;
    maxboundary = 100;
  }, []);
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
    if (direction === "lower") {
      maxboundary = currentguess;
    } else {
      minboundary = currentguess + 1;
    }
    const newnumber = generateRandomBetween(
      minboundary,
      maxboundary,
      currentguess
    );
    setcurrentguess(newnumber);
    setguessrounds((prevguess) => [newnumber, ...prevguess]);
  };
  const guessRoundsListLength = guessrounds.length;

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Title children={`Opponent's Guess`} />
        <Numberscreen guess={currentguess} />
        <Card>
          <Text style={styles.guesshead}>Higher or Lower?</Text>
          <View style={styles.buttoncontainer}>
            <View style={{ flex: 1 }}>
              <Button handlepress={nextnumberguess.bind(this, "lower")}>
                -
              </Button>
            </View>
            <View style={{ flex: 1 }}>
              <Button handlepress={nextnumberguess.bind(this, "greater")}>
                +
              </Button>
            </View>
          </View>
        </Card>
        <View style={styles.listcontainer}>
          <FlatList
            data={guessrounds}
            renderItem={(itemData) => (
              <GuessLogItem
                roundNumber={guessRoundsListLength - itemData.index}
                guess={itemData.item}
              />
            )}
            keyExtractor={(item) => item}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // paddingTop: 2,
    paddingHorizontal: 24,
  },
  guesshead: {
    marginBottom: 30,
    color: "#ddb52f",
    fontSize: 26,
  },
  buttoncontainer: {
    flexDirection: "row",
  },
  listcontainer: {
    flex: 1,
    // padding: 16,
  },
});
