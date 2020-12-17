import { FC } from 'react';
import Head from 'next/head';
import { Article, getArticleByIdAsync, getArticles } from 'src/articles';
import { ExampleComponent } from 'src/components/ExampleComponent';
import { GetStaticPaths, GetStaticProps } from 'next';

type QueryParams = {
  articleId: string;
};

interface StaticProps {
  article: Article;
}

const Page: FC<StaticProps> = ({ article }) => {
  return (
    <>
      <Head>
        <title>Example page with parameters</title>
      </Head>
      <ExampleComponent article={article} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths<QueryParams> = async () => {
  const articles = getArticles();
  const paths = articles.map((article) => ({
    params: { articleId: String(article.id) },
  }));
  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps: GetStaticProps<StaticProps, QueryParams> = async (
  ctx
) => {
  const articleId = Number(ctx.params?.articleId);
  const article = await getArticleByIdAsync(articleId);
  return {
    props: {
      article,
    },
  };
};

export default Page;
