import React, { useEffect } from 'react';
import './App.css';
import { unauthorizedRequest } from './utils/queries';
import { baseUrl } from './utils/network';
import { articleResponseType } from './globalTypes/globalTypes';

function App() {
  useEffect(() => {
    unauthorizedRequest(baseUrl, 'GET').then((data: articleResponseType) => console.log(data));
  }, []);
  return <div className="App"></div>;
}

export default App;
