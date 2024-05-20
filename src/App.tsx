/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect } from 'react';

import './style/main-style.scss';
import { useSelector, useDispatch } from 'react-redux';
import Search from './components/search/Search';
import Result from './components/result/Result';
import ErrorBtn from './components/error-btn/ErrorBtn';
import Pogination from './components/pagination/Pagination';
import { fetchData } from './store/reduxSlice';
import Filters from './components/filters/Filteres';
import Header from './components/header/Header';

function App() {
  const { data, valueSearch, activePage, limit } = useSelector(
    (state) => state.project
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData({ valueSearch, limit, activePage }));
  }, [dispatch, activePage, valueSearch, limit]);
  return (
    <>
      <Header />
      <div className="main">
        <div className="block-components">
          <Search />
          <Filters />
          <Result />
        </div>
        <Pogination
          propsActivePage={activePage}
          dataTotal={data.total}
          dataLimit={limit}
        />
        <ErrorBtn />
      </div>
    </>
  );
}

export default App;
