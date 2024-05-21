import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hook';
import { setSearch, setActivePage } from '../../store/reduxSlice';

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const valueSearchSelector = useAppSelector(
    (state) => state.project.valueSearch
  );
  const dispatch = useAppDispatch();
  const setValue = () => dispatch(setSearch(searchValue));
  const setPage = () => dispatch(setSearch(setActivePage(1)));
  useEffect(() => {
    setSearchValue(valueSearchSelector);
    setValue();
  }, [valueSearchSelector]);

  function sendingReq() {
    setValue();
    if (searchValue !== localStorage.getItem('valueSearch')) setPage();
    localStorage.setItem('valueSearch', searchValue);
  }

  const onClickSearchBtn = () => {
    sendingReq();
  };
  const onClickSearchEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') sendingReq();
  };
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.target.value;
    setSearchValue(targetValue);
  };

  return (
    <div className="search">
      <label className="search__label" htmlFor="search">
        <input
          className="search__input"
          id="search"
          placeholder="Search"
          onChange={onChangeValue}
          onKeyDown={(e) => onClickSearchEnter(e)}
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
