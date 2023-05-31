import { FC } from 'react';
import { useAppSelector } from '../../../store/hooks/redux';
import ArticlesItem from '../articlesItem/articlesItem';
import './userArticle.scss';
import { userArticleProps } from './userArticle.type';
const UserArticles: FC<userArticleProps> = ({ searchValue }) => {
  const userArticles = useAppSelector((state) => state.userArticleReducer);

  return (
    <>
      <div className="pinned-article">
        {userArticles.pinnedMessage ? <ArticlesItem article={userArticles.pinnedMessage} /> : null}
      </div>
      <div className="article-wrapper">
        {userArticles.articles
          .filter(
            (article) =>
              article.description.toLowerCase().includes(searchValue.toLowerCase()) ||
              article.content.toLowerCase().includes(searchValue.toLowerCase())
          )
          .reverse()
          .map((article) => (
            <ArticlesItem key={article.publishedAt} article={article} />
          ))}
      </div>
    </>
  );
};
export default UserArticles;
