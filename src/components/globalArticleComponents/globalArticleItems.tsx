import { FC, useState } from 'react';
import { useAppSelector } from '../../store/hooks/redux';
import ArticlesItem from '../userArticleComponents/articlesItem/articlesItem';
import SubmitButton from '../generall/submitButton/submitButton';
import './globalArticleComponent.scss';
const GlobalArticleItems: FC = () => {
  const articleData = useAppSelector((state) => state.globalArticleReducer);
  const [newsCount, setNewsCount] = useState(20);
  return (
    <>
      <div className="global-article">
        {articleData.length > 0 ? (
          articleData
            .slice(0, newsCount)
            .map((article) => <ArticlesItem key={article.description} article={article} />)
        ) : (
          <div>Nothing found</div>
        )}
      </div>
      <SubmitButton
        text={'load more'}
        onClick={() => {
          setNewsCount(newsCount + 20);
        }}
      />
    </>
  );
};
export default GlobalArticleItems;
