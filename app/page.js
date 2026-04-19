import Link from 'next/link';
import { categories, getPublishedArticles } from '@/data/articles';
import ArticleCard from '@/components/ArticleCard';

// トップページ
export default function HomePage() {
  const latestArticles = getPublishedArticles().slice(0, 6);

  return (
    <div className="container">
      <section className="hero">
        <h1 className="hero__title">
          離れて暮らす親のスマホを、<br />
          電話とLINEで支える情報サイト
        </h1>
        <p className="hero__lead">
          40〜50代の子世代向けに、親（60〜80代）のスマホ操作を電話口でサポートするための
          手順・言葉・トラブル対処をまとめています。難しい用語はやさしく翻訳してお届けします。
        </p>
      </section>

      <section className="section">
        <h2 className="section__title">カテゴリから探す</h2>
        <div className="category-grid">
          {Object.values(categories).map((c) => (
            <Link key={c.slug} href={`/${c.slug}`} className="category-card">
              <p className="category-card__name">{c.name}</p>
              <p className="category-card__desc">{c.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">新着記事</h2>
        {latestArticles.length === 0 ? (
          <p>まだ記事がありません。</p>
        ) : (
          <div className="article-list">
            {latestArticles.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
