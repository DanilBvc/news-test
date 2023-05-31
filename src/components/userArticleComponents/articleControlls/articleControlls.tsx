import { FC } from 'react';
import SubmitButton from '../../generall/submitButton/submitButton';
import Search from '../../generall/search/search';
import { articleControllsProps } from './articleControlls.type';
import { useNavigate } from 'react-router-dom';

const ArticleControlls: FC<articleControllsProps> = ({
  handleModal,
  searchValue,
  setSearchValue,
}) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  const navigate = useNavigate();
  return (
    <div className="controlls-wrapper">
      <div className="buttons-wrapper">
        <SubmitButton
          text={'page with 10 new articles'}
          onClick={() => {
            navigate('/global');
          }}
        />
        <SubmitButton text={'add article'} onClick={handleModal} />
        <Search
          onChange={handleSearch}
          value={searchValue}
          placeholder="search by description or name"
        />
      </div>
    </div>
  );
};
export default ArticleControlls;
