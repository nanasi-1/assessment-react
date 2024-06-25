import answers from "./answers.json" assert {type: "json"};

/** 
 * 名前からいいところを判定する 
 * @param {string} name
 * @returns {string} 診断結果
 */
export const assessment = (name) => {
  // 文字コードの和を求める
  const charCodes = [...name].map(str => str.charCodeAt())
  const sumOfCharCode = charCodes.reduce((p, c) => p + c, 0)

  // 和からインデックスを決める
  const index = sumOfCharCode % answers.length
  const result = answers[index].replaceAll('###userName###', name)

  return result
}
