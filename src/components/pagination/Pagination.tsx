import React, { Dispatch, SetStateAction } from 'react';

type Props = {
  setActivePage: Dispatch<SetStateAction<number>>;
  quantityPage: number | number[];
  propsActivePage: number;
};

function Pogination({ setActivePage, quantityPage, propsActivePage }: Props) {
  const clickPagination = (el: number) => {
    setActivePage(el);
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
