import React, {
  useState,
  useEffect,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react';
import LocaleContext from '../context/LocaleContext';

type MyProps = {
  value: string;
  setActivePage: Dispatch<SetStateAction<number>>;
};

function Search({ value, setActivePage }: MyProps) {
  const [searchValue, setSearchValue] = useState('');
  const { valueSearch, setValueSearch } = useContext(LocaleContext);

  useEffect(() => {
    setSearchValue(value);
  }, [value]);

  const onClickSearchBtn = () => {
    setValueSearch(searchValue);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    valueSearch !== localStorage.getItem('valueSearch') && setActivePage(1);
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
