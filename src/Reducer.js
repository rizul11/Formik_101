import React, { useReducer } from "react";

function Reducer() {
  const initialState = 0;
  const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1 
        case 'decrement'
    }
  };
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>Count = {count}</h1>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("Decrement")}>Decrement</button>
      <button onClick={() => dispatch("Reset")}>Reset</button>
    </>
  );
}

export default Reducer;
