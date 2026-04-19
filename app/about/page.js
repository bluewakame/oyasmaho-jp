export const metadata = {
  title: 'このサイトについて',
  description: 'おやスマホ.jp の運営方針・コンセプトについて。',
};

export default function AboutPage() {
  return (
    <div className="container">
      <article className="article">
        <h1>このサイトについて</h1>
        <p>
          「おやスマホ.jp」は、離れて暮らす親（60〜80代）のスマホを、子世代（40〜50代）が
          電話やLINEだけで遠隔サポートするための情報サイトです。
        </p>
        <h2>運営方針</h2>
        <ul>
          <li>個人情報を一切お預かりしません（フォーム・ログイン機能なし）</li>
          <li>キャリア公式やNPOが扱う「シニア本人向け」とは違い、「子世代が読んで親を助ける」視点に特化</li>
          <li>難しいIT用語を、電話口で使えるやさしい言葉に翻訳してお届けします</li>
        </ul>
        <h2>運営者について</h2>
        <p>
          個人ブログとして運営しています。お問い合わせは現在受け付けておりません。
          記事内容に関するご指摘は、X（旧Twitter）等で言及いただけると幸いです。
        </p>
      </article>
    </div>
  );
}
