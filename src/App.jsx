import { NameInput } from "./NameInput";
import { Result } from "./Result";
const { useState } = React

const App = () => {
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
