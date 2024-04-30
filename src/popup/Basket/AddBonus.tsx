import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../store/storeHooks.ts";
import {selectBasketProduct, selectCurrentBasketBonus, selectMe, setCurrentBasketBonus} from "../../store/slices/authSlice.ts";


type Props = {
    close: () => void;
    goTo: (path: string) => void;
}


const AddBonus = (props: Props) => {
    const {close, goTo} = props;
    const dispatch = useAppDispatch();
    const [bonus, setBonus] = useState<number>(0);
    const [error, setError] = useState(false);
    // const [updMe] = useUpdateMeMutation();
    const basketProduct = useAppSelector(selectBasketProduct);
    const me = useAppSelector(selectMe);

    const click = () => {
        !error && dispatch(setCurrentBasketBonus(bonus))
        goTo("main")
        // updMe({email: mail}).unwrap().then(
        //     _ => goTo("settings")
        // )
    }

    useEffect(() => {
        setError(me.bonus < bonus);
    }, [bonus]);

    return (
        <>
            <>
                <div className="popup__row popup__row--title popup__row--gradient-top-to-bottom">
                    <div onClick={() => goTo('main')} className="popup__btn popup__btn--back"></div>
                    <div className="popup__title">{!basketProduct/*.bonus*/ ? "Бонус" : "Изменить бонусa"}</div>
                    <div onClick={close} className="popup__btn popup__btn--close"></div>
                </div>
                <div className="popup__row popup__row--adaptive-height">
                    <div className="popup__row popup__row--centered">
                        <div className="profile__input-simple-wrapper">
                            <div className="profile__input-simple-row">
                                <div className="profile__input-simple-title">Мои бонусы</div>
                                <div className="basket__input-simple-input basket__input-simple-input--border-none">{me.bonus}</div>
                            </div>
                            <div className="profile__input-simple-row">
                                <div className="profile__input-simple-title">Бонус</div>
                                <input className="profile__input-simple-input" type="text" name="" value={bonus}
                                       onChange={(e) => {
                                           if (!e.target.value) {
                                               setBonus(0)
                                               return;
                                           }
                                           setBonus(parseInt(e.target.value ?? 0))
                                       }} placeholder=""
                                />
                                {
                                    error && <span className="basket__input-simple-message">Укажите количество бонусов, <br/> не превышающих доступный баланс</span>
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

export default AddBonus;