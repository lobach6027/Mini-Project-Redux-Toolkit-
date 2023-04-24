import { useSelector } from "react-redux";
import s from "./style.module.css";
import BasketItem from "../BasketItem";
export default function BasketList() {
  const basket = useSelector((state) => state.basket.list);
  const products = useSelector((state) => state.products.list);
  const data = basket.map((item) => {
    const basketProduct = products.find((elem) => elem.id === item.id);
    return { ...item, ...basketProduct };
  });
  const totalPrice = data.reduce((prev,{price,count})=>prev+price*count,0)
  const totalCount = data.reduce((prev,{count})=>prev+count,0)
  return (
    <div>
      <h2 className={s.title}>Basket</h2>
      <div className={s.container}>
        {data.map((item) => (
          <BasketItem key={item.id} {...item} />
        ))}
      </div>
      <h2 className={s.title}>Calculation</h2>
      <div className={s.calc_container}>
        <p>Total price: {totalPrice} $</p>
        <p>Total count: {totalCount} </p>
      </div>
    </div>
  );
}
