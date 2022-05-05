import React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function AddTodo({submitHandler}) {
    const [text,setText] = React.useState('');
    return(
        <View onPress={()=>pressHandler(item.key)}>
            <TextInput
            placeholder="new todo..."
            onChangeText={(text)=>setText(text)}
            style={styles.input}/>  
            <Button title="add todo" onPress={()=>submitHandler(text)} color='coral' />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        paddingHorizontal:8,
        paddingVertical:6,
        marginBottom:16,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    }
});