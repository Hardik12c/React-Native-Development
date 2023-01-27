import { StyleSheet, View } from "react-native";

export default function Card({ children }) {
  return <View style={styles.inputcontainer}>{children}</View>;
}

const styles = StyleSheet.create({
  inputcontainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 24,
    borderRadius: 8,
    marginTop: 40,
    padding: 6,
    backgroundColor: "#3b0421",
    elevation: 10,
    shadowColor: "#000000",
    shadowOffset: { width: 20, height: 50 },
    shadowRadius: 25,
    shadowOpacity: 1,
  },
});
