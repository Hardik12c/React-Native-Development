import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import Button from '../components/Button'

export default function Gamestart() {
  return (
    <View style={styles.inputcontainer}>
        <TextInput/>
        <Button>Reset</Button>
        <Button>Confirm</Button>
    </View>
  )
}

const styles=StyleSheet.create({
    inputcontainer:{
        marginHorizontal:24,
        borderRadius:8,
        marginTop:100,
        padding:6,
        backgroundColor:'#72063c',
        elevation:10,
        shadowColor:'green',
        shadowOffset:{width:20,height:50},
        shadowRadius:25,
        shadowOpacity:1,
    }
})