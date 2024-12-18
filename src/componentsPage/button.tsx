const MyButton = ({count, onClick} : {count: number, onClick: () => void}) => {
  return(
    <button onClick={onClick}>
      botao clicado {count} vezes
    </button>
  )
}

export default MyButton