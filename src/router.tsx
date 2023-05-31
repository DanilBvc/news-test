import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import UserArticle from './pages/userArticle/userArticle';
import GlobalArticle from './pages/globalArticle/globalArticle';

const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<UserArticle />} />
      <Route path="/global" element={<GlobalArticle />} />
    </Routes>
  );
};

export default Router;
