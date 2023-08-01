import './cart.scss'
import Total from './Total/Total'
import CartItem from './CartItem/CartItem'
import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../../store'
import { useEffect } from "react";
import { setUser } from '../../store/reducers/user';
import { authService } from '../../services/auth';
import { LOCAL_STORAGE_KEYS } from '../../constants/LocalStorageKeys';
import { useAppDispatch } from '../../hooks/useAppDispatch';

function Cart() {
  const { cart } = useSelector((state: RootState) => state.cart);
  
  const { username } = useSelector((state: RootState) => state.user);

  
  const dispath = useAppDispatch();

  const authUser = async () => {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);

    if (accessToken) {
      try {
        const { data } = await authService.getCurrentUser();

        dispath(setUser(data));
      } catch (error) {}
    }
  };

  useEffect(() => {
    authUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(username)

  if (!username) {
    return <p>Войдите в личный кабинет</p>;
  }


  return (
    <>
      <div className="cart">
        <div className="container">
          <div className="cart__wrap">
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
          <div className="cart__right">
            <Total />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart