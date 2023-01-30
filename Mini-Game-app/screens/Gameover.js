import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import Title from "../components/Title";

export default function Gameover({ roundsnumber, usernumber, onstartgame }) {
  return (
    <ScrollView>
      <View style={styles.rootcontainer}>
        <Title>Game over!!</Title>
        <View style={styles.Imagecontainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
        </View>
        <Text style={styles.completesummary}>
          Your Phone needed <Text style={styles.text}>{roundsnumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.text}>{usernumber}</Text>
        </Text>
        <Button handlepress={onstartgame}>Start New Game</Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootcontainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 24,
  },
  Imagecontainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    overflow: "hidden",
    borderWidth: 3,
    margin: 36,
    borderColor: "#3b0421",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  completesummary: {
    fontSize: 24,
    textAlign: "center",
    marginVertical: 24,
  },
  text: {
    fontWeight: "bold",
    color: "#3b0421",
  },
});
