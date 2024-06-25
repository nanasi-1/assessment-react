import 'https://unpkg.com/react@18/umd/react.development.js'
import 'https://unpkg.com/react-dom@18/umd/react-dom.development.js'

import { NameInput } from "./NameInput.jsx";
import { Result } from "./Result.jsx";
const { useState } = React

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
