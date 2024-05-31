import { useState } from "react";
import { View, StyleSheet } from "react-native"

import InputCreate from "../components/InputCreate";
import ImageHeader from "../components/ImageHeader";
import TodoList from "../components/TodoList";

import { todoType } from "../@types/types";

export default function Home() {
  const [todos, setTodos] = useState<todoType[]>([])
  const [todoText, setTodoText] = useState('')

  function generateRandomId() {
    return Math.random().toString(36).substring(2, 7);
  }

  function handleCreateTodo() {
    const textTodoInput = todoText

    if(textTodoInput !== ''){
      const newTodo: todoType = {
        id: generateRandomId(),
        text: textTodoInput,
        status: false
      }
      
      setTodos(prevTodos => [...prevTodos, newTodo])
      setTodoText('')
    }
  }

  return (
    <View>
      <ImageHeader />
      <View style={styles.containerContent}>
        <InputCreate textValue={todoText} setText={setTodoText} onClickBtn={handleCreateTodo} />
        <TodoList todoValues={todos} setTodosValue={setTodos} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerContent: {
    paddingHorizontal: 24,
    backgroundColor: "#191919",
    height: "100%"
  },
})