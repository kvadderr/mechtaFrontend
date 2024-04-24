import {useState} from "react";
import {useAppSelector} from "../../store/storeHooks.ts";
import {selectBasketProduct} from "../../store/slices/authSlice.ts";


type Props = {
    close: () => void;
    goTo: (path: string) => void;
}


const AddPromocode = (props: Props) => {
    const {close, goTo} = props;
    const [promocode, setPromocode] = useState('');
    const [error, _] = useState(true);
    // const [updMe] = useUpdateMeMutation();
    const basketProduct = useAppSelector(selectBasketProduct);

    const click = () => {
        goTo("main")
        // updMe({email: mail}).unwrap().then(
        //     _ => goTo("settings")
        // )
    }
    return (
        <>
            <>
                <div className="popup__row popup__row--title popup__row--gradient-top-to-bottom">
                    <div onClick={() => goTo('main')} className="popup__btn popup__btn--back"></div>
                    <div className="popup__title">{!basketProduct/*.promocode*/ ? "Добавить промокод" : "Изменить промокод"}</div>
                    <div onClick={close} className="popup__btn popup__btn--close"></div>
                </div>
                <div className="popup__row popup__row--adaptive-height">
                    <div className="popup__row popup__row--centered">
                        <div className="profile__input-simple-wrapper">
                            <div className="profile__input-simple-row">
                                <div className="profile__input-simple-title">Промокод</div>
                                <input className="profile__input-simple-input" type="text" name="" value={promocode}
                                       onChange={(e) => setPromocode(e.target.value)} placeholder=""
                                />
                                {
                                    error && <span className="basket__input-simple-message">Промокод не найден или <br/> истек срок годности промокода</span>
                                }
                            </div>
                        </div>
                    </div>
                    <div onClick={click} className="button button--red">Применить</div>
                </div>
            </>
        </>
    )
}

export default AddPromocode;