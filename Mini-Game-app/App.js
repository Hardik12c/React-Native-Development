import { ImageBackground, StyleSheet } from "react-native";
import Gamestart from "./screens/Gamestart";
import Gamescreen from "./screens/Gamescreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
export default function App() {
  const [userpickednumber, setuserpickednumber] = useState(null)
  const pickednumberhandler=(pickednumber)=>{
    setuserpickednumber(pickednumber);
  }
  return (
    <LinearGradient style={styles.root} colors={["#4e0329", "#edc43f"]}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        style={styles.root}
        resizeMode={'cover'}
        imageStyle={styles.imageStyle}
      >
        {userpickednumber?<Gamescreen/>:<Gamestart screenupdate={pickednumberhandler}/>}
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
