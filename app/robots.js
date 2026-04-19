// /robots.txt を自動生成します。
// 検索エンジンに「ここをクロールしていいよ」と伝える役割。
export default function robots() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${base}/sitemap.xml`,
  };
}
