import { useEffect, useState } from "react";
import { selectBasketProduct, selectCurrentBasketBonus, selectMe, selectMobile, selectPromocode } from "../../store/slices/authSlice";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import PromocodeContainer from "../../components/Basket/PromocodeContainer";
import { PromocodeDto } from "../../@types/ententy/Promocode";
import BonusContainer from "../../components/Basket/BonusContainer";
import { useCreateOrderMutation } from "../../api/orderApi";
import { setCurrentOrder } from "../../store/slices/orderSlice";

type Props = {
  close: () => void;
  goTo: (path: string) => void;
}

const Main = (props: Props) => {

  const { close, goTo } = props;
  const [createOrder, { data: newOrderData }] = useCreateOrderMutation();
  const basketProduct = useAppSelector(selectBasketProduct);
  const currentPromocode = useAppSelector(selectPromocode);
  const currentBasketBonus = useAppSelector(selectCurrentBasketBonus);
  const me = useAppSelector(selectMe)
  const dispatch = useAppDispatch();
  const press = () => {

    const orderProducts = basketProduct.map((item) => {
      return (
        {
          quantity: item.count,
          product_id: item.products.id
        }
      )
    })
    const data = {
      promocode: currentPromocode?.code,
      discount: currentBasketBonus,
      user_id: me.id,
      price: basketProduct.reduce((total, basketData) => total + basketData.count * basketData.products.price, 0),
      orderProducts: orderProducts
    }
    createOrder(data).unwrap();
  }

  useEffect(() => {
    newOrderData && goTo('orderDetail');
  }, [newOrderData])

  return (
    <>
      <div className="popup__row popup__row--title popup__row--gradient-top-to-bottom">
        <div className="basket__address">
          <div className="basket__address-title">Большой Спасоглинищевский переулок, 9/1 ст4</div>
          <div className="basket__address-time">30&nbsp;минут</div>
        </div>
        <div onClick={close} className="popup__btn popup__btn--close"></div>
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
            {currentPromocode && <PromocodeContainer promocode={currentPromocode} />}
            <div onClick={() => goTo("addBonus")} className="basket__offer-row">
              <div className="basket__offer-subtitle">Бонусы</div>
            </div>
            {currentBasketBonus > 0 && <BonusContainer bonus={currentBasketBonus} />}
          </div>
          <div className="basket__offer-container basket__offer-container--receipt basket__offer-container--space-around basket__offer-container--gradient-bottom-to-top">
            <div className="basket__offer-row basket__offer-row--space-beetwen basket__offer-row--without-arrow">
              <div className="basket__offer-col">
                <div className="basket__offer-subtitle">Бонусы</div>
              </div>
              <div className="basket__offer-col">
                <div className="basket__offer-subdescr">{currentBasketBonus}&nbsp;₽</div>
              </div>
            </div>
            <div className="basket__offer-row basket__offer-row--space-beetwen basket__offer-row--without-arrow">
              <div className="basket__offer-col">
                <div className="basket__offer-subtitle">Промокод</div>
              </div>
              <div className="basket__offer-col">
                <div className="basket__offer-subdescr">{currentPromocode?.discount}&nbsp;₽</div>
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
            <div onClick={press} className="button button--red button--two-lines">Продолжить</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main;