import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ToDoItems({ item, pressHandler }) {
    return (

        <View style={styles.container}>
            <TouchableOpacity onPress={() => pressHandler(item.key)}>
                <Icon name="delete" />
            </TouchableOpacity>
            <Text style={{ marginLeft: 10 }}>{item.name}</Text>
        </View>



    )

}
const styles = StyleSheet.create({
    container: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderStyle: 'dashed',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
    }
});
