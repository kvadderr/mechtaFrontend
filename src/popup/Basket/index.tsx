import { useState } from "react";

import classNames from "classnames";
import Main from "./Main";
import AllProduct from "./AllProduct";
import AddPromocode from "./AddPromocode.tsx";
import AddBonus from "./AddBonus.tsx";
import SetPayment from "./SetPayment.tsx";
import OrderConfirmed from "./OrderConfirmed.tsx";
import OrderCompleted from "./OrderCompleted.tsx";
import OrderDetail from "./OrderDetail.tsx";

type Props = {
    isOpen: boolean,
    close: () => void
}

const Basket = (props: Props) => {

    const { isOpen, close } = props;
    const [currentState, setCurrentState] = useState('main');

    const modalClass = classNames('popup', {
        'popup--basket popup--title-big popup--active': isOpen,
    });


    const closePress = () => {
        setCurrentState('main');
        close()
    }

    const Render = () => {
        switch (currentState) {
            case 'main':
                return <Main close={closePress} goTo={setCurrentState} />
            case 'allProducts':
                return <AllProduct close={closePress} goTo={setCurrentState} />
            case 'addPromocode':
                return <AddPromocode close={closePress} goTo={setCurrentState} />
            case 'addBonus':
                return <AddBonus close={closePress} goTo={setCurrentState} />
            case 'setPayment':
                return <SetPayment close={closePress} goTo={setCurrentState} />
            case 'orderConfirmed':
                return <OrderConfirmed close={closePress} goTo={setCurrentState} />
            case 'orderCompleted':
                return <OrderCompleted close={closePress} goTo={setCurrentState} />
            case 'orderWaiting':
                return <OrderCompleted close={closePress} goTo={setCurrentState} />
            case 'orderDetail':
                return <OrderDetail close={closePress} goTo={setCurrentState} />
            default:
                break;
        }
    }

    return (
        <div className={modalClass} data-popup="sign-in">
            <div className="popup__container">
                <Render />
            </div>
            <div onClick={close} className="popup__overlay"></div>
        </div>
    )
}

export default Basket