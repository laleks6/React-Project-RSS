import * as React from 'react';

type MyProps = {
  value: string;
  handleSearchValue: (value: string) => void;
};
type MyState = {
  value: string;
};

class Search extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);

    this.state = {
      value: '',
    };
  }

  componentDidMount() {
    const { value } = this.props;
    this.setState({ value });
  }

  onClickSearchBtn = () => {
    const { handleSearchValue } = this.props;
    const { value } = this.state;

    handleSearchValue(value);
    localStorage.setItem('valueSearch', value);
  };

  onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.target.value;
    this.setState({ value: targetValue });
  };

  render() {
    const { value } = this.state;
    return (
      <div className="search">
        <label className="search__label" htmlFor="login">
          Search by hero name
          <input
            className="search__input"
            id="login"
            placeholder="Search"
            onChange={this.onChangeValue}
            value={value}
          />
        </label>
        <button
          type="button"
          className="search__button"
          onClick={this.onClickSearchBtn}
        >
          Click
        </button>
      </div>
    );
  }
}

export default Search;
