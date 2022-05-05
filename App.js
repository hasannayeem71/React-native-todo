import React from "react";
import {
  Alert,
  FlatList,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from "react-native";
import AddTodo from "./components/addTodo";
import Header from "./components/header";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todo, setTodo] = React.useState([
    { text: "buy coffee", key: "1" },
    { text: "buy milk", key: "2" },
    { text: "buy bread", key: "3" },
  ]);
  const pressHandler = (key) => {
    setTodo((prevTodo) => {
      return prevTodo.filter((item) => item.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodo((prevTodo) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodo];
      });
    } else {
      Alert.alert("Oops", "Todo must be over 3 characters long.", [
        { text: "okay", style: "cancel" },
      ]);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todo}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
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
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,

    flex: 1,
  },
});
