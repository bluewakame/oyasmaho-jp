import Link from 'next/link';
import { categories } from '@/data/articles';

// 記事一覧で使うカード
export default function ArticleCard({ article }) {
  const category = categories[article.category];
  return (
    <Link href={`/articles/${article.slug}`} className="article-card">
      <span className="article-card__category">{category?.name ?? 'その他'}</span>
      <h3 className="article-card__title">{article.title}</h3>
      <p className="article-card__desc">{article.description}</p>
      <time className="article-card__date" dateTime={article.publishedAt}>
        {article.publishedAt}
      </time>
    </Link>
  );
}
