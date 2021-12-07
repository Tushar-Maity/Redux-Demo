import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';
import './App.css';

const App = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="app">
      <div className="counter-value">
        {counter}
      </div>
      <div className="controller">
        <p onClick={() => dispatch(decrement())}>-</p>
        <h1>Hey this is the counter</h1>
        <p onClick={() => dispatch(increment())}>+</p>
      </div>
    </div>
  );
}

export default App;
