import { assert } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { assessment } from "../src/assessment.js";

/**
 * チェック用
 * @param {(name: string) => void} func 
 */
const check = (func) => {
  const names = ['太郎', '花子', '名無し']
  for (const name of names) {
    assert(func(name))
  }
}

Deno.test('判定結果はtrustyな文字列である', () => {
  check(name => {
    const result = assessment(name)
    return result && typeof result === 'string'
  })
})

Deno.test('結果には名前が含まれている', () => {
  check(name => assessment(name).includes(name))
})
