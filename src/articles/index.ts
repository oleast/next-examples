import { setTimeoutAsync } from 'src/utils/timeout';

export interface Article {
  id: number;
  title: string;
  content: string;
  imageSrc: string;
}

const ARTICLES: Article[] = [
  {
    id: 1,
    title: 'Christmas trees',
    content: 'This is an article about christmas trees',
    imageSrc: '/tre.png',
  },
];

export const getArticleById = (id: number) => {
  return ARTICLES.find((article) => article.id === id) as Article;
};

export const getArticles = () => {
  return ARTICLES;
};

export const getArticleByIdAsync = async (id: number) => {
  await setTimeoutAsync(600);
  return getArticleById(id);
};
