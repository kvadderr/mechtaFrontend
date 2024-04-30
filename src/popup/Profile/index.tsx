import classNames from "classnames";

import Main from "./Main";
import { useState } from "react";
import Orders from "./Orders";
import Address from "./Address";
import Settings from "./Settings";
import Exit from "./Exit";
import Contact from "./Contact";
import AddMail from "./AddMail";
import { useGetMyOrdersQuery } from "../../api/orderApi";
import { useAppSelector } from "../../store/storeHooks";
import { selectMe } from "../../store/slices/authSlice";
import OrderDetail from "./OrderDetail";

type Props = {
  isOpen: boolean,
  close: () => void
}

const Profile = (props: Props) => {

  const { isOpen, close } = props;
  const me = useAppSelector(selectMe)
  useGetMyOrdersQuery(me?.id);

  const [currentState, setCurrentState] = useState('main');

  const closePress = () => {
    setCurrentState('main');
    close()
  }

  const Render = () => {
    switch (currentState) {
      case 'main':
        return <Main close={closePress} goTo={setCurrentState} />
      case 'orders':
        return <Orders close={closePress} goTo={setCurrentState} />
      case 'address':
        return <Address close={closePress} goTo={setCurrentState} />
      case 'settings':
        return <Settings close={closePress} goTo={setCurrentState} />
      case 'exit':
        return <Exit close={closePress} goTo={setCurrentState} />
      case 'contact':
        return <Contact close={closePress} goTo={setCurrentState} />
      case 'addMail':
        return <AddMail close={closePress} goTo={setCurrentState} />
      case 'orderDetail':
        return <OrderDetail close={closePress} goTo={setCurrentState}/>
      default:
        break;
    }
  }

  const modalClass = classNames('popup', {
    'popup--profile popup--default popup--active': isOpen,
    'popup--align-column popup--addresses': currentState === 'address',
    'popup--align-column': currentState === 'addMail'
  });

  return (
    <div className={modalClass} data-popup="profile">
      <div className="popup__container">
        <Render />
      </div>
      <div onClick={close} className="popup__overlay"></div>
    </div>
  )
}

export default Profile