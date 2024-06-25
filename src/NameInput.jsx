const { useRef } = React

const NameInputArea = ({setName}) => {
  const inputElem = useRef(null)

  const handleClick = () => {
    setName(inputElem.current.value)
  }

  return (
    <div className="name-input-area">
      <input type="text" name="name-input" ref={inputElem} />
      <button onClick={handleClick}>診断する</button>
    </div>
  )
}

export const NameInput = ({setName}) => {
  return (
    <>
      <p>診断したい名前を入れて下さい</p>
      <NameInputArea setName={setName} />
    </>
  )
}
