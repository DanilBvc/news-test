import { FC } from 'react';
import BlockWrapper from '../../generall/blockWrapper/blockWrapper';
import ExpandableText from '../../generall/expandableText/expandableText';
import './articleItem.scss';
import { articleItemProps } from './articleItem.type';
import { useAppDispatch } from '../../../store/hooks/redux';
import SubmitButton from '../../generall/submitButton/submitButton';
import removeArticleAction from '../../../store/actions/removeArticleActions';
import pinArticleAction from '../../../store/actions/pinArticleAction';
import { convertDate } from '../../../utils/dateHelpers';
const ArticlesItem: FC<articleItemProps> = ({ article }) => {
  const { author, publishedAt, title, content, urlToImage, description } = article;
  const dispatch = useAppDispatch();
  return (
    <BlockWrapper additionalClass="post-block-wrapper">
      <div className="post-block-header">
        <div className="post-block-info">
          <div className="post-block-fullName">{author}</div>
          <div className="post-block-createdAt">{convertDate(publishedAt)}</div>
          <div className="post-block-description">
            {' '}
            <ExpandableText text={description} length={20} />
          </div>
        </div>
      </div>
      <div className="post-block-content">
        <div className="post-block-title">{title}</div>
        <div className="post-block-text">
          <ExpandableText text={content} length={100} />
        </div>
      </div>
      <SubmitButton
        text={'remove article'}
        onClick={() => {
          dispatch(removeArticleAction({ article: article, sortBy: null }));
        }}
      />
      <SubmitButton
        text={'pin'}
        onClick={() => {
          dispatch(pinArticleAction({ article: article, sortBy: null }));
        }}
      />
      {urlToImage && <img className="article-img" src={urlToImage} alt={title} />}
    </BlockWrapper>
  );
};
export default ArticlesItem;
