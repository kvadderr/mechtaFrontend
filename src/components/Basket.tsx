import { useEffect, useState } from "react"
import { BasketProductCard } from "../shared/Card"
import { selectBasketProduct } from "../store/slices/authSlice"
import { useAppSelector } from "../store/storeHooks"
import classNames from "classnames"

type Props = {
  openProfile: () => void;
  openBasket: () => void;
}

type BasketSumProps = {
  totalPrice: number
}
const EmptyBasket = () => {
  return (
    <div className="basket__info">
      <div className="icon icon--basket"></div>
      <div className="basket__info-text">Соберите корзину,<br />а&nbsp;мы&nbsp;всё быстро привезём</div>
    </div>
  )
}

const BasketSum = ({ totalPrice }: BasketSumProps) => {
  return (
    <div className="basket__sum">
      <div className="basket__sum-total">Итого</div>
      <div className="basket__sum-price">{totalPrice}&nbsp;₽</div>
    </div>
  )
}

const Basket = (props: Props) => {

  const basketProduct = useAppSelector(selectBasketProduct);
  const [totalPrice, setTotalPrice] = useState<number>(0)

  useEffect(() => {
    const calculateTotalPrice = () => {
      let totalPrice = 0;
      basketProduct.forEach(item => {
        totalPrice += item.products.price * item.count;
      });

      return totalPrice;
    };
    setTotalPrice(calculateTotalPrice)
  }, [basketProduct])


  const basketContainerClass = classNames('basket__container', {
    'basket__container--align-center': basketProduct.length <= 0,
  });

  const press = () => {
    console.log('pres', props.openBasket);
    props.openBasket()
  }

  return (
    <>
      <div onClick={props.openProfile} className="button button--white button--icon button--icon-before"><span className="icon icon--user-circle"></span>Профиль</div>
      <div className="basket">
        <div className={basketContainerClass}>
          <div className="basket__row basket__row--top">
            <div className="basket__address">
              <div onClick={press} className="basket__address-title">Большой Спасоглинищевский переулок, 9/1 ст4</div>
              <div className="basket__address-time">30&nbsp;минут</div>
            </div>
          </div>
          <div className="basket__row basket__row--middle">
            {basketProduct.length > 0 ? basketProduct.map((item, index) => <BasketProductCard basketProduct={item} key={index} />) : <EmptyBasket />}
          </div>
          <div className="basket__row basket__row--bottom basket__row--mobile-to-bottom">
            {totalPrice > 0 && <BasketSum totalPrice={totalPrice} />}
            <button onClick={press} className="button button--red" id="openOrders" disabled={totalPrice <= 1000}>{totalPrice <= 1000 ? "Заказ от 1000 ₽" : "Продолжить"}</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Basket