import Link from 'next/link';
import { categories } from '@/data/articles';

// サイト上部のヘッダー（ロゴとナビゲーション）
export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="site-logo">
          おやスマホ<span className="site-logo__tld">.jp</span>
        </Link>
        <nav className="site-nav" aria-label="メインナビゲーション">
          <ul>
            {Object.values(categories).map((c) => (
              <li key={c.slug}>
                <Link href={`/${c.slug}`}>{c.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
