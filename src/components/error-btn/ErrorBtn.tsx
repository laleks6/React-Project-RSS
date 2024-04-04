import React, { useState } from 'react';

function ErrorBtn() {
  const [status, setStatus] = useState(true);

  const eventErrorBtn = () => {
    setStatus(false);
  };

  if (!status) {
    throw new Error('I crashed!');
  }
  return (
    <button className="button" onClick={eventErrorBtn}>
      click on me
    </button>
  );
}

export default ErrorBtn;
