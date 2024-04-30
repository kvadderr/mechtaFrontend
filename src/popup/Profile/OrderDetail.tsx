import { OrderStatus } from "../../@types/const/OrderStatus";
import OrderItemSecond from "../../components/Order/OrderItemSecond"
import { selectOrder } from "../../store/slices/orderSlice"
import { useAppSelector } from "../../store/storeHooks"

type Props = {
  close: () => void;
  goTo: (path: string) => void;
}

const OrderDetail = (props: Props) => {
  const { close, goTo } = props;
  const currentOrder = useAppSelector(selectOrder)

  const date = currentOrder && new Date(currentOrder?.createdAt).toLocaleString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });


  const GetHeader = () => {
    switch (currentOrder?.status) {
      case OrderStatus.CANCELED:
        return <div className="basket__order-status basket__order-status--cancelled">
          <div className="basket__order-status-icon"></div>
          <div className="basket__order-status-text">Заказ отменен</div>
        </div>

      case OrderStatus.WAITING:
        return <div className="basket__order-status basket__order-status--awaiting-confirmation">
          <div className="basket__order-status-icon"></div>
          <div className="basket__order-status-text">Ожидает подтверждения</div>
        </div>
      case OrderStatus.SUCCESS:
        return <div className="basket__order-status basket__order-status--fulfilled">
          <div className="basket__order-status-icon"></div>
          <div className="basket__order-status-text">Заказ выполнен</div>
        </div>
      default:
        break;
    }
  }

  return (
    <>
      <div className="popup__row popup__row--title popup__row--gradient-top-to-bottom">
        <div onClick={() => goTo('orders')} className="popup__btn popup__btn--back"></div>
        <div onClick={close} className="popup__btn popup__btn--close"></div>
      </div>
      <div className="popup__row popup__row--status">
        {<GetHeader />}
        <div className="basket__btns-wrapper"><a className="button button--gray" href="https://t.me/apgrayedd" target="_blank">Связаться с нами</a><a className="button button--gray" href="#">Повторить заказ</a></div>
        <div className="basket__offer">
          <div className="basket__offer-container">
            {
              currentOrder?.orderProducts.map((item, index) => (
                <OrderItemSecond product={item} key={index} />
              ))
            }
          </div>
          <div className="basket__offer-container basket__offer-container--summary-info">
            <div className="basket__sum">
              <div className="basket__sum-total">Итого</div>
              <div className="basket__sum-price">{currentOrder?.price}&nbsp;₽</div>
            </div>
            <div className="basket__summary-info">
              <div className="basket__summary-info-title">Итого</div>
              <div className="basket__summary-info-descr">{currentOrder?.price}&nbsp;₽</div>
            </div>
            <div className="basket__summary-info">
              <div className="basket__summary-info-title">Номер заказа</div>
              <div className="basket__summary-info-descr">{currentOrder?.id}</div>
            </div>
            <div className="basket__summary-info">
              <div className="basket__summary-info-title">Время заказа</div>
              <div className="basket__summary-info-descr">{date}</div>
            </div>
            <div className="basket__summary-info">
              <div className="basket__summary-info-title">Магазин</div>
              <div className="basket__summary-info-descr">Быстро</div>
            </div>
            <div className="basket__summary-info">
              <div className="basket__summary-info-title">Адрес доставки</div>
              <div className="basket__summary-info-descr">Санкт-Петербург, Садовая, 28-30 к1</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderDetail