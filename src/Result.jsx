import { assessment } from "./assessment";
import { TweetButton } from "./TweetButton";

export const Result = ({name}) => {
  // nameが空のときは空
  if(!name) return null

  const result = assessment(name)

  return (
    <>
      <h2 className="result-title">診断結果</h2> 
      <p className="result-text">{result}</p>
      <TweetButton hashtag={'あなたのいいところ'} />
    </>
  )
}
