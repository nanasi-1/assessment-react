import { NameInput } from "./NameInput";
import { Result } from "./Result";

const App = () => (
  <>
    <h1>あなたのいいところは？</h1>
    <NameInput />
    <Result />
  </>
)

const root = document.getElementById('main')
ReactDOM.createRoot(root).render(<App />)
