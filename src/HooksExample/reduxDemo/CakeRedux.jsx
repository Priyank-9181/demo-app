import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { restock, sell } from "../../redux/slices/cakeSlice";

function CakeRedux() {
  const cake = useSelector((state) => {
    return state.cake;
  });

  const dispatch = useDispatch();

  function decrement() {
    dispatch(sell());
  }

  function increment() {
    dispatch(restock(1));
  }

  return (
    <div>
      <div>
        <button onClick={decrement}>-</button>
        <p>Cakes in store: {cake.numberOfCakes}</p>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default CakeRedux;
