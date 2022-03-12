import "./styles.css";
import Counter from "./Counter";
import React from "react";
import { useSelector } from "react-redux";
export default function App() {
  const count = useSelector((state) => state.counter.count);
  const voters = ["Fang-Wen", "Hsi-Wen", "Pohan Lin", "Emily"];

  return (
    <div className="App">
      <h1>Total vote: {count}</h1>
      {voters.map((voter) => (
        <Counter voter={voter} />
      ))}
      {/* <Counter voter="Fang-Wen"/>
      <Counter voter="Hsi-Wen"/> */}
    </div>
  );
}
