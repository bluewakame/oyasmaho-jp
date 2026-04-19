// Next.jsの設定ファイル
// MDX（Markdown + JSX）を記事として使えるようにする設定が入っています。
import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // .mdx ファイルをページとして扱えるようにする
  pageExtensions: ['js', 'jsx', 'mdx'],
  reactStrictMode: true,
};

const withMDX = createMDX({
  // 追加のMDX拡張が必要になったらここに書く
});

export default withMDX(nextConfig);
