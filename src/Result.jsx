import { assessment } from "./assessment";

export const Result = ({name}) => {
  const result = name
  ? assessment(name)
  : ''

  return (
    <>
      <p>こちらは結果エリア</p>
      <p>{result}</p>
    </>
  )
}
