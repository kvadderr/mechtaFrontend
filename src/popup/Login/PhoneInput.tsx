import { useState } from "react";
import InputMask from 'react-input-mask';
import { useAppDispatch } from "../../store/storeHooks";

import LoadingButton from "../../shared/Button/LoadingButton";
import { useSignMutation } from "../../api/authApi";
import { setMobile } from "../../store/slices/authSlice";

type Props = {
  close: () => void;
  goTo: (path: string) => void;
}

const PhoneInput = (props: Props) => {

  const { close, goTo } = props;
  const dispatch = useAppDispatch();
  const [sign, { isLoading }] = useSignMutation()

  const [phone, setPhone] = useState(' ');
  const onPress = () => {
    sign({ phone }).unwrap()
    dispatch(setMobile(phone))
    goTo('codeInput')
  }



  return (
    <>
      <div className="popup__row popup__row--title">
        <div onClick={() => goTo('main')} className="popup__btn popup__btn--back"></div>
        <div className="popup__title popup__btn--hidden"></div>
        <div onClick={close} className="popup__btn popup__btn--close"></div>
      </div>
      <div className="popup__row popup__row--sign-in">
        <div className="sign-in">
          <div className="sign-in__container">
            <div className="sign-in__step sign-in__step--active" data-step="second">
              <div className="sign-in__content sign-in__content--column">
                <div className="sign-in__content-row">
                  <div className="sign-in__title">Телефон</div>
                  <InputMask
                    mask="+7 (999) 999-99-99"
                    maskChar=""
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="sign-in__input"
                    id="sign-in-phone"
                    name="sign-in-phone"
                    inputMode='numeric'
                    placeholder=""
                  />
                </div>
                <div className="sign-in__content-row">
                  <button onClick={onPress} className="button button--red" id="sign-in-get-code" disabled={phone.length != 18}>
                    {isLoading ? <LoadingButton /> : "Получить код"}
                  </button>
                </div>
              </div>
              <div className="sign-in__footer">
                <div className="sign-in__footer-row">
                  <div className="sign-in__text">
                    Продолжая авторизацию, вы&nbsp;соглашаетесь
                    <a href="#" target="_blank">с&nbsp;политикой конфиденциальности, условиями сервиса и&nbsp;условиями продажи товаров.</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PhoneInput