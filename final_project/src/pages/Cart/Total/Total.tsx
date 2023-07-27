import './total.scss'
import {useSelector} from 'react-redux'
import { RootState } from '../../../store'

function Total() {

  const { cart } = useSelector((state: RootState) => state.cart);

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
     if (cart) {
       cart.map((item: any) => {
         totalQuantity += item.quantity;
         totalPrice += item.price * item.quantity;
       });
      }
    return {totalPrice, totalQuantity}
  }
 
  return (
    <div className="total">
      <p className="total__count">{getTotal().totalQuantity}</p>
      <p className="total__price">{getTotal().totalPrice}$</p>
    </div>
  );
}

export default Total