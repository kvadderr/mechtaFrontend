import {useEffect, useState} from "react";
import {useAppSelector} from "../../store/storeHooks.ts";
import {selectBasketProduct, selectMe} from "../../store/slices/authSlice.ts";


type Props = {
    close: () => void;
    goTo: (path: string) => void;
}


const SetPayment = (props: Props) => {
    const {close, goTo} = props;
    const [bonus, setBonus] = useState<number>(0);
    const [error, setError] = useState(false);
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
                    <div className="popup__title">{!basketProduct/*.payment*/ ? "Оплата" : "Изменить оплату"}</div>
                    <div onClick={close} className="popup__btn popup__btn--close"></div>
                </div>
                <div className="popup__row popup__row--adaptive-height">
                    <div className="popup__row popup__row--centered">
                        <div className="basket__payment">
                            <label className="basket__checkbox">
                                <div className="basket__checkbox-body">Безналичный расчет</div>
                                <input type="radio" name="payment-list" checked={true} />
                                <div className="basket__checkbox-checkmark"></div>
                            </label>
                            <label className="basket__checkbox">
                                <div className="basket__checkbox-body">Оплата наличными курьеру</div>
                                <input type="radio" name="payment-list" checked={true} />
                                <div className="basket__checkbox-checkmark"></div>
                            </label>
                            <label className="basket__checkbox">
                                <div className="basket__checkbox-body">Оплата картой курьеру</div>
                                <input type="radio" name="payment-list" checked={true} />
                                <div className="basket__checkbox-checkmark"></div>
                            </label>
                        </div>
                        <div className="profile__input-simple-wrapper">
                            <div className="profile__input-simple-row">
                            </div>
                        </div>
                    </div>
                    <div onClick={click} className="button button--red">Применить</div>
                </div>
            </>
        </>
    )
}

export default SetPayment;