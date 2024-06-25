// ツイートボタンっぽい何か
// なんとなくXのボタン使うの嫌だったっていうのと、
// X見れないから確認できないのが気に食わなかった

export const TweetButton = ({hashtag}) => {
  const encodedHashtag = encodeURIComponent(hashtag)
  const href = `https://x.com/intent/tweet?button_hashtag=${encodedHashtag}&ref_src=twsrc%5Etfw`

  return (
    <a href={href}>
      <button className="twitter-hashtag-button">
        #{hashtag} をツイート
      </button>
    </a>
  )
}
