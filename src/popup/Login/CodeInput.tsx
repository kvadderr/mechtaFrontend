import { useState, useRef, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import { login, selectMobile } from "../../store/slices/dataSlice";

type Props = {
  close: () => void;
  goTo: (path: string) => void;
}

const CodeInput = (props: Props) => {

  const { close, goTo } = props;
  const dispatch = useAppDispatch();
  const phone = useAppSelector(selectMobile)
  const [codes, setCodes] = useState(['', '', '', '']);
  const inputsRef = [useRef(), useRef(), useRef(), useRef()];

  const handleChange = (index: number, e: any) => {
    const { value } = e.target;
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newCodes = [...codes];
      newCodes[index] = value;
      setCodes(newCodes);
      if (value !== '' && index < 3 && inputsRef[index + 1]?.current) {
        inputsRef[index + 1].current.focus();
      }
    }
  };

  useEffect(() => {
    const code = codes.join('')
    if (code.length >= 4 ) {
      dispatch(login());
      close();
    }
  }, [codes])

  return (
    <>
      <div className="popup__row popup__row--title">
        <div onClick={() => goTo('phoneLogin')} className="popup__btn popup__btn--back"></div>
        <div className="popup__title">{phone}</div>
        <div onClick={close} className="popup__btn popup__btn--close"></div>
      </div>
      <div className="popup__row popup__row--sign-in">
        <form className="sign-in">
          <div className="sign-in__container">
            <div className="sign-in__step sign-in__step--active" data-step="third">
              <div className="sign-in__content sign-in__content--column">
                <div className="sign-in__content-row">
                  <div className="sign-in__title">Код из&nbsp;СМС</div>
                  <div className="sign-in__input-wrapper">
                    {codes.map((code, index) => (
                      <input
                        key={index}
                        className="sign-in__input-num-code"
                        type="text"
                        inputMode="numeric"
                        pattern="\d{1}"
                        maxLength={1}
                        value={code}
                        ref={inputsRef[index]}
                        onChange={(e) => handleChange(index, e)}
                      />
                    ))}
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

export default CodeInput