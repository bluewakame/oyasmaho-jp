// MDX記事の中で使うHTMLタグをカスタマイズしたいときに編集する場所。
// 今は「そのまま使う」だけにしています。
export function useMDXComponents(components) {
  return {
    ...components,
  };
}
