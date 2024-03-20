/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import getApi from './components/request/Request-cards';

import './style/main-style.scss';
import Search from './components/search/Search';
import Result from './components/result/Result';
import ErrorBtn from './components/error-btn/ErrorBtn';
import Pogination from './components/pagination/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { setData, fetchData, setActivePage } from './store/reduxSlice';

function App() {
  const getLocalStorage = localStorage.getItem('valueSearch') as string;
  const { data, valueSearch, activePage } = useSelector(
    (state) => state.project
  );
  // const [valueSearch, setValueSearch] = useState(getLocalStorage || '');
  // const [data, setData] = useState<Record<string, string | number>[] | boolean>(
  //   false
  // );
  // const [activePage, setActivePage] = useState(1);
  const [limit, setLimit] = useState(5);
  // const [activeCard, setActiveCard] = useState<number>(-1);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData({ valueSearch, limit, activePage }));
    // const request = getApi(valueSearch!, activePage, limit);
    // extractionPromis(request);
    // setSearchParams(`searche=${valueSearch}&page=${activePage}`);
  }, [dispatch, activePage, valueSearch]);

  return (
    <div className="main">
      <div className="block-components">
        <Search />
        <Result />
      </div>
      <Pogination
        propsActivePage={activePage}
        dataTotal={data.total}
        dataLimit={data.limit}
      />
      <ErrorBtn />
    </div>
  );
}

export default App;
