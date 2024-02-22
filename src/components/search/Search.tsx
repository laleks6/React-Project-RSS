import React, { useState, useEffect } from 'react';
// import getApi from '../request/Request-cards'
type MyProps = {
  value: string;
  handleSearchValue: (value: string) => void;
  handleActivePage: (activePage: number) => void;
};

function Search({ value, handleSearchValue, handleActivePage }: MyProps) {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setSearchValue(value);
  }, [value]);

  const onClickSearchBtn = () => {
    handleSearchValue(searchValue);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    value !== localStorage.getItem('valueSearch') && handleActivePage(1);
    localStorage.setItem('valueSearch', searchValue);
  };
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.target.value;
    setSearchValue(targetValue);
  };

  return (
    <div className="search">
      <label className="search__label" htmlFor="login">
        Search by hero name
        <input
          className="search__input"
          id="login"
          placeholder="Search"
          onChange={onChangeValue}
          value={searchValue}
        />
      </label>
      <button
        type="button"
        className="search__button"
        onClick={onClickSearchBtn}
      >
        Click
      </button>
    </div>
  );
}

export default Search;
