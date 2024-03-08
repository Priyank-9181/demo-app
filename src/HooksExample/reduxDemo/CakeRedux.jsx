import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { restock, sell } from "../../redux/slices/cakeSlice";
import styles from "./store.module.css";
import { restockIC, sellIC } from "../../redux/slices/iceCreamSlice";

function CakeRedux() {
  const cake = useSelector((state) => {
    return state.cake;
  });

  const iceCream = useSelector((state) => {
    return state.iceCream;
  });

  console.log(iceCream);

  const dispatch = useDispatch();

  function decrement() {
    dispatch(sell());
  }

  function increment() {
    dispatch(restock(1));
  }

  function sellIceCream() {
    dispatch(sellIC());
  }

  function restockIceCream() {
    dispatch(restockIC(10));
  }

  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <button onClick={decrement}>-</button>
        <p>Cakes: {cake.numberOfCakes}</p>
        <button onClick={increment}>+</button>
      </div>
      <div className={styles.innerContainer}>
        <button onClick={sellIceCream}>-</button>
        <p>Ice-Cream: {iceCream.numberOfIceCream}</p>
        <p>Cash: ${iceCream.cash}</p>
        <button onClick={restockIceCream}>+</button>
      </div>
    </div>
  );
}

export default CakeRedux;
