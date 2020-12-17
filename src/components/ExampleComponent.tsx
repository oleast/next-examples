import { FC } from 'react';
import Link from 'next/link';
import { Article } from 'src/articles';

import styles from './ExampleComponent.module.scss';

interface Props {
  article: Article;
}

export const ExampleComponent: FC<Props> = ({ article }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Christmas articles</h1>
      </header>
      <main className={styles.main}>
        <img className={styles.img} src={article.imageSrc}></img>
        <h2>{article.title}</h2>
        <p>{article.content}</p>
        <div className={styles.links}>
          <Link href={`/articles/${article.id}/dynamic-csr`}>
            <a>Go to dynamic page with client-side rendering</a>
          </Link>
          <Link href={`/articles/${article.id}/static-ssg`}>
            <a>Go to dynamic page with build-time rendering</a>
          </Link>
          <Link href={`/articles/${article.id}/static-isr`}>
            <a>Go to static page with incremental rendering</a>
          </Link>
          <Link href={`/articles/${article.id}/dynamic-ssr`}>
            <a>Go to dynamic page with server-side rendering</a>
          </Link>
        </div>
      </main>
      <footer className={styles.footer}>Made by me</footer>
    </div>
  );
};
