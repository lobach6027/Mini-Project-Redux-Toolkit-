import React from "react";
import s from "./style.module.css";
import { useDispatch } from "react-redux";
import { decrementBusket, deleteFromBasket, incrementBasket } from "../../store/slice/basketSlice";
export default function BasketItem({ title, count, id, price }) {
    const dispatch = useDispatch()
  return (
    <div className={s.card}>
      <p>{title}</p>
      <div className={s.changeAmountBlock}>
        <button onClick={()=>dispatch(incrementBasket(id))}>+</button>
        <p>{count}</p>
        <button onClick={()=>dispatch(decrementBusket(id))}>-</button>
      </div>
      <p>Price per item: {price} $</p>
      <p>Price: {price*count} $</p>
      <button onClick={()=>dispatch(deleteFromBasket(id))} className={s.delBtn}>✕</button>
    </div>
  );
}
