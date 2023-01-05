import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,TextInput,Button} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flexcontainer}>
        <TextInput style={styles.textinputstyle} placeholder='Enter text here...'/>
        <Button title='ADD'/>
      </View>
      <View>
        <Text>
            your Goals are here
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:50,
  },
  flexcontainer:{
    flexDirection:'row',
  },
  textinputstyle:{
    borderWidth:1,
    borderColor:'blue',
    width:'80%',
    backgroundColor:'#cccccc',
  }
});
