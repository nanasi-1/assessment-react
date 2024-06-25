const NameInputArea = () => {
  return (
    <div className="name-input-area">
      <input type="text" name="name-input" />
      <button>診断する</button>
    </div>
  )
}

export const NameInput = () => {
  return (
    <>
      <p>診断したい名前を入れて下さい</p>
      <NameInputArea />
    </>
  )
}
