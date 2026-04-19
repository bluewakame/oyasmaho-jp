# おやスマホ.jp

離れて暮らす親のスマホを、電話とLINEで遠隔サポートするための情報サイト（雛形）。

このREADMEは **プログラミング超初心者向け** に、ゼロからサイトを公開するところまでを手順書として書いています。読み飛ばさず、上から順にやっていけばOKです。

---

## このプロジェクトで使っているもの

- **Next.js（バージョン14）** … ページの作成に使うフレームワーク（＝道具セット）
- **MDX** … Markdown（マークダウン）で記事を書けるようにする仕組み
- **Vercel** … 作ったサイトを無料で世界に公開してくれるサービス

個人情報は一切扱わないので、データベースやログイン機能は入っていません。

---

## 0. 準備するもの（最初の1回だけ）

以下の3つは、まだなければインストールしておいてください。

1. **Node.js（ノード・ジェイエス）**
   - [公式サイト](https://nodejs.org/ja) から「LTS（推奨版）」のインストーラをダウンロードして入れてください。
   - インストール後、ターミナル（Mac: ターミナル / Windows: PowerShell）を開いて `node -v` と打って、バージョン番号（例: `v20.x.x`）が出ればOK。
2. **Git（ギット）**
   - [公式サイト](https://git-scm.com/) からダウンロードしてインストール。
3. **GitHubアカウント**
   - [https://github.com](https://github.com) で無料登録。
4. **Vercelアカウント**
   - [https://vercel.com](https://vercel.com) で「Continue with GitHub」を選んで無料登録。

> ターミナルって何？　と思った方は「Mac ターミナル 使い方」「Windows PowerShell 使い方」で検索してください。最初は「黒い画面に文字を打つだけの道具」とだけ理解すれば十分です。

---

## 1. プロジェクトをパソコンに置く

1. このフォルダ（`oyasmaho-jp`）を、わかりやすい場所（例：`ドキュメント` の中）に置いてください。
2. ターミナルを開き、そのフォルダに移動します。
   ```bash
   cd ~/Documents/oyasmaho-jp
   ```
   （Windowsの場合は `cd C:\Users\あなたの名前\Documents\oyasmaho-jp`）

## 2. 必要なパッケージをインストールする

ターミナルで次のコマンドを実行します（数分かかります）。

```bash
npm install
```

`node_modules` というフォルダが自動で作られます。これは中身を触る必要はありません。

## 3. ローカル（自分のパソコン）でサイトを見てみる

```bash
npm run dev
```

しばらくすると `http://localhost:3000` と表示されます。
ブラウザで [http://localhost:3000](http://localhost:3000) を開くと、サイトが表示されます。

止めるときはターミナルで **Ctrl + C**（Macでも Ctrl、Cmdではない）。

## 4. 環境変数ファイルを作る

サイトのURLや計測タグなどの設定は `.env.local` というファイルにまとめます。

1. `.env.local.example` を同じ場所にコピーして、名前を `.env.local` に変更します。
2. 中身を開き、必要に応じて書き換えます（最初は空のままでもOK）。

```
NEXT_PUBLIC_SITE_URL=https://example.com
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_ADSENSE_CLIENT=
```

## 5. GitHubにアップロードする

最初の1回だけ必要です。

1. [https://github.com/new](https://github.com/new) にアクセス
2. リポジトリ名に `oyasmaho-jp` と入力 → **Create repository** を押す
3. 表示されたページの「…or push an existing repository…」のコマンドを、ターミナルで実行：

   ```bash
   git init
   git add .
   git commit -m "first commit"
   git branch -M main
   git remote add origin https://github.com/あなたのユーザー名/oyasmaho-jp.git
   git push -u origin main
   ```

## 6. Vercelで公開する

1. [https://vercel.com/new](https://vercel.com/new) にアクセス
2. GitHubで作った `oyasmaho-jp` リポジトリを **Import**
3. 途中の **Environment Variables（環境変数）** で、`.env.local` と同じキー・値を入力
   （`NEXT_PUBLIC_SITE_URL` は、あとで Vercel のURLに書き換えます）
4. **Deploy** を押す → 2〜3分で公開URLが出ます
5. 公開後、Vercel管理画面の **Settings → Environment Variables** で `NEXT_PUBLIC_SITE_URL` を
   実際のURL（例 `https://oyasmaho-jp.vercel.app`）に更新して、再デプロイします

おめでとうございます。これでサイトが世界に公開されました。

---

## 記事を新しく追加する方法

1. `data/articles.js` を開き、`articles` の配列に新しいオブジェクトを追加します。
   ```js
   {
     slug: 'my-new-article',             // URLの一部。半角英数とハイフンのみ。
     title: '記事のタイトル',
     description: '検索結果に出る説明文（120文字程度）',
     category: 'line',                   // line / kishuhen / security / trouble
     publishedAt: '2026-05-01',
     draft: false,                       // true の間は一覧に出ません
   }
   ```
2. `app/articles/my-new-article/page.mdx` を作ります。
   既存の `app/articles/line-video-call/page.mdx` をコピーして、中身を書き換えるのが早いです。
3. `npm run dev` で起動中なら、自動で変更が反映されます。
4. 問題なければ、GitHubにpushすれば自動でVercelに反映されます。
   ```bash
   git add .
   git commit -m "記事追加：◯◯"
   git push
   ```

## アフィリエイトリンクを貼る方法

MDX（記事ファイル）内で普通のMarkdownリンクを書けばOKです。

```md
詳しくは[こちらの公式ページ](https://example-affiliate-link)をご覧ください。
```

ボタン風に目立たせたい場合は `cta` クラスを付けます：

```md
<a className="cta" href="https://example-affiliate-link" rel="sponsored noopener" target="_blank">
  格安SIMを見てみる
</a>
```

- `rel="sponsored noopener"` は **アフィリエイトリンクには必ず付けてください**（Googleのガイドライン）。

## Google Analytics / AdSense を有効にする

1. Google Analyticsの測定ID（`G-XXXXXXXXXX`）を取得
2. Vercel の Environment Variables に `NEXT_PUBLIC_GA_ID` として登録
3. 再デプロイすると自動で計測タグが入ります

AdSense も同様に、審査通過後に `NEXT_PUBLIC_ADSENSE_CLIENT` に `ca-pub-XXXXXXXXXXXXXXXX` を入れて再デプロイ。

---

## よくあるトラブル

| 症状 | 対処 |
|------|------|
| `npm: command not found` | Node.jsが入っていない。手順0からやり直す。 |
| ローカルで画面が真っ白 | ターミナルのエラーメッセージを上から読む。ほとんどは「ファイル名のtypo」が原因。 |
| Vercelでビルドエラー | Vercelの画面のログを見る。`npm run build` を手元で試すと同じエラーが再現できる。 |

---

## フォルダ構成メモ

```
oyasmaho-jp/
├── app/                      # ページの本体（この中のフォルダ名がそのままURLになります）
│   ├── layout.js             # サイト全体の枠組み（ヘッダー/フッター）
│   ├── page.js               # トップページ
│   ├── globals.css           # 全ページに効くCSS
│   ├── sitemap.js            # /sitemap.xml を自動生成
│   ├── robots.js             # /robots.txt を自動生成
│   ├── [category]/page.js    # /line /kishuhen /security /trouble を1ファイルで処理
│   ├── articles/
│   │   ├── layout.js         # 記事ページ共通の枠
│   │   └── <slug>/page.mdx   # 記事本体（Markdown）
│   ├── about/                # このサイトについて
│   ├── privacy/              # プライバシーポリシー
│   └── disclosure/           # 広告・アフィリに関する表示
├── components/               # 再利用する部品（ヘッダー、カード等）
├── data/articles.js          # 記事の一覧データ（ここに書くだけで一覧に出る）
├── public/                   # 画像などの静的ファイルを置く場所
├── mdx-components.js         # MDXのカスタマイズ
├── next.config.mjs           # Next.jsの設定
└── package.json              # プロジェクトの情報と依存パッケージ
```

---

## ライセンス

個人利用を想定した雛形です。好きに改造して使ってください。
