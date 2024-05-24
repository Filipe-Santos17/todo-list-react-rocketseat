import { useEffect, useState } from "react";

import CheckIcon from "../assets/check.png"
import TrashIcon from "../assets/icon-trash.png"
import ListEmpty from "../assets/list-empty.png"

export type todoType = {
  id: string,
  text: string,
  status: boolean,
}

export type todoListType = {
  todoValues: todoType[],
  setTodosValue: React.Dispatch<React.SetStateAction<todoType[]>>,
}

export default function TodoList({ todoValues, setTodosValue }: todoListType) {

  const [numbers, setNumbers] = useState({
    done: 0,
    created: 0
  })

  useEffect(() => {
    function contNum() {
      const numCreated = todoValues.length
      const numDone = todoValues.filter(item => item.status === true).length

      setNumbers({
        created: numCreated,
        done: numDone,
      })
    }

    contNum()
  }, [todoValues])


  function handleDeleteTodo(todoTrash: string) {
    return setTodosValue(prevTodos => {
      return prevTodos.filter(todo => {
        return todo.id !== todoTrash
      })
    })
  }

  function handleChangeTodoStatus(todoId: string) {
    return setTodosValue(prevTodos => {
      return prevTodos.map(item => {
        if (item.id === todoId) {
          return { ...item, status: !item.status }
        } else {
          return item
        }
      })
    })
  }

  return (
    <section className="flex flex-col gap-5">
      <hgroup className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <p className="text-xs font-bold text-[#4EA8DE]">Tarefas criadas</p>
          <p className="rounded-full bg-[#333] text-[#FFF] p-1 w-6 h-6 flex items-center justify-center text-sm">
            {numbers.created}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-xs font-bold text-[#8284FA]">Concluídas</p>
          <p className="rounded-full bg-[#333] text-[#FFF] p-1 w-6 h-6 flex items-center justify-center text-sm">
            {numbers.done}
          </p>
        </div>
      </hgroup>
      <div className="w-full h-full max-h-[300px] overflow-auto">
        {
          todoValues.length !== 0 ? (
            todoValues.map(todo => (
              <div className="flex-1 p-3 gap-2 flex items-center justify-between rounded-lg border border-[#333] bg-[#262626] mb-2 py-5" key={todo.id}>
                <button
                  className=" w-[18px] h-[18px] rounded-2xl border justify-center items-center border-[#4ea8de]" onClick={() => handleChangeTodoStatus(todo.id)}
                >
                  {todo.status ?
                    <div className="bg-[#585ABD] rounded-full">
                      <img src={CheckIcon} />
                    </div>
                    : <div />
                  }
                </button>
                <p className={`text-[#F2F2F2] text-sm font-normal max-w-[90%] ${todo.status ? "line-through text-[#808080]" : ''}`}>
                  {todo.text}
                </p>
                <button onClick={() => handleDeleteTodo(todo.id)}>
                  <img src={TrashIcon} />
                </button>
              </div>
            ))
          ) : (
            <div className="border-t border-t-[#333] flex flex-col gap-4 items-center py-5 px-16">
              <div>
                <img src={ListEmpty} />
              </div>
              <div>
                <p className="text-[#808080] text-center text-sm font-bold">
                  You don't have tasks registered yet
                </p>
                <p className="text-[#808080] text-center text-sm font-normal">
                  Create tasks and organize your to-do items
                </p>
              </div>
            </div>
          )}
      </div>
    </section>
  )
}
    //box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);
