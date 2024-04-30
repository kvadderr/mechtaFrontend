import { useEffect, useState } from "react";
import classNames from "classnames";
import { Product } from "../@types/ententy/Product"
import { useAppDispatch, useAppSelector } from "../store/storeHooks";
import { decreaseCountAndRemoveIfZero, pushToBasket, removePostion, selectBasketProduct } from "../store/slices/authSlice";
import { BasketData } from "../@types/ententy/BasketData";

type ProductCardProps = {
  product: Product;
  openInfo?: () => void;
}

type BasketProductProps = {
  basketProduct: BasketData
}

export const ProductCard = (props: ProductCardProps) => {
  const { product } = props;
  const dispatch = useAppDispatch();
  const basketProduct = useAppSelector(selectBasketProduct);
  const [count, setCount] = useState(0)

  useEffect(() => {
    const existingProductIndex = basketProduct.findIndex(item => item.products.id === product.id);
    setCount(basketProduct[existingProductIndex]?.count)
  }, [basketProduct])

  const addToBasket = () => {
    setCount(count + 1)
    dispatch(pushToBasket(product))
  }

  const decrase = () => {
    if (count > 0) setCount(count - 1)
    dispatch(decreaseCountAndRemoveIfZero(product))
  }

  const quantityClass = classNames('preview-product__quantity', {
    'preview-product__quantity--active': count > 0,
  });

  const minusClass = classNames('preview-product__col preview-product__col--remove-product', {
    'preview-product__col--active': count > 0,
  });

  return (
    <div className="preview-product" data-product-id="102">
      <div className="preview-product__container">
        <div onClick={props.openInfo} className="preview-product__row preview-product__row--image" data-link="product">
          <div className={quantityClass}>{count}</div>
          <img className="preview-product__img" src={product.img} />
        </div>
        <div className="preview-product__row preview-product__row--info">
          <div onClick={props.openInfo} className="preview-product__title" data-link="product">{product.name}</div>
          <div onClick={props.openInfo} className="preview-product__descr"><span className="preview-product__descr-text">{product.value} {product.measurement}</span></div>
          <div className="preview-product__row preview-product__row--controls preview-product__row--mobile">

            <div onClick={decrase} className={minusClass}>
              <div className="preview-product__ctrl preview-product__ctrl--minus"></div>
            </div>

            <div className="preview-product__price">
              <div className="preview-product__price-item preview-product__price-item--new">{product.price}&nbsp;₽</div>
            </div>
            <div onClick={addToBasket} className="preview-product__col preview-product__col--add-product preview-product__col--active">
              <div className="preview-product__ctrl preview-product__ctrl--plus"></div>
            </div>
          </div>
        </div>

        <div className="preview-product__row preview-product__row--controls preview-product__row--desktop">

          <div onClick={decrase} className={minusClass}>
            <div className="preview-product__ctrl preview-product__ctrl--minus"></div>
          </div>

          <div onClick={addToBasket} className="preview-product__col preview-product__col--add-product preview-product__col--active">
            <div className="preview-product__price">
              <div className="preview-product__price-item preview-product__price-item--new">{product.price}&nbsp;₽</div>
            </div>
            <div className="preview-product__ctrl preview-product__ctrl--plus"></div>
          </div>
        </div>
      </div>
    </div>
  )
}


export const BasketProductCard = (props: BasketProductProps) => {
  const { basketProduct } = props;
  const dispatch = useAppDispatch()
  const product = basketProduct.products;

  const decrase = () => {
    dispatch(decreaseCountAndRemoveIfZero(product))
  }

  const addToBasket = () => {
    dispatch(pushToBasket(product))
  }

  const minusBasketClass = classNames('basket-product__controls-col basket-product__controls-col--remove-product', {
    'basket-product__controls-col--active': basketProduct.count > 0,
  });

  return (
    <div className="basket-product" data-product-basket-id="116">
      <div className="basket-product__container">
        <div className="basket-product__col basket-product__col--left"><a className="basket-product__link" href="#" title=""><img className="basket-product__img" src={product.img} alt="" /></a></div>
        <div className="basket-product__col basket-product__col--center">
          <div className="basket-product__title">{product.name}</div>
          <div className="basket-product__subtitle">{product.value}</div>
          <div className="basket-product__controls">
            <div onClick={decrase} className={minusBasketClass}>
              <div className="basket-product__controls-ctrl basket-product__controls-ctrl--minus"></div>
            </div>
            <div className="basket-product__controls-col">
              <div className="basket-product__controls-counter">{basketProduct.count}</div>
            </div>
            <div onClick={addToBasket} className="basket-product__controls-col basket-product__controls-col--add-product basket-product__controls-col--active">
              <div className="basket-product__controls-ctrl basket-product__controls-ctrl--plus"></div>
            </div>
          </div>
        </div>
        <div className="basket-product__col basket-product__col--right">
          <button onClick={() => dispatch(removePostion(product))} className="basket-product__btn basket-product__btn--remove"></button>
          <div className="basket-product__price" data-price="1234">{product.price}&nbsp;₽</div>
        </div>
      </div>
    </div>
  )
}