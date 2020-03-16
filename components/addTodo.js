import React, { useState } from 'react';
import { TextInput, Text, StyleSheet, View, Button } from 'react-native';

export default function AddToDo({submitHandler}) {
    const [text, setText] = useState('')
    const changeHandler = (val) => {
        setText(val);
    }
    return (
        <View>
            <TextInput style={styles.input} placeholder='enter new todo' onChangeText={changeHandler} />
            <Button color='coral' title='Add todo' onPress={()=>submitHandler(text)}/>
        </View>

    )
}
const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb'
    }
});
