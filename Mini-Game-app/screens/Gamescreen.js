import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
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
export default function Gamescreen(props) {
  const initialguess=generateRandomBetween(1,100,props.userenterednumber)
  const [currentguess, setcurrentguess] = useState(initialguess)
  return (
    <View style={styles.screen}>
      <Title children={`Opponent's Guess`} />
      <Numberscreen guess={currentguess}/>
      <View>
      <Text>Higher or Lower?</Text>
      <View style={styles.buttoncontainer}>
        <Button>+</Button>
        <Button>-</Button>
      </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttoncontainer:{
    flexDirection:'row',
    // flex:1,
  }
});
