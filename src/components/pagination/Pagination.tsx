import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActivePage } from '../../store/reduxSlice';

type Props = {
  propsActivePage: number;
  dataTotal: number;
  dataLimit: number;
};

function Pogination({ propsActivePage, dataTotal, dataLimit }: Props) {
  const [quantityPage, setQuantityPage] = useState<number[] | number>([]);
  const [paginationLimit, setPaginationLimit] = useState(0);
  const dispatch = useDispatch();
  const setPage = (el) => dispatch(setActivePage(el));
  const countPage = (total: number, limit: number) => {
    const count = Math.floor(total / limit) - 1;
    const objCountPage: number[] = [];
    if (total !== limit) {
      for (let i = 1; i <= count; i++) {
        objCountPage.push(i);
      }
    } else {
      setPage(1);
    }
    if (paginationLimit !== limit) {
      setPage(1);
    }
    setPaginationLimit(limit);
    setQuantityPage(objCountPage);
  };
  useEffect(() => {
    countPage(dataTotal, dataLimit);
  }, [dataLimit, dataTotal]);
  const clickPagination = (el: number) => {
    setPage(el);
  };

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {typeof quantityPage === 'object'
          ? quantityPage.map((el) => {
              return (
                <button
                  type="button"
                  key={`page-${el}`}
                  className={`pagination__item page-${el} ${el === propsActivePage && 'active'}`}
                  onClick={() => clickPagination(el)}
                  onKeyDown={() => clickPagination(el)}
                >
                  {el}
                </button>
              );
            })
          : ''}
      </ul>
    </div>
  );
}

export default Pogination;
