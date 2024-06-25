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


## 補足

* Reactのテストは無理、`Deno.test`でいける範囲ならいける
* TypeScriptは無理、Denoの拡張機能がバグってる
  * 基本的な型補完は効くからなんとかなると思う
* Viteの設定はできない


### 補足: 環境構築について

この度色々と試しました。
その結果判明したことが上の2点以外にもあります。

ということで、現在このいいところ診断で使われている設定をメモしておきます。

* * *

まず、ここではVSCodeの拡張機能であるDenoを使って**いません**。

いや実は、この拡張機能を使えば、補完がいい感じになるんですよ。
でも補完なくてもどうにかなるし、ちょっと拡張機能自体が不安定なのがなぁ...

性能がとんでもなく良くなれば、もしくは悪いイメージが払拭されればまた使うかもしれません。

* * *

`deno.json`の中身はこちらです。

```json
{
  "tasks": {
    "dev": "deno run -A npm:vite",
    "build": "deno run -A npm:vite build"
  }
}
```

`tasks`ではDenoのタスクランナーの設定をしています。
これによって`deno task dev`などのコマンドが使えるようになります。

前はここに`compilerPotions`がありましたが、Denoの拡張機能がないならば要りません。
