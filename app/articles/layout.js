// 記事ページ全体を囲むレイアウト。
// .article クラスのカードの中に、各記事のMDX内容が表示されます。
export default function ArticleLayout({ children }) {
  return (
    <div className="container">
      <article className="article">{children}</article>
    </div>
  );
}
