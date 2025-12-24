import React, { useState } from "react";
import {
  TextInput,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  
  
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import CheckBox from '@react-native-community/checkbox';

type TodoType = {
  id: number;
  name: string;
  isDone: boolean;
};
const index = () => {
  const [todo, setTodo] = useState<TodoType[]>([
    { id: 1, name: "task 1", isDone: false },
    { id: 2, name: "task 2", isDone: false },
    { id: 3, name: "task 3", isDone: false },
    { id: 4, name: "task 4", isDone: false },
    { id: 5, name: "task 5", isDone: false },
    { id: 6, name: "task 6", isDone: false },
    { id: 7, name: "task 7", isDone: false },
  ]);

  const [text, settext] = useState<string>("");

  const handleAdd = () => {
    if (text.trim() === "") {
      return;
    }

    const newTask: TodoType = {
      id: todo.length + 1,
      name: text,
      isDone: false,
    };

    setTodo([...todo, newTask]);
    settext("");
  };

  const handleDelete = (id:number) => {
      setTodo(todo.filter(item => item.id !== id))
  }

  const handleComplete = (id:number) => { 
   setTodo(todo.map((item) => item.id === id ?  {...item , isDone : !item.isDone} : item))
  }
  return (
    <View>
      <View
        style={{
          marginTop: 50,
          flexDirection: "column",
          gap: 30,
          alignItems: "center",
        }}
      >
        <TextInput
          value={text}
          onChangeText={settext}
          style={{ borderWidth: 1, padding: 10, width: 300 }}
        />

        <TouchableOpacity
          style={{
            backgroundColor: "white",
            width: 80,
            padding: 10,
            borderRadius: 10,
          }}
          onPress={handleAdd}
        >
          <Text>Add Task</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={todo}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <View
            style={{
              backgroundColor: "white",
              marginLeft: 40,
              marginTop: 20,
              width: 300,
              padding: 20,

              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          > <CheckBox value={item.isDone} onValueChange={() => handleComplete(item.id)}></CheckBox>
            <Text style={{textDecorationLine : item.isDone ? "line-through" :  "none"}}>{item.name}</Text>
            <TouchableOpacity onPress={() => handleDelete(item.id)}>
              <Ionicons name="trash" size={30} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default index;
