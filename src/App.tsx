import { useState, useEffect } from "react";

import InputCreate from "./components/InputCreate";
import ImageHeader from "./components/BlackBox";
import TodoList from "./components/TodoList";

export type todoType = {
  id: string,
  text: string,
  status: boolean,
}

export default function App() {
  const [todos, setTodos] = useState<todoType[]>([])
  const [todoText, setTodoText] = useState('')

  function generateRandomId() {
    return Math.random().toString(36).substring(2, 7);
  }

  useEffect(() => {
    document.title="Todo Rocket"
  },[])

  function handleCreateTodo() {
    const textTodoInput = todoText

    if (textTodoInput !== '') {
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
    <div className="w-full h-screen flex flex-col items-center justify-center bg-[#191919]">
      <ImageHeader />
      <div className="bg-[#191919] h-full max-w-[736px] w-full flex flex-col gap-12">
        <InputCreate textValue={todoText} setText={setTodoText} onClickBtn={handleCreateTodo} />
        <TodoList todoValues={todos} setTodosValue={setTodos} />
      </div>
    </div>
  )
}