import React from 'react';
import getApi from './components/request/Request-cards';

import './style/main-style.scss';
import Search from './components/search/Search';
import Result from './components/result/Result';
import ErrorBtn from './components/error-btn/ErrorBtn';

const checkForNull = (val: string | null) => {
  const checkValue = val !== null ? val : '';
  return checkValue;
};

type State = {
  valueSearch: string | null;
  data: Record<string, string>[];
};

class App extends React.Component<unknown, State> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      valueSearch: localStorage.getItem('valueSearch')
        ? localStorage.getItem('valueSearch')
        : '',
      data: [],
    };
  }

  componentDidMount() {
    const { valueSearch } = this.state;
    const checkValueSearch = checkForNull(valueSearch);
    const request = getApi(checkValueSearch);
    this.extractionPromis(request);
  }

  componentDidUpdate() {
    const { valueSearch } = this.state;
    const checkValueSearch = checkForNull(valueSearch);
    const request = getApi(checkValueSearch);
    this.extractionPromis(request);
  }

  handleSearchValue = (value: string): void => {
    this.setState({ valueSearch: value });
  };

  extractionPromis = (promis: Promise<T>): void => {
    const dataCardArr: Record<string, string>[] = [];
    promis
      .then((data) => {
        for (let i = 0; i <= data.count; i += 1) {
          const dataResults = data.results[i];

          const obj = {
            name: '',
            birth_year: '',
          };
          obj.name = dataResults.name;
          obj.birth_year = dataResults.birth_year;
          dataCardArr.push(obj);
        }
      })
      .finally(() => {
        this.setState({ data: dataCardArr });
      });
  };

  render() {
    const { valueSearch, data } = this.state;
    const checkValueSearch = checkForNull(valueSearch);
    return (
      <div className="main">
        <div className="block-components">
          <Search
            value={checkValueSearch}
            handleSearchValue={this.handleSearchValue}
          />
          <Result resultPromis={data} />
        </div>
        <ErrorBtn />
      </div>
    );
  }
}

export default App;
