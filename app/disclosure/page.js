export const metadata = {
  title: '広告・アフィリエイトに関する表示',
  description: '当サイトの広告・アフィリエイトに関する開示。',
};

export default function DisclosurePage() {
  return (
    <div className="container">
      <article className="article">
        <h1>広告・アフィリエイトに関する表示</h1>
        <p>
          当サイト（おやスマホ.jp）の記事内には、広告（PR）が含まれます。
        </p>
        <p>
          記事内の一部リンクはアフィリエイトリンクであり、リンク経由で商品・サービスが
          購入・契約された場合、運営者に紹介料が支払われます。
        </p>
        <p>
          ただし、当サイトでは紹介料の有無にかかわらず、編集者が実際に有用と判断したものだけを
          紹介する方針としています。
        </p>
      </article>
    </div>
  );
}
