import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Button(props) {
  const handlepress = () => {
    console.log("pressed");
  };
  return (
    <View style={styles.buttoncontainer}>
      <Pressable style={styles.innercontainer} android_ripple={{color:'#600432'}} onPress={handlepress}>
        <Text style={styles.buttontext}>{props.children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  innercontainer: {
    backgroundColor: "#72063c",
    borderRadius: 28,
    paddingHorizontal: 20,
    paddingVertical: 8,
    margin: 4,
  },
  buttontext: {
    color:'white',
    textAlign: "center",
  },
});
