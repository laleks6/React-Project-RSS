/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState, useEffect } from 'react';
import getApi from './components/request/Request-cards';

import './style/main-style.scss';
import Search from './components/search/Search';
import Result from './components/result/Result';
import ErrorBtn from './components/error-btn/ErrorBtn';
import Pogination from './components/pagination/Pagination';
import { useSearchParams } from '../node_modules/react-router-dom/dist/index';

type Promises = {
  limit: number;
  recipes: Record<string, number | string | string[]>[];
  skip: number;
  total: number;
};

function App() {
  const getLocalStorage = localStorage.getItem('valueSearch') as string;
  const [valueSearch, setValueSearch] = useState(getLocalStorage || '');
  const [data, setData] = useState<Record<string, string | number>[] | null>(
    null
  );
  const [quantityPage, setQuantityPage] = useState<number[] | number>([]);
  const [activePage, setActivePage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [activeCard, setActiveCard] = useState<number>(-1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);

  const handleSearchValue = (value: string): void => {
    setValueSearch(value);
  };

  const handleActivePage = (page: number) => {
    setActivePage(page);
  };

  const handleActiveCard = (idCard: number) => {
    activeCard === -1 && setActiveCard(idCard);
    idCard === -1 && setActiveCard(idCard);
  };

  const countPage = (total: number): void => {
    const count = Math.floor(total / limit) - 1;
    const objCountPage: number[] = [];
    if (total !== limit) {
      for (let i = 1; i <= count; i++) {
        objCountPage.push(i);
      }
    } else {
      handleActivePage(1);
    }

    setQuantityPage(objCountPage);
  };

  const extractionPromis = (promis: Promise<Promises>): void => {
    const dataCardArr: Record<string, string | number>[] = [];
    promis
      .then((data) => {
        console.log('da', data.total, data.limit);
        countPage(data.total);
        for (let i = 0; i <= data.total; i++) {
          const dataResults = data.recipes[i];

          const obj = {
            name: '',
            mealType: '',
            difficulty: '',
            ingredients: '',
            instructions: '',
            rating: 0,
            image: '',
          };

          obj.name = dataResults.name as string;
          obj.mealType = dataResults.mealType as string;
          obj.difficulty = dataResults.difficulty as string;
          obj.ingredients = dataResults.ingredients as string;
          obj.instructions = dataResults.instructions as string;
          obj.rating = dataResults.rating as number;
          obj.image = dataResults.image as string;
          dataCardArr.push(obj);
        }
      })
      .finally(() => {
        setData(dataCardArr);
        setLoading(true);
      });
  };
  useEffect(() => {
    const request = getApi(valueSearch!, activePage, limit);
    setLoading(false);
    extractionPromis(request);
    setSearchParams(`searche=${valueSearch}&page=${activePage}`);
  }, [valueSearch, activePage]);

  return (
    <div className="main">
      <div className="block-components">
        <Search
          value={valueSearch}
          handleSearchValue={handleSearchValue}
          handleActivePage={handleActivePage}
        />

        <Result
          resultPromis={data}
          handleActiveCard={handleActiveCard}
          activeCard={activeCard}
          loading={loading}
        />
      </div>

      <Pogination
        handleActivePage={handleActivePage}
        quantityPage={quantityPage}
        propsActivePage={activePage}
      />

      <ErrorBtn />
    </div>
  );
}

export default App;
