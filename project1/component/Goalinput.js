import { StyleSheet, View, Button, TextInput } from "react-native";

export default function Goalinput(props) {
  return (
    <View style={styles.flexcontainer}>
      <TextInput
        value={props.text}
        onChangeText={props.changetext}
        style={styles.textinputstyle}
        placeholder="Enter text here..."
      />
      <Button title="ADD" onPress={props.goaladd} />
    </View>
  );
}

const styles = StyleSheet.create({
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
});
