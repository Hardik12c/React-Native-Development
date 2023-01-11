import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import Goalinput from "./component/Goalinput";
import Goalitem from "./component/Goalitem";

export default function App() {
  const [text, settext] = useState("");
  const [goals, setgoals] = useState([]);
  const changetext = (e) => {
    settext(e);
  };

  const addgoal = () => {
    setgoals((currentgoals) => [
      ...currentgoals,
      { text: text, id: Math.random().toString() },
    ]);
    settext("");
  };
  const deletegoal = (id) => {
    setgoals((goals) => {
      return goals.filter((goal) => goal.id!==id);
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Goalinput text={text} changetext={changetext} goaladd={addgoal} />
      <View style={styles.goalcontainer}>
        <FlatList
          data={goals}
          renderItem={(goaldata) => {
            return <Goalitem item={goaldata.item} Ondeletegoal={deletegoal} />;
          }}
          keyExtractor={(item) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalcontainer: {
    flex: 3,
  },
});
