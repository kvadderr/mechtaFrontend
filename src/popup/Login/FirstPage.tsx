import { useState } from "react";

type Props = {
  close: () => void;
  goTo: (path: string) => void;
}

const FirstPage = (props: Props) => {

  const { close, goTo } = props;

  const [access, setAccess] = useState(false)
  const [shared, setShared] = useState(false)

  return (
    <>
      <div className="popup__row popup__row--title">
        <div className="popup__btn popup__btn--back popup__btn--hidden"></div>
        <div className="popup__title popup__btn--hidden"></div>
        <div onClick={close} className="popup__btn popup__btn--close"></div>
      </div>
      <div className="popup__row popup__row--sign-in">
        <form className="sign-in">
          <div className="sign-in__container">
            <div className="sign-in__step sign-in__step--active" data-step="first">
              <div className="sign-in__content">
                <button onClick={() => goTo('phoneLogin')} className="button button--gray" id="sign-in-enter">Войти по&nbsp;номеру телефона</button>
              </div>
              <div className="sign-in__footer">
                <div className="sign-in__footer-row">
                  <label className="sign-in__checkbox">
                    <input onChange={() => setAccess(!access)} type="checkbox" checked={access} />
                    <div className="sign-in__checkbox-checkmark"></div>
                    <div className="sign-in__checkbox-body">
                      Получать <a href="https://www.google.com/" target="_blank">предложения об&nbsp;акциях и&nbsp;скидках</a>
                    </div>
                  </label>
                </div>
                <div className="sign-in__footer-row">
                  <label className="sign-in__checkbox">
                    <input onChange={() => setShared(!shared)} type="checkbox" checked={shared} />
                    <div className="sign-in__checkbox-checkmark"></div>
                    <div className="sign-in__checkbox-body">
                      Делиться <a href="https://www.google.com/" target="_blank">данными с&nbsp;партнерами Мечты</a>
                    </div>
                  </label>
                </div>
                <div className="sign-in__footer-row">
                  <div className="sign-in__text">
                    Продолжая авторизацию, вы&nbsp;соглашаетесь
                    <a href="#" target="_blank">с&nbsp;политикой конфиденциальности, условиями сервиса и&nbsp;условиями продажи товаров.</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default FirstPage