import { FC } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { getArticleById } from 'src/articles';
import { ExampleComponent } from 'src/components/ExampleComponent';

const DynamicExampleComponent = dynamic(
  () => Promise.resolve(ExampleComponent),
  {
    ssr: false,
  }
);

const ExampleDynamicPage: FC = () => {
  return (
    <>
      <Head>
        <title>Example page with dynamic loading</title>
      </Head>
      <DynamicExampleComponent article={getArticleById(1)} />
    </>
  );
};

export default ExampleDynamicPage;
