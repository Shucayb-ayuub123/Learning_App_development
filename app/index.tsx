import React, { useState } from "react";
import { View, Text, FlatList, Button, TouchableOpacity , TextInput } from "react-native";
type TodoType = {
  id: number;
  name: string;
  isDone: boolean;
};
function index() {
  const [todo, setTodos] = useState<TodoType[]>([
    {
      id: 1,
      name: "created ui",
      isDone: false,
    },
    {
      id: 2,
      name: "created ui",
      isDone: false,
    },
    {
      id: 3,
      name: "created ui",
      isDone: false,
    },
    {
      id: 4,
      name: "created ui",
      isDone: false,
    },
  ]);

  const [Text , setText] = useState<string>()

  const handleMark = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        return todo.id == id ? { ...todo, isDone: !todo.isDone } : todo;
      })
    );
  };

  const handleAddone = () => {
    setText(prev => [...prev , {id:Date.now() , name:text , isDone:false}])
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
      }}
    >
      <TextInput placeholder="Enter the tacks" value={todo.name} onChangeText={(value) => setTodos({ ...todo, name: value })}/>
      <FlatList
        data={todo}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 13,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "white",
              margin: 10,
              width: 300,
            }}
          >
            <Text style={{ textDecorationLine : item.isDone ? "line-through" : ""}}>{item.name}</Text>
            <TouchableOpacity onPress={() => handleMark(item.id)} style={{}}>
              <Text>Mark</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

export default index;
