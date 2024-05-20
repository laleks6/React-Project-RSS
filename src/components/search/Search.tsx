import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch, setActivePage } from '../../store/reduxSlice';

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const valueSearchSelector = useSelector((state) => state.project.valueSearch);
  const dispatch = useDispatch();
  const setValue = () => dispatch(setSearch(searchValue));
  const setPage = () => dispatch(setSearch(setActivePage(1)));
  useEffect(() => {
    setSearchValue(valueSearchSelector);
    setValue();
  }, [valueSearchSelector]);

  const onClickSearchBtn = () => {
    setValue();
    searchValue !== localStorage.getItem('valueSearch') && setPage();
    localStorage.setItem('valueSearch', searchValue);
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
