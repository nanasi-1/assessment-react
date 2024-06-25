import { assessment } from "./assessment";

export const Result = ({name}) => {
  // nameが空のときは空
  if(!name) return null

  const result = assessment(name)

  return (
    <>
      <h2>診断結果</h2> 
      <p className="result-text">{result}</p>
    </>
  )
}
