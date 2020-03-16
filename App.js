import React, { useState } from 'react';
import { Button, FlatList, View, Text, StyleSheet,Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header'
import ToDoItems from './components/toDoItems'
import AddToDo from './components/addTodo';
let i = 4;
export default function App() {
  const [toDo, setToDo] = useState([
    { name: 'read a book', key: '1' },
    { name: 'watch movie', key: '2' },
    { name: 'check mobile', key: '3' },
    { name: 'learning react native', key: '4' },
  ])

  const pressHandler = (key) => {
    Alert.alert('DELETE!','Do you realy want to delete this?',[
      {text:'nooo', onPress:()=>console.log('closed')},
      {text:'yes', onPress:()=>deleteHandler(key)}
    ])
    
  }

  const deleteHandler = (key) => {
    setToDo((prevState) => prevState.filter(toDo => toDo.key != key))
  }
  const add=(text)=>{
    setToDo((prevTodo) =>
    [
      { name: text, key: (i + 1).toString() },
      ...prevTodo
    ]
  )
  i++;

  }
  const submitHandler = (text) => {
    if (text.length > 3) {
      setToDo((prevTodo) =>
        [
          { name: text, key: (i + 1).toString() },
          ...prevTodo
        ]
      )
      i++;
    }
    else(
Alert.alert('OOPS!','enter more than 3 charecters',[
  {text:'understood', onPress:()=>console.log('closed')},
  {text:'add any way', onPress:()=>add(text)}
])
    )

  }


  return (
<TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddToDo submitHandler={submitHandler} />
        <View style={styles.item}>
          <FlatList data={toDo}
            renderItem={({ item }) => (
              <ToDoItems item={item} pressHandler={pressHandler} />

            )}
          />
        </View>

      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    // alignItems: 'center'
  },
  content: {
    padding: 40,
  },
  item: {
    marginTop: 20,
  },
});
