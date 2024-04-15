type Props = {
  close: () => void;
  goTo: (path: string) => void;
}


const Settings = (props: Props) => {
  const { close, goTo } = props;
  return (
    <>
      <div className="popup__row popup__row--title">
        <div onClick={() => goTo('main')} className="popup__btn popup__btn--back"></div>
        <div className="popup__title">Настройки</div>
        <div onClick={close} className="popup__btn popup__btn--close"></div>
      </div>
      <div className="popup__row popup__row--profile">
        <div className="profile profile--settings">
          <div className="profile__container">
            <div className="profile__header">
              <div className="profile__header-title profile__header-title--space-around">Профиль</div>
            </div>
            <div className="profile__nav profile__nav--small"><a className="profile__nav-item" href="#"><span className="icon icon--phone"></span><span>+7 (900) 011-39-21</span></a><a className="profile__nav-item" href="#"><span className="icon icon--email"></span><span>Добавить почту</span></a>
              <div className="profile__nav-item"><span className="icon icon--chain"></span><span>Добавить Telegram</span></div><a className="profile__nav-item" href="#"><span className="icon icon--bell"></span><span>Настроить уведомления</span></a>
            </div>
            <div className="profile__btn profile__btn--remove-account">Удалить аккаунт</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Settings