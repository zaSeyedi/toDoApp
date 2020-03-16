import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>My ToDos</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
      height:80,
      backgroundColor:'coral',
      paddingTop:30
      //justifyContent: 'center',
      // alignItems: 'center'
    },
    title: {
      textAlign:'center',
      color:'#fff',
      fontSize:20,
      fontWeight:'bold',
    },
  });