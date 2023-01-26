import { StyleSheet, Text, View } from "react-native";

export default function Numberscreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.Numbertext}>{props.guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    margin: 24,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ddb52f",
    borderWidth: 4,
    borderRadius: 8,
  },
  Numbertext:{
    fontWeight:'bold',
    fontSize:40,
    color:'#ddb52f'
  }
});
