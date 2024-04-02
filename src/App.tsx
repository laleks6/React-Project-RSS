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
import Filters from './components/filters/Filteres';

function App() {
  const getLocalStorage = localStorage.getItem('valueSearch') as string;
  const { data, valueSearch, activePage, limit } = useSelector(
    (state) => state.project
  );
  // const [valueSearch, setValueSearch] = useState(getLocalStorage || '');
  // const [data, setData] = useState<Record<string, string | number>[] | boolean>(
  //   false
  // );
  // const [activePage, setActivePage] = useState(1);
  // const [limit, setLimit] = useState(5);
  // const [activeCard, setActiveCard] = useState<number>(-1);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData({ valueSearch, limit, activePage }));
    // const request = getApi(valueSearch!, activePage, limit);
    // extractionPromis(request);
    // setSearchParams(`searche=${valueSearch}&page=${activePage}`);
  }, [dispatch, activePage, valueSearch, limit]);
  const arr = [4, 4, 1, 1, 1, 5, 5, 6, 7, 7, 8, 8, 8, 9, 11];
  const f = () => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      console.log(arr.indexOf[arr[i]]);
      console.log(arr.lastIndexOf[arr[i]]);
      if (arr.indexOf[arr[i]] !== arr.lastIndexOf[arr[i]]) {
        newArr.push(arr[i]);
      }
    }
    console.log(newArr, '2');
    return newArr;
  };
  f();
  return (
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
  );
}

export default App;
