import { useEffect, useState } from 'react';
import { newsUrl } from '../../utils/network';
import { unauthorizedRequest } from '../../utils/queries';
import { useAppDispatch } from '../../store/hooks/redux';
import GlobalArticleItems from '../../components/globalArticleComponents/globalArticleItems';
import loadGlobalArticlesAction from '../../store/actions/loadGlobalArticlesAction';
import Loading from '../../components/generall/loading/loading';

const GlobalArticle = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState('');
  useEffect(() => {
    setLoading(true);
    unauthorizedRequest(newsUrl(), 'GET')
      .catch((err) => {
        setError(true);
        setErrorText(err);
        setLoading(false);
      })
      .then((data) => {
        if (!error && data && data.articles) {
          dispatch(loadGlobalArticlesAction(data.articles));
        }
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? <Loading /> : null}
      {error ? <div>something went wrong {errorText}</div> : null}
      {!error && !loading ? <GlobalArticleItems /> : null}
    </>
  );
};
export default GlobalArticle;
