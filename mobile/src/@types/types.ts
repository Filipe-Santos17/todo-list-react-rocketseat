export type todoType = {
  id: string,
  text: string,
  status: boolean,
}

export type typeInputCreate = {
  textValue: string,
  setText: React.Dispatch<React.SetStateAction<string>>,
  onClickBtn: () => void,
}

export type todoListType = {
  todoValues: todoType[],
  setTodosValue: React.Dispatch<React.SetStateAction<todoType[]>>,
}