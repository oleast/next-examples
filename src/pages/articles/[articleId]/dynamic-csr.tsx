import { FC, useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Article } from 'src/articles';
import { ExampleComponent } from 'src/components/ExampleComponent';

const ExampleParametersPage: FC = () => {
  const { query } = useRouter();
  const articleId = Number(query.articleId);
  const [article, setArticle] = useState<Article | null>(null);

  const fetchArticle = useCallback(async () => {
    if (!articleId) {
      return;
    }
    const newArticle: Article = await fetch(`/api/${articleId}`).then((r) =>
      r.json()
    );
    setArticle(newArticle);
  }, [articleId]);

  useEffect(() => {
    fetchArticle();
  }, [fetchArticle]);

  return (
    <>
      <Head>
        <title>Example page with parameters. id = {}</title>
      </Head>
      {article && <ExampleComponent article={article} />}
    </>
  );
};

export default ExampleParametersPage;
