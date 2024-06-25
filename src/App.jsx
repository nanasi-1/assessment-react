import React, { useState } from 'https://esm.sh/react@18.3.1'
import ReactDOM from 'https://esm.sh/react-dom@18.3.1'

import { NameInput } from "./NameInput";
import { Result } from "./Result";

export const App = () => {
  const [name, setName] = useState('')

  return (
    <>
      <h1>あなたのいいところは？</h1>
      <NameInput setName={setName} />
      <Result name={name} />
    </>
  )
}

const root = document.getElementById('main')
ReactDOM.createRoot(root).render(<App />)
