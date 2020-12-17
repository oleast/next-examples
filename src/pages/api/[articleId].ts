import { Article } from 'src/articles/index';
import { getArticleByIdAsync } from 'src/articles/index';
import { NextApiHandler } from 'next';

const handler: NextApiHandler<Article> = async (req, res) => {
  res.statusCode = 200;
  const articleId = Number(req.query.articleId);
  const article = await getArticleByIdAsync(articleId);
  res.json(article);
};

export default handler;
