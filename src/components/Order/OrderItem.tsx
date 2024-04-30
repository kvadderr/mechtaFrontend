import { OrderStatus } from "../../@types/const/OrderStatus";
import { Order } from "../../@types/ententy/Order"

type Props = {
  order: Order,
  onPress: () => void;
}

const OrderItem = ({ order, onPress }: Props) => {

  const date = new Date(order.createdAt).toLocaleString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const OrderStatusBlock = () => {
    switch (order.status) {
      case OrderStatus.CANCELED:
        return <div className="profile__order-item-col profile__order-item-col--right">
          <div className="profile__order-item-title profile__order-item-title--cancelled">
            <div className="profile__order-item-title-icon"></div>Заказ отменен
          </div>
          <div className="profile__order-item-descr"><span>{order.price}&nbsp;₽</span><span>{date}</span></div>
        </div>
      case OrderStatus.SUCCESS:
        return <div className="profile__order-item-col profile__order-item-col--right">
          <div className="profile__order-item-title profile__order-item-title--fulfilled">
            <div className="profile__order-item-title-icon"></div>Заказ выполнен
          </div>
          <div className="profile__order-item-descr"><span>{order.price}&nbsp;₽</span><span>{date}</span></div>
        </div>
      case OrderStatus.WAITING:
        return <div className="profile__order-item-col profile__order-item-col--right">
          <div className="profile__order-item-title profile__order-item-title--awaiting-confirmation">
            <div className="profile__order-item-title-icon"></div>Ожидает подтверждения
          </div>
          <div className="profile__order-item-descr"><span>{order.price}&nbsp;₽</span><span>{date}</span></div>
        </div>
      default:
        break;
    }
  }

  return (
    <a className="profile__order-item" onClick={onPress}>
      <div className="profile__order-item-col profile__order-item-col--left">
        {
          Array.from({ length: 4 }).map((_, index) => {
            const item = order.orderProducts[index];
            return item ? (
              <div key={index} className="profile__order-item-img-wrapper">
                <img className="profile__order-item-img" src={item.product.img} alt="" />
              </div>
            ) : (
              <div key={index} className="profile__order-item-img-wrapper"></div>
            );
          })
        }
      </div>
      <OrderStatusBlock />
    </a>
  )
}

export default OrderItem