# いいところ診断


## 概要

N予備校のWebアプリケーション開発コース1で作る、いいところ診断。
もちろんReactやJSXなんてやらないので、このWebアプリはバニラJSで作られる。

ということでReact + Viteを使っていいところ診断を作ります。


## Get Started

Install Homebrew & **Deno**:

```sh
brew install deno
```

Start a dev server with **Vite**:

```sh
deno task dev

# or

deno run -A npm:vite
```

Open http://localhost:5173.

...英語でも書けるって、どんだけ短いんだこのステップ。


## Build

Build with Vite:

```sh
deno task build

# or

deno run -A npm:vite build
```

...あとはパスの解決して`type="module"`消して`crossorigin`消せば終わりだよ（諦めた）
