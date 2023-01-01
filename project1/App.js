import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.maintext}>
        <Text style={styles.textcolor}>Hey this is my first react native app</Text>
      </View>
      <Text>Hello World welcome to react native</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext:{
    borderWidth: 2,
    padding:10,
    borderColor:'red',
    backgroundColor:'blue',
  },
  textcolor:{
    color:'white',
  }
});
