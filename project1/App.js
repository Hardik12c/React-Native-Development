import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "red",
          width: 100,
          height: 100,
          justifyContent: "center",
          alignItems:'center',
        }}
      >
        <Text>1</Text>
      </View>
      <View style={{
          backgroundColor: "green",
          width: 100,
          height: 100,
          justifyContent: "center",
          alignItems:'center',
        }}>
        <Text>2</Text>
      </View>
      <View style={{
          backgroundColor: "blue",
          width: 100,
          height: 100,
          justifyContent: "center",
          alignItems:'center',
        }}>
        <Text>3</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    flexDirection:'column',
    alignItems:'flex-end',
  }
  // flexcontainer: {
  //   flexDirection: "row",
  // },
  // textinputstyle: {
  //   borderWidth: 1,
  //   borderColor: "blue",
  //   width: "80%",
  //   backgroundColor: "#cccccc",
  // },
});
