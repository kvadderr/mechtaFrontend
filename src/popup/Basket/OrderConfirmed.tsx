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
                <div className="basket__order-status basket__order-status--order-confirmed">
                    <div className="basket__order-status-icon"></div>
                    <div className="basket__order-status-text">Заказ подтвержден</div>
                </div>
            </div>
            <div className="basket__address">
                <div className="basket__address-title">Большой Спасоглинищевский переулок, 9/1 ст4</div>
                <div className="basket__address-time">30&nbsp;минут</div>
            </div>
            <div className="popup__row popup__row--adaptive-height">
                <div className="basket__offer">
                    <div className="basket__offer-container">
                        <div className="basket__offer-row basket__offer-row--space-beetwen basket__offer-row--space-around">
                            <div className="basket__offer-title">Ваш заказ</div>
                            <div onClick={() => goTo('allProducts')} className="basket__offer-descr">Все товары</div>
                        </div>
                        <div className="basket__offer-row basket__offer-row--without-arrow">
                            {
                                basketProduct.map((item, index) => (
                                    <a className="basket__offer-img-link" href="#" key={index}>
                                        <img className="basket__offer-img" src={item.products.img} />
                                    </a>
                                ))
                            }

                        </div>
                        <div className="basket__offer-row">
                            <div className="basket__offer-col">
                                <div className="basket__offer-subtitle">Большой Спасоглинищевский переулок, 9/1 ст4</div>
                                <div className="basket__offer-subdescr">кв. 3</div>
                            </div>
                        </div>
                        <div onClick={() => goTo("setPayment")} className="basket__offer-row">
                            <div className="basket__offer-subtitle">Способ оплаты</div>
                        </div>
                        <div className="basket__offer-row basket__offer-row--without-arrow basket__offer-row--space-beetwen basket__offer-row--text-small">
                            <div className="basket__offer-col">
                                <div className="basket__offer-subtitle">Сдача с</div>
                            </div>
                            <div className="basket__offer-col">
                                <div className="basket__offer-subdescr">5000&nbsp;₽</div>
                            </div>
                        </div>
                        <div onClick={() => goTo("addPromocode")} className="basket__offer-row">
                            <div className="basket__offer-subtitle">Промокод</div>
                        </div>
                        <div className="basket__offer-row basket__offer-row--without-arrow basket__offer-row--space-beetwen basket__offer-row--text-small">
                            <div className="basket__offer-col">
                                <div className="basket__offer-subtitle">Промокод</div>
                            </div>
                            <div className="basket__offer-col">
                                <div className="basket__offer-subdescr">A24KJ24</div>
                            </div>
                        </div>
                        <div onClick={() => goTo("addBonus")} className="basket__offer-row">
                            <div className="basket__offer-subtitle">Бонусы</div>
                        </div>
                        <div className="basket__offer-row basket__offer-row--without-arrow basket__offer-row--space-beetwen basket__offer-row--text-small">
                            <div className="basket__offer-col">
                                <div className="basket__offer-subtitle">Потрачено бонусов</div>
                            </div>
                            <div className="basket__offer-col">
                                <div className="basket__offer-subdescr">2903&nbsp;₽</div>
                            </div>
                        </div>
                    </div>
                    <div className="basket__offer-container basket__offer-container--receipt basket__offer-container--space-around basket__offer-container--gradient-bottom-to-top">
                        <div className="basket__offer-row basket__offer-row--space-beetwen basket__offer-row--without-arrow">
                            <div className="basket__offer-col">
                                <div className="basket__offer-subtitle">Бонусы</div>
                            </div>
                            <div className="basket__offer-col">
                                <div className="basket__offer-subdescr">0&nbsp;₽</div>
                            </div>
                        </div>
                        <div className="basket__offer-row basket__offer-row--space-beetwen basket__offer-row--without-arrow">
                            <div className="basket__offer-col">
                                <div className="basket__offer-subtitle">Промокод</div>
                            </div>
                            <div className="basket__offer-col">
                                <div className="basket__offer-subdescr">0&nbsp;₽</div>
                            </div>
                        </div>
                        <div className="basket__offer-row basket__offer-row--space-beetwen basket__offer-row--without-arrow">
                            <div className="basket__offer-col">
                                <div className="basket__offer-subtitle">Скидка</div>
                            </div>
                            <div className="basket__offer-col">
                                <div className="basket__offer-subdescr">0&nbsp;₽</div>
                            </div>
                        </div>
                        <div className="basket__offer-row basket__offer-row--space-beetwen basket__offer-row--without-arrow">
                            <div className="basket__offer-col">
                                <div className="basket__offer-subtitle">Итого</div>
                            </div>
                            <div className="basket__offer-col">
                                <div className="basket__offer-subdescr basket__offer-subdescr--black">{basketProduct.reduce((total, basketData) => total + basketData.count * basketData.products.price, 0)}&nbsp;₽</div>
                            </div>
                        </div>
                        <div onClick={() => goTo("orderCompleted")} className="button button--red button--two-lines">Продолжить<br /><span className="button__text--small">к&nbsp;оплате</span></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderConfirmed;