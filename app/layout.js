import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import AdSense from '@/components/AdSense';
import './globals.css';

// サイト全体のメタ情報。タイトル/説明はSEOで重要。
export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'おやスマホ.jp | 離れて暮らす親のスマホを電話で支えるサイト',
    template: '%s | おやスマホ.jp',
  },
  description:
    '40〜50代の子世代が、60〜80代の親のスマホを電話とLINEで遠隔サポートするための情報サイト。LINE設定・機種変更・詐欺対策・日常トラブルを、電話口で伝えやすい言葉でまとめています。',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: 'おやスマホ.jp',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <GoogleAnalytics />
        <AdSense />
        <Header />
        <main className="site-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
