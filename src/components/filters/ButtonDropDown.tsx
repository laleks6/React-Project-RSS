import React from 'react';

type props = {
  setactiveBlock: React.Dispatch<React.SetStateAction<boolean>>;
  activeBlock: boolean;
};

function ButtonDropDown({ setactiveBlock, activeBlock }: props) {
  const clickBtn = () => {
    setactiveBlock(!activeBlock);
  };
  return (
    <button className="filters__btn" onClick={clickBtn}>
      {activeBlock === true ? 'ᐃ' : 'ᐁ'}
    </button>
  );
}

export default ButtonDropDown;
