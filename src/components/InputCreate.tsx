import BtnAdd from "../assets/btn-plus.png"

export type typeInputCreate = {
  textValue: string,
  setText: React.Dispatch<React.SetStateAction<string>>,
  onClickBtn: () => void,
}

export default function InputCreate({ textValue, setText, onClickBtn }: typeInputCreate) {
  return (
    <div className="flex w-full items-center gap-1 -mt-8">
      <input type="text" placeholder="Adicione uma nova tarefa"
        className="flex-1 border border-[#0D0D0D] h-14 p-4 rounded-md text-[#F2F2F2] placeholder:text-[#808080] bg-[#262626]"
        value={textValue}
        onChange={e => setText(e.target.value)}
      />
      <button className="h-[52px] w-full max-w-[90px] flex items-center justify-center gap-2 text-[#FFF] rounded-md bg-[#1E6F9F]" onClick={onClickBtn}>
        <p>Criar</p>
        <img src={BtnAdd}  className="w-4 h-4"/>
      </button>
    </div>
  )
}

