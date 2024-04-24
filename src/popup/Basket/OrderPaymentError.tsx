import { selectBasketProduct } from "../../store/slices/authSlice";
import { useAppSelector } from "../../store/storeHooks";

type Props = {
    close: () => void;
    goTo: (path: string) => void;
}

const OrderConfirmed = (props: Props) => {

    const { close, goTo } = props;
    const basketProduct = useAppSelector(selectBasketProduct);

    return (
        <>
            <div className="popup__row popup__row--title popup__row--gradient-top-to-bottom">
                <div onClick={close} className="popup__btn popup__btn--close"></div>
            </div>
            <div className="basket__offer-row basket__offer-row--without-arrow">
                <div className="basket__order-status basket__order-status--error">
                    <div className="basket__order-status-icon"></div>
                    <div className="basket__order-status-text">Ошибка оплаты</div>
                </div>
            </div>
            <div className="basket__btns-wrapper"><a className="button button--gray" href="https://t.me/apgrayedd" target="_blank">Связаться с нами</a><a className="button button--gray" href="#">Повторить заказ</a></div>
            <div className="popup__row">
                <div className="basket__offer">
                    <div className="basket__offer-container">
                        <Item/>
                        <Item/>
                    </div>
                    <div className="basket__offer-container basket__offer-container--summary-info">
                        <div className="basket__sum">
                            <div className="basket__sum-total">Итого</div>
                            <div className="basket__sum-price">3702&nbsp;₽</div>
                        </div>
                        <div className="basket__summary-info">
                            <div className="basket__summary-info-title">Итого</div>
                            <div className="basket__summary-info-descr">208&nbsp;₽</div>
                        </div>
                        <div className="basket__summary-info">
                            <div className="basket__summary-info-title">Номер заказа</div>
                            <div className="basket__summary-info-descr">389574</div>
                        </div>
                        <div className="basket__summary-info">
                            <div className="basket__summary-info-title">Время заказа</div>
                            <div className="basket__summary-info-descr">28&nbsp;сентября 2023&nbsp;в 12:16</div>
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


const Item = () => (
    <div className="basket-product basket-product--info">
        <div className="basket-product__container">
            <div className="basket-product__col basket-product__col--left"><a className="basket-product__link" href="#" title=""><img className="basket-product__img" src="img/basket/1.webp" alt=""/></a></div>
            <div className="basket-product__col basket-product__col--center">
                <div className="basket-product__title">Сыр Самокат российский, традиционный, в&nbsp;нарезке, 45%</div>
                <div className="basket-product__subtitle">2&nbsp;шт.</div>
                <div className="basket-product__quantity-and-price"><span>1 шт</span><span>88&nbsp;₽</span></div>
            </div>
        </div>
    </div>
)

export default OrderConfirmed;