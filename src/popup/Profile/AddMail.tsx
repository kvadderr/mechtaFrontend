import {useState} from "react";
import {useUpdateMeMutation} from "../../api/authApi";
import {useAppSelector} from "../../store/storeHooks.ts";
import {selectMe} from "../../store/slices/authSlice.ts";


type Props = {
    close: () => void;
    goTo: (path: string) => void;
}


const AddMail = (props: Props) => {
    const {close, goTo} = props;
    const [mail, setMail] = useState('');
    const [updMe] = useUpdateMeMutation();
    const me = useAppSelector(selectMe);

    const click = () => {
        updMe({email: mail}).unwrap().then(
            _ => goTo("settings")
        )
    }
    return (
        <>
            <div className="popup__row popup__row--title">
                <div onClick={() => goTo('settings')} className="popup__btn popup__btn--back"></div>
                <div className="popup__title">{!me?.email ? "Добавить почту" : "Изменить почту"}</div>
                <div onClick={close} className="popup__btn popup__btn--close"></div>
            </div>
            <div className="popup__row popup__row--centered">
                <div className="profile__input-simple-wrapper">
                    <div className="profile__input-simple-row">
                        <div className="profile__input-simple-title">Почта</div>
                        <input className="profile__input-simple-input" type="text" name="" value={mail}
                               onChange={(e) => setMail(e.target.value)} placeholder=""/>
                    </div>
                </div>
            </div>
            <div onClick={click} className="button button--red">Применить</div>
        </>
    )
}

export default AddMail