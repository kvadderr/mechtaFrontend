import { logout } from "../../store/slices/authSlice";
import { useAppDispatch } from "../../store/storeHooks";

type Props = {
  close: () => void;
  goTo: (path: string) => void;
}

const Exit = (props: Props) => {

  const { close, goTo } = props;
  const dispatch = useAppDispatch()

  const onPress = () => {
    dispatch(logout())
    close();
  }
  return (
    <>
      <div className="popup__row popup__row--title">
        <div onClick={() => goTo('main')} className="popup__btn popup__btn--back"></div>
        <div className="popup__title popup__btn--hidden"></div>
        <div onClick={close} className="popup__btn popup__btn--close"></div>
      </div>
      <div className="popup__row popup__row--profile">
        <form className="profile profile--question">
          <div className="profile__container">
            <div className="profile__question">
              <div className="profile__question-row">
                <div className="profile__question-title">Уходите?</div>
              </div>
              <div className="profile__question-row">
                <button onClick={onPress} className="button button--gray" id="profile-exit-yes">Ухожу</button>
                <button onClick={() => goTo('main')} className="button button--red" id="profile-exit-no">Нет</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Exit