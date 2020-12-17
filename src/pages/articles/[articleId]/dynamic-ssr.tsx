import { FC } from 'react';
import Head from 'next/head';
import { getArticleById } from 'src/articles';
import { ExampleComponent } from 'src/components/ExampleComponent';

const ExampleParametersPage: FC = () => {
  return (
    <>
      <Head>
        <title>Example page with server side rendering</title>
      </Head>
      <ExampleComponent article={getArticleById(1)} />
    </>
  );
};

export default ExampleParametersPage;
