const { useRef } = React

const NameInputArea = ({setName}) => {
  const inputElem = useRef(null)

  const handleClick = () => {
    const newName = inputElem.current.value
    if(!newName) return
    setName(newName)
  }

  const handleKeyDown = e => {
    if(e.code !== 'Enter') return
    handleClick()
  }

  return (
    <div className="name-input-area">
      <input type="text" name="name-input" ref={inputElem} onKeyDown={handleKeyDown} />
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
