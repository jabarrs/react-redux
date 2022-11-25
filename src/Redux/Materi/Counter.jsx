import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../App/Features/Counter/action';

const Counter = () => {
  let { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decrement(1))}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment(1))}>+</button>
    </div>
  );
};

export default Counter;
