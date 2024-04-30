import { Order } from "../../@types/ententy/Order";
import OrderItem from "../../components/Order/OrderItem";
import { selectOrdersList, setCurrentOrder } from "../../store/slices/orderSlice";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";

type Props = {
  close: () => void;
  goTo: (path: string) => void;
}

const Orders = (props: Props) => {

  const { close, goTo } = props;
  const dispatch = useAppDispatch()
  const myOrders = useAppSelector(selectOrdersList);

  const selectOrder = (order: Order) => {
    dispatch(setCurrentOrder(order));
    goTo('orderDetail')
  }
  return (
    <>
      <div className="popup__row popup__row--title">
        <div onClick={() => goTo('main')} className="popup__btn popup__btn--back"></div>
        <div className="popup__title">Заказы</div>
        <div onClick={close} className="popup__btn popup__btn--close"></div>
      </div>
      <div className="popup__row">
        <div className="profile profile--orders">
          <div className="profile__container">
            <div className="profile__order-list">
              {myOrders.map((item, index) => (
                <OrderItem order={item} key={index} onPress={() => selectOrder(item)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Orders