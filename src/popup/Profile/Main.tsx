import { selectMe, selectMobile } from "../../store/slices/authSlice";
import { useAppSelector } from "../../store/storeHooks";

type Props = {
  close: () => void;
  goTo: (path: string) => void;
}

const Main = (props: Props) => {

  const { close, goTo } = props;
  const mobile = useAppSelector(selectMobile);
  const me = useAppSelector(selectMe)
  return (
    <>
      <div className="popup__row popup__row--title">
        <div className="profile__header profile__header--column">
          <div className="profile__header-title">Как Вас зовут?</div><a className="profile__header-descr" href="tel:+79103456789">{mobile}</a>
        </div>
        <div onClick={close} className="popup__btn popup__btn--close"></div>
      </div>
      <div className="popup__row popup__row--profile-special">
        <div className="profile profile--main">
          <div className="profile__container">
            <div className="profile__header">
              <div className="profile__header-bonuses">
                <div className="profile__header-bonuses-col">
                  <div className="profile__header-bonuses-title">Бонусы</div>
                  <div className="profile__header-bonuses-title">{me?.bonus}</div>
                  <div className="profile__header-bonuses-descr">1&nbsp;бонус = 1&nbsp;₽</div>
                </div>
                <div className="profile__header-bonuses-col">
                  <div className="profile__header-bonuses-title">Кешбэк</div>
                  <div className="profile__header-bonuses-title">5&nbsp;%</div>
                  <div className="profile__header-bonuses-descr">5%&nbsp;от&nbsp;заказа</div>
                </div>
              </div>
            </div>
            <div className="profile__nav">
              <a onClick={() => goTo('orders')} className="profile__nav-item">
                <span className="icon icon--edit-2"></span>
                <span>Заказы</span>
              </a>
              <a onClick={() => goTo('address')} className="profile__nav-item" href="#">
                <span className="icon icon--home"></span>
                <span>Адреса</span>
              </a>
              <a onClick={() => goTo('settings')} className="profile__nav-item" href="#">
                <span className="icon icon--settings"></span>
                <span>Настройки</span>
              </a>
            </div>
            <a onClick={() => goTo('contact')} className="button button--gray" href="#">Связаться с&nbsp;нами</a>
            <a onClick={() => goTo('exit')} className="button button--gray" href="#">Выйти</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main