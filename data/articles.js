// 記事一覧のメタデータ。
// 記事を追加するときは、ここに1つオブジェクトを足して、
// app/articles/<slug>/page.mdx を作るだけでOK。

export const categories = {
  line: {
    slug: 'line',
    name: 'LINEサポート',
    description: '親のLINE設定やビデオ通話の使い方を、電話口で伝えるためのガイド。',
  },
  kishuhen: {
    slug: 'kishuhen',
    name: '機種変更・乗り換え',
    description: 'らくらくフォンからiPhone、キャリアから格安SIMなど、親の乗り換えを助ける手順。',
  },
  security: {
    slug: 'security',
    name: 'セキュリティ・詐欺対策',
    description: '迷惑電話ブロック、フィッシング詐欺、架空請求SMSから親を守る設定と説明の仕方。',
  },
  trouble: {
    slug: 'trouble',
    name: '日常トラブル対応',
    description: '「重い」「電池がすぐ減る」「画面が真っ暗」を電話口で解決するための手順書。',
  },
};

// 公開する記事のリスト（新しい順に並べる）
export const articles = [
  {
    slug: 'line-video-call',
    title: 'LINEビデオ通話を親に設定させる方法【電話口で伝える手順書】',
    description:
      '離れて暮らす親に、LINEのビデオ通話を電話口だけで設定してもらうための具体的な言葉と手順をまとめました。',
    category: 'line',
    publishedAt: '2026-04-19',
    // 記事の下書き中は draft: true にしておくと一覧に出ません（後で実装例を示します）
    draft: false,
  },
  // --- 以下は今後書く記事のひな形（draft: true のあいだは表示されません） ---
  {
    slug: 'docomo-to-mvno',
    title: 'ドコモ→格安SIM、親を乗り換えさせる前に確認すること10選',
    description:
      '親をキャリアから格安SIMに乗り換えさせる前にチェックすべき10項目。家族割やキャリアメール、見守りサービスの扱いまで。',
    category: 'kishuhen',
    publishedAt: '2026-04-25',
    draft: true,
  },
  {
    slug: 'spam-call-block',
    title: '親のスマホに迷惑電話ブロックを設定する【iPhone・Android別】',
    description:
      '詐欺電話から親を守るため、iPhoneとAndroidそれぞれで迷惑電話ブロックを設定する手順を、電話口で伝えられるように解説。',
    category: 'security',
    publishedAt: '2026-05-01',
    draft: true,
  },
];

// 公開済みのみ取り出すヘルパー関数
export function getPublishedArticles() {
  return articles
    .filter((a) => !a.draft)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

// 特定カテゴリの公開済み記事を取り出す
export function getArticlesByCategory(categorySlug) {
  return getPublishedArticles().filter((a) => a.category === categorySlug);
}
