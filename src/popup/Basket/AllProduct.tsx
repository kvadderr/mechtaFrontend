import { selectBasketProduct, selectMobile } from "../../store/slices/authSlice";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import { pushToBasket, decreaseCountAndRemoveIfZero } from "../../store/slices/authSlice";
import { Product } from "../../@types/ententy/Product";
type Props = {
  close: () => void;
  goTo: (path: string) => void;
}

const AllProduct = (props: Props) => {

  const { close, goTo } = props;
  const basketProduct = useAppSelector(selectBasketProduct);
  const dispatch = useAppDispatch();

  const addToBasket = (product: Product) => {
    dispatch(pushToBasket(product))
  }

  const decrase = (product: Product) => {
    dispatch(decreaseCountAndRemoveIfZero(product))
  }


  return (
    <>
      <div className="popup__row popup__row--title popup__row--gradient-top-to-bottom">
        <div onClick={() => goTo('main')} className="popup__btn popup__btn--back"></div>
        <div className="popup__title">Ваш заказ</div>
        <div onClick={close} className="popup__btn popup__btn--close"></div>
      </div>
      <div className="popup__row">
        <div className="basket__offer">
          <div className="basket__offer-container">
            {basketProduct.map((item, index) => {
              return (
                <div key={index} className="basket-product" data-product-basket-id="1">
                  <div className="basket-product__container">
                    <div className="basket-product__col basket-product__col--left"><a className="basket-product__link" href="#" title=""><img className="basket-product__img" src={item.products.img} alt="" /></a></div>
                    <div className="basket-product__col basket-product__col--center">
                      <div className="basket-product__title">{item.products.name}</div>
                      <div className="basket-product__subtitle">{item.products.value + " " + item.products.measurement}</div>
                      <div className="basket-product__controls">
                        <div className="basket-product__controls-col basket-product__controls-col--remove-product">
                          <div onClick={() => decrase(item.products)} className="basket-product__controls-ctrl basket-product__controls-ctrl--minus"></div>
                        </div>
                        <div className="basket-product__controls-col">
                          <div className="basket-product__controls-counter">{item.count}</div>
                        </div>
                        <div className="basket-product__controls-col basket-product__controls-col--add-product basket-product__controls-col--active">
                          <div onClick={() => addToBasket(item.products)} className="basket-product__controls-ctrl basket-product__controls-ctrl--plus"></div>
                        </div>
                      </div>
                    </div>
                    <div className="basket-product__col basket-product__col--right">
                      <button className="basket-product__btn basket-product__btn--remove"></button>
                      <div className="basket-product__price" data-price="1234">{item.products.price * item.count}&nbsp;₽</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default AllProduct;