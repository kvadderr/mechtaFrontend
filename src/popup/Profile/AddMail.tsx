import { useState } from "react";
import { useUpdateMeMutation } from "../../api/authApi";


type Props = {
  close: () => void;
  goTo: (path: string) => void;
}


const AddMail = (props: Props) => {
  const { close, goTo } = props;
  const [mail, setMail] = useState('');
  const [updMe] = useUpdateMeMutation()

  const click = () => {
    updMe({ email: mail }).unwrap()
  }
  return (
    <>
      <div className="popup__row popup__row--title">
        <div onClick={() => goTo('settings')} className="popup__btn popup__btn--back"></div>
        <div className="popup__title">Добавить почту</div>
        <div onClick={close} className="popup__btn popup__btn--close"></div>
      </div>
      <div className="popup__row popup__row--centered">
        <div className="profile__input-simple-wrapper">
          <div className="profile__input-simple-row">
            <div className="profile__input-simple-title">Почта</div>
            <input className="profile__input-simple-input" type="text" name="" value={mail} onChange={(e) => setMail(e.target.value)} placeholder="" />
          </div>
        </div>
      </div>
      <div onClick={click} className="button button--red">Применить</div>
    </>
  )
}

export default AddMail