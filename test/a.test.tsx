// await import("npm:global-jsdom/register");
import { App } from "../src/App.jsx";
const { expect } = await import("https://deno.land/std@0.211.0/expect/expect.ts");
const { render } = await import('npm:@testing-library/react');

Deno.test('Hello World!', () => {
  console.log('Hi, Deno Test!')
  expect(1 + 1).toBe(2)
})

Deno.test('React Test', () => {
  render(<App />)
})
