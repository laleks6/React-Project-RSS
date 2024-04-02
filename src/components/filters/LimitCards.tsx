import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLimit } from '../../store/reduxSlice';
function LimitCards() {
  const dispatch = useDispatch();
  const changeLimit = (el: number) => dispatch(setLimit(el));
  const { limit } = useSelector((state) => state.project);
  const f = (event: { target: { value: string } }) => {
    console.log('SELECT', event.target.value);
    changeLimit(+event.target.value);
  };
  return (
    <label>
      Limit cards:
      <select value={`${limit}`} onChange={f}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="50">All</option>
      </select>
    </label>
  );
}
export default LimitCards;
