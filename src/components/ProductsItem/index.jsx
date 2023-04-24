import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux'
import { deleteItem } from '../../store/slice/productsSlice'
import { addToBasket } from '../../store/slice/basketSlice'
export default function ProductsItem({id,title,price}) {
    const dispatch = useDispatch()

  return (
    <div className={s.card}>
        <p>{title}</p>
        <p>Price: {price} $</p>
        <button onClick={()=>dispatch(deleteItem(id))} className={s.delBtn}>✕</button>
        <button className={s.addToBasketButton} onClick={()=>dispatch(addToBasket(id))}>To basket</button>
    </div>
  )
}
