import { ImageBackground, StyleSheet } from "react-native";
import Gamestart from "./screens/Gamestart";
import { LinearGradient } from "expo-linear-gradient";
export default function App() {
  return (
    <LinearGradient style={styles.root} colors={["#4e0329", "#edc43f"]}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        style={styles.root}
        resizeMode={'cover'}
        imageStyle={styles.imageStyle}
      >
        <Gamestart />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  imageStyle:{
    opacity:0.12,
  }
});
