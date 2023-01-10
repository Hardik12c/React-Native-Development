import { StyleSheet, View,Text } from "react-native";

export default function Goalitem(props) {
  return (
    <View style={styles.goalsstyle}>
      <Text style={styles.textstyle}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
