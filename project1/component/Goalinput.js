import { StyleSheet, View, Button, TextInput, Modal } from "react-native";

export default function Goalinput(props) {

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.flexcontainer}>
        <TextInput
          value={props.text}
          onChangeText={props.changetext}
          style={styles.textinputstyle}
          placeholder="Enter text here..."
        />
        <View style={styles.buttoncontainer}>
          <View style={styles.button}>
            <Button title="ADD" onPress={props.goaladd} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.togglemodal} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  flexcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
  buttoncontainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width:'40%',
    marginHorizontal: 8,
  },
});
