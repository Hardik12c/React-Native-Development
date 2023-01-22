import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Button(props) {
  return (
    <View style={styles.buttoncontainer}>
      <Pressable
        style={styles.innercontainer}
        android_ripple={{ color: "#600432",borderless:false }}
        onPress={props.handlepress}
      >
        <Text style={styles.buttontext}>{props.children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttoncontainer: {
    margin: 4,
    overflow:'hidden',
    borderRadius: 28,
  },
  innercontainer: {
    backgroundColor: "#72063c",
    borderRadius: 28,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  buttontext: {
    color: "white",
    textAlign: "center",
  },
});
