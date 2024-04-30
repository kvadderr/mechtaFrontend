import { OrderProduct } from "../../@types/ententy/OrderProduct"

type Props = {
  product: OrderProduct
}


const OrderItemSecond = ({ product }: Props) => {
  return (
    <div className="basket-product basket-product--info">
      <div className="basket-product__container">
        <div className="basket-product__col basket-product__col--left"><a className="basket-product__link" href="#" title=""><img className="basket-product__img" src={product.product.img} alt="" /></a></div>
        <div className="basket-product__col basket-product__col--center">
          <div className="basket-product__title">{product.product.name}</div>
          <div className="basket-product__subtitle">{product.product.value} {product.product.measurement}</div>
          <div className="basket-product__quantity-and-price"><span>{product.quantity} шт</span><span>{product.product.price * product.quantity}&nbsp;₽</span></div>
        </div>
      </div>
    </div>
  )
}

export default OrderItemSecond