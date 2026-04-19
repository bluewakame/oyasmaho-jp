import Link from 'next/link';

// サイト下部のフッター
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p className="site-footer__about">
          「おやスマホ.jp」は、離れて暮らす親のスマホを、電話とLINEだけで支えるための情報サイトです。
          個人情報は一切お預かりしません。
        </p>
        <ul className="site-footer__links">
          <li><Link href="/about">このサイトについて</Link></li>
          <li><Link href="/privacy">プライバシーポリシー</Link></li>
          <li><Link href="/disclosure">広告・アフィリエイトに関する表示</Link></li>
        </ul>
        <p className="site-footer__copy">© {year} おやスマホ.jp</p>
      </div>
    </footer>
  );
}
