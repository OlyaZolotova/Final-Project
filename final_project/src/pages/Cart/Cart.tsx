import './cart.scss'
import Total from './Total/Total'
import CartItem from './CartItem/CartItem'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

function Cart() {
  const { cart } = useSelector((state: RootState) => state.cart);

  return (
    <>
      <div className="cart">
        <div className="container">
          <div className="cart__wrap">
            <div>
              <h3 className="cart__title">Shopping Cart</h3>
              <div className="cart__header">
                <p className="cart__text cart__text-title">наименование</p>
                <p className="cart__text">количество</p>
                <p className="cart__text">стоимость</p>
              </div>
              {cart.map((item: any) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                />
              ))}
            </div>
          </div>
          <div className="cart__right">
            <Total />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart