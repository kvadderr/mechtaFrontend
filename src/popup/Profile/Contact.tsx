type Props = {
  close: () => void;
  goTo: (path: string) => void;
}

const Contact = (props: Props) => {

  const { close, goTo } = props;

  return (
    <>
      <div className="popup__row popup__row--title">
        <div onClick={() => goTo('main')} className="popup__btn popup__btn--back"></div>
        <div onClick={close} className="popup__btn popup__btn--close"></div>
      </div>
      <div className="popup__row popup__row--profile">
        <div className="profile profile--contact-us">
          <div className="profile__container">
            <div className="profile__links-wrapper"><a className="profile__link" href="https://t.me/@apgrayedd">Telegram</a><a className="profile__link" href="tel:+74951234567">+7 (495) 123-45-67</a></div>
            <form className="profile__feedback-form">
              <div className="profile__feedback-form-row">
                <label className="profile__feedback-form-label">Имя</label>
                <div className="profile__feedback-form-input-text-wrapper">
                  <input className="profile__feedback-form-input-text" id="profile-name" type="text" name="" value="" placeholder="Введите имя" />
                </div>
              </div>
              <div className="profile__feedback-form-row">
                <label className="profile__feedback-form-label">Номер телефона</label>
                <div className="profile__feedback-form-input-text-wrapper">
                  <input className="profile__feedback-form-input-text" id="profile-phone-number" type="text" name="" value="" placeholder="+7 (912) 345-67-89" />
                </div>
              </div>
              <div className="profile__feedback-form-row">
                <label className="profile__feedback-form-label">Сообщение</label>
                <div className="profile__feedback-form-input-text-wrapper">
                  <input className="profile__feedback-form-input-text" id="profile-message" type="text" name="" value="" placeholder="Введите текст сообщения" />
                </div>
              </div>
              <div className="profile__feedback-form-row">
                <button className="button button--red" id="send-in-support" disabled>Отправить</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact