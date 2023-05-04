import { useReducer, useState } from 'react';
import counterReducer from './counterReducer';
import useCounterStore from './store';

const Counter = () => {
  //const [value, dispatch] = useReducer(counterReducer, 0);
  const { counter: count, increment, reset } = useCounterStore();


  return (
    <div>
      <div>Counter component</div>
      <br />
      Counter = {count}

      <button
        style={{ marginLeft: '10px' }}
        onClick={() => increment()}
        className="btn btn-primary"
      >
        Increment
      </button>

      <button
        style={{ marginLeft: '10px' }}
        onClick={() => reset()}
        className="btn btn-primary"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
