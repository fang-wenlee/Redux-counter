import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { decrement, increment } from "./redux/ducks/counter";

const Counter = ({ voter }) => {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    setCount(count + 1);
    dispatch(increment());
  };
  const handleDecrement = () => {
    setCount(count - 1);
    dispatch(decrement());
  };
  return (
    <div style={{ margin: "10px", backgroundColor: "grey" }}>
      <h2> {voter} </h2>
      <h3>{`your vote: ${count}`}</h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleDecrement}>decrement</button>
      </div>
    </div>
  );
};
export default Counter;
