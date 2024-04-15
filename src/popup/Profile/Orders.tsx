
type Props = {
  close: () => void;
  goTo: (path: string) => void;
}

const Orders = (props: Props) => {

  const { close, goTo } = props;

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
              <div className="profile__order-title"><span>Ноябрь</span></div><a className="profile__order-item" href="#">
                <div className="profile__order-item-col profile__order-item-col--left">
                  <div className="profile__order-item-img-wrapper"><img className="profile__order-item-img" src="img/product/1.webp" alt="" /></div>
                  <div className="profile__order-item-img-wrapper"><img className="profile__order-item-img" src="img/product/2.webp" alt="" /></div>
                  <div className="profile__order-item-img-wrapper"><img className="profile__order-item-img" src="img/product/3.webp" alt="" /></div>
                  <div className="profile__order-item-img-wrapper"></div>
                </div>
                <div className="profile__order-item-col profile__order-item-col--right">
                  <div className="profile__order-item-title profile__order-item-title--cancelled">
                    <div className="profile__order-item-title-icon"></div>Заказ отменен
                  </div>
                  <div className="profile__order-item-descr"><span>208&nbsp;₽</span><span>28&nbsp;сентября 2023&nbsp;в 12:16</span></div>
                </div></a><a className="profile__order-item" href="#">
                <div className="profile__order-item-col profile__order-item-col--left">
                  <div className="profile__order-item-img-wrapper"><img className="profile__order-item-img" src="img/product/2.webp" alt="" /></div>
                  <div className="profile__order-item-img-wrapper"></div>
                  <div className="profile__order-item-img-wrapper"></div>
                  <div className="profile__order-item-img-wrapper"></div>
                </div>
                <div className="profile__order-item-col profile__order-item-col--right">
                  <div className="profile__order-item-title profile__order-item-title--fulfilled">
                    <div className="profile__order-item-title-icon"></div>Заказ выполнен
                  </div>
                  <div className="profile__order-item-descr"><span>208&nbsp;₽</span><span>28&nbsp;сентября 2023&nbsp;в 12:16</span></div>
                </div></a>
            </div>
            <div className="profile__order-list">
              <div className="profile__order-title"><span>Октябрь</span><span>2023</span></div><a className="profile__order-item" href="#">
                <div className="profile__order-item-col profile__order-item-col--left">
                  <div className="profile__order-item-img-wrapper"><img className="profile__order-item-img" src="img/product/1.webp" alt="" /></div>
                  <div className="profile__order-item-img-wrapper"><img className="profile__order-item-img" src="img/product/2.webp" alt="" /></div>
                  <div className="profile__order-item-img-wrapper"><img className="profile__order-item-img" src="img/product/3.webp" alt="" /></div>
                  <div className="profile__order-item-img-wrapper"><img className="profile__order-item-img" src="img/product/4.webp" alt="" /></div>
                </div>
                <div className="profile__order-item-col profile__order-item-col--right">
                  <div className="profile__order-item-title profile__order-item-title--awaiting-payment">
                    <div className="profile__order-item-title-icon"></div>Ожидает оплаты
                  </div>
                  <div className="profile__order-item-descr"><span>208&nbsp;₽</span><span>28&nbsp;сентября 2023&nbsp;в 12:16</span></div>
                </div></a><a className="profile__order-item" href="#">
                <div className="profile__order-item-col profile__order-item-col--left">
                  <div className="profile__order-item-img-wrapper"><img className="profile__order-item-img" src="img/product/1.webp" alt="" /></div>
                  <div className="profile__order-item-img-wrapper"><img className="profile__order-item-img" src="img/product/2.webp" alt="" /></div>
                  <div className="profile__order-item-img-wrapper"><img className="profile__order-item-img" src="img/product/3.webp" alt="" /></div>
                  <div className="profile__order-item-img-wrapper"><img className="profile__order-item-img" src="img/product/4.webp" alt="" /></div>
                </div>
                <div className="profile__order-item-col profile__order-item-col--right">
                  <div className="profile__order-item-title profile__order-item-title--payment-error">
                    <div className="profile__order-item-title-icon"></div>Ошибка оплаты
                  </div>
                  <div className="profile__order-item-descr"><span>208&nbsp;₽</span><span>28&nbsp;сентября 2023&nbsp;в 12:16</span></div>
                </div></a><a className="profile__order-item" href="#">
                <div className="profile__order-item-col profile__order-item-col--left">
                  <div className="profile__order-item-img-wrapper"><img className="profile__order-item-img" src="img/product/1.webp" alt="" /></div>
                  <div className="profile__order-item-img-wrapper"><img className="profile__order-item-img" src="img/product/2.webp" alt="" /></div>
                  <div className="profile__order-item-img-wrapper"><img className="profile__order-item-img" src="img/product/3.webp" alt="" /></div>
                  <div className="profile__order-item-img-wrapper"><img className="profile__order-item-img" src="img/product/4.webp" alt="" /></div>
                </div>
                <div className="profile__order-item-col profile__order-item-col--right">
                  <div className="profile__order-item-title profile__order-item-title--awaiting-confirmation">
                    <div className="profile__order-item-title-icon"></div>Ожидает подтверждения
                  </div>
                  <div className="profile__order-item-descr"><span>208&nbsp;₽</span><span>28&nbsp;сентября 2023&nbsp;в 12:16</span></div>
                </div></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Orders