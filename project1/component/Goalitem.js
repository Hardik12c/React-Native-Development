import { StyleSheet, View, Text, Pressable } from "react-native";

export default function Goalitem(props) {
  return (
    <Pressable onPress={props.Ondeletegoal.bind(this,props.item.id)}>
      <View style={styles.goalsstyle}>
        <Text style={styles.textstyle}>{props.item.text}</Text>
      </View>
    </Pressable>
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
