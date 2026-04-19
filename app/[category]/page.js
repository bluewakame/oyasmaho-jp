import { notFound } from 'next/navigation';
import { categories, getArticlesByCategory } from '@/data/articles';
import ArticleCard from '@/components/ArticleCard';

// /line /kishuhen /security /trouble の4つのURLがすべてここで処理されます。
// 未登録のスラッグが来たら404に。

// ビルド時に静的生成するパスを宣言（SSG）
export function generateStaticParams() {
  return Object.values(categories).map((c) => ({ category: c.slug }));
}

// ページごとのメタ情報（SEO）
export function generateMetadata({ params }) {
  const c = categories[params.category];
  if (!c) return {};
  return {
    title: `${c.name}の記事一覧`,
    description: c.description,
  };
}

export default function CategoryPage({ params }) {
  const category = categories[params.category];
  if (!category) notFound();

  const items = getArticlesByCategory(category.slug);

  return (
    <div className="container">
      <section className="hero">
        <h1 className="hero__title">{category.name}</h1>
        <p className="hero__lead">{category.description}</p>
      </section>

      <section className="section">
        <h2 className="section__title">記事一覧</h2>
        {items.length === 0 ? (
          <p>このカテゴリの記事は現在準備中です。お楽しみに。</p>
        ) : (
          <div className="article-list">
            {items.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
