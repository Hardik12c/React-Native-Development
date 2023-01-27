import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import Gamestart from "./screens/Gamestart";
import Gamescreen from "./screens/Gamescreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Gameover from "./screens/Gameover";


export default function App() {
  const [gameover, setgameover] = useState(false);
  const [userpickednumber, setuserpickednumber] = useState(null);
  const pickednumberhandler = (pickednumber) => {
    setuserpickednumber(pickednumber);
  };
  const gameoverhandler=()=>{
    setgameover(true);
  }
  return (
    <LinearGradient style={styles.root} colors={["#4e0329", "#edc43f"]}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        style={styles.root}
        resizeMode={"cover"}
        imageStyle={styles.imageStyle}
      >
        <SafeAreaView style={styles.root}>
          {/* {gameover ? ( */}
            <Gameover />
          {/* ) : 
          (userpickednumber ? (
            <Gamescreen Ongameover={gameoverhandler} userenterednumber={userpickednumber} />
          ) : (
            <Gamestart screenupdate={pickednumberhandler} />
          ))} */}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  imageStyle: {
    opacity: 0.12,
  },
});
