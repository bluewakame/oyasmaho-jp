export const metadata = {
  title: 'プライバシーポリシー',
  description: 'おやスマホ.jp のプライバシーポリシー。',
};

export default function PrivacyPage() {
  return (
    <div className="container">
      <article className="article">
        <h1>プライバシーポリシー</h1>
        <p>当サイト（おやスマホ.jp）は、利用者の個人情報を一切収集しません。</p>

        <h2>アクセス解析ツールについて</h2>
        <p>
          当サイトでは、サイトの改善のため Google アナリティクスを利用しています。
          Google アナリティクスは、トラフィックデータの収集のために Cookie を使用しています。
          このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
          詳しくは <a href="https://policies.google.com/technologies/partner-sites?hl=ja" target="_blank" rel="noreferrer">Google のポリシー</a> をご確認ください。
        </p>

        <h2>広告配信について</h2>
        <p>
          当サイトでは第三者配信の広告サービス（Google AdSense 等）を利用予定です。
          このような広告配信事業者は、利用者の興味に応じた商品やサービスの広告を表示するため、
          当サイトや他サイトへのアクセスに関する情報を Cookie 等で取得することがあります。
        </p>

        <h2>アフィリエイトプログラムについて</h2>
        <p>
          当サイトはアフィリエイトプログラム（A8.net 等）に参加しています。
          サイト内のリンクから商品・サービスを購入された場合、運営者に紹介料が支払われます。
          ただし、それによって商品価格が変わることはありません。
        </p>

        <h2>免責事項</h2>
        <p>
          当サイトの情報は、執筆時点での情報に基づいています。
          実際のサービスや料金、操作画面はご利用時点で異なる可能性があるため、
          最終的な判断はご自身の責任にてお願いいたします。
        </p>
      </article>
    </div>
  );
}
