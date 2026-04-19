import Link from 'next/link';

export const metadata = { title: 'ページが見つかりません' };

export default function NotFound() {
  return (
    <div className="container">
      <article className="article" style={{ textAlign: 'center' }}>
        <h1>ページが見つかりません</h1>
        <p>お探しのページは、移動または削除された可能性があります。</p>
        <p>
          <Link href="/">トップページに戻る</Link>
        </p>
      </article>
    </div>
  );
}
