import classNames from 'classnames';

type Props = {
  isOpen: boolean,
  close: () => void
}

const SelectAddress = ({ isOpen, close }: Props) => {

  const modalClass = classNames('popup popup--big', {
    'popup--active': isOpen,
  });


  return (
    <div className={modalClass} data-popup="select-delivery-address">
      <div className="popup__container">
        <div className="map">
          <div className="map__container">
            <div className="map__header">
              <div onClick={close} className="map__btn map__btn--close"></div>
            </div>
            <div className="map__controls">
              <div className="map__btn map__btn--plus"></div>
              <div className="map__btn map__btn--minus"></div>
            </div>
            <div className="map__content map__content--bg-gradient">
              <div className="button button--red" data-link="add-address">Ввести адрес</div>
            </div>
          </div><img className="map__img" src="https://mechta-crimea.ru/test/img/sidebar/2.webp" alt="" />
        </div>
      </div>
      <div onClick={close} className="popup__overlay"></div>
    </div>

  )
}

export default SelectAddress