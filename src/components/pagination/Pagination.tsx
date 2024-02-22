import React from 'react';

type Props = {
  handleActivePage: (activePage: number) => void;
  quantityPage: number | number[];
  propsActivePage: number;
};

function Pogination({
  handleActivePage,
  quantityPage,
  propsActivePage,
}: Props) {
  const clickPagination = (el: number) => {
    handleActivePage(el);
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
