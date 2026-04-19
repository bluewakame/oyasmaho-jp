import Script from 'next/script';

// Google AdSense の読み込みタグ。
// .env.local の NEXT_PUBLIC_ADSENSE_CLIENT が空なら何も出力しません。
// ※AdSenseの審査に通ってから設定してください。
export default function AdSense() {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  if (!client) return null;

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
