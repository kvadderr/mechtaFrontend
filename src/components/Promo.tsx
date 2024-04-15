import { useState } from "react";

type Props = {
  openLogin: () => void;
  openAddress: () => void;
}

const Promo = (props: Props) => {
  const { openLogin } = props;
  const [isMap, setIsMap] = useState(false)

  const Promo = () => {
    return (
      <div className="sidebar__container sidebar__container--active" data-sidebar="cover">
        <div className="sidebar__cover">
          <div className="sidebar__title">Мечта&nbsp;&mdash; онлайн‑магазин с&nbsp;доставкой
            от&nbsp;15&nbsp;минут.<br />Работаем в&nbsp;2&nbsp;городах</div>
          <div className="sidebar__btns-wrapper">
            <div onClick={() => setIsMap(true)} className="button button--red" data-sidebar="map">Выбрать адрес доставки</div>
            <div onClick={openLogin} className="button button--gray">Войти</div>
          </div>
        </div><img className="sidebar__bg" src="https://mechta-crimea.ru/test/img/sidebar/1.webp" alt="" />
      </div>
    )
  }

  const MapPromo = () => {
    return (
      <div className="sidebar__container sidebar__container--active" data-sidebar="map">
        <div className="sidebar__map">
          <div className="sidebar__confirm-address">
            <div className="sidebar__confirm-address-title">Ваш город Москва?</div>
            <div className="sidebar__confirm-address-text">Товары и&nbsp;акции могут отличаться.<br />Выберите точный адрес</div>
            <div className="sidebar__confirm-address-btns">
              <div onClick={() => setIsMap(false)} className="button button--red button--small">Да, верно</div>
              <div onClick={props.openAddress} className="button button--gray button--small" data-link="select-delivery-address">Нет, другой</div>
            </div>
          </div>
        </div><img className="sidebar__bg" src="https://mechta-crimea.ru/test/img/sidebar/2.webp" alt="" />
      </div>
    )
  }
  return (
    <aside className="sidebar sidebar--rounded">
      {isMap ? <MapPromo /> : <Promo />}

    </aside>
  )
}

export default Promo