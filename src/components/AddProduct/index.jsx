import React from 'react'
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/slice/productsSlice';
import s from "./style.module.css"
export default function AddProduct() {
    const dispatch = useDispatch()
    const addProductOnClick = (e)=>{
        e.preventDefault();
        const {title,price} = e.target
        const newProduct = {id:Date.now(), title: title.value, price: +price.value }
        dispatch(addProduct(newProduct))
        title: title.value = ''
        price:price.value = ''
        //e.target.reset() очистка формы
    }

  return (
    <>
    <h2 className={s.title}>Create new product</h2>
    <form className={s.form}  onSubmit={addProductOnClick}>
        <input type="text"  name='title' placeholder='title' required/>
        <input type="number" name='price' placeholder='price'  required/>
        <button>Create new product</button>
    </form>
    </>
  )
}
