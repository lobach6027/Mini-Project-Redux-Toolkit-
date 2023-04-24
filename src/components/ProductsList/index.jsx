import React from 'react'
import { useSelector } from 'react-redux'
import ProductsItem from '../ProductsItem'
import s from './style.module.css'
export default function ProductsList() {
    const products = useSelector(state=>state.products.list)
  return (
    <div>
        <h2 className={s.title}>All products</h2>
        <div className={s.container}>{
        products.map((item)=><ProductsItem key={item.id} {...item}/>)}</div>
    </div>
  )
}
