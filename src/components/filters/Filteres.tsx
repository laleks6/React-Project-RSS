import React, { useState } from 'react';
import LimitCards from './LimitCards';
import ButtonDropDown from './ButtonDropDown';
function Filters() {
  const [activeBlock, setactiveBlock] = useState(false);
  return (
    <div className="block-filters">
      {activeBlock && (
        <div className={`filters`}>
          <LimitCards />
        </div>
      )}
      <ButtonDropDown
        setactiveBlock={setactiveBlock}
        activeBlock={activeBlock}
      />
    </div>
  );
}

export default Filters;
