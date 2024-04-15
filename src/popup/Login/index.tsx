import { useState } from "react";

import classNames from "classnames";
import FirstPage from "./FirstPage";
import PhoneInput from "./PhoneInput";
import CodeInput from "./CodeInput";

type Props = {
  isOpen: boolean,
  close: () => void
}

const Login = (props: Props) => {

  const { isOpen, close } = props;
  const [currentState, setCurrentState] = useState('main');

  const modalClass = classNames('popup', {
    'popup--sign-in popup--active': isOpen,
  });


  const closePress = () => {
    setCurrentState('main');
    close()
  }

  const Render = () => {
    switch (currentState) {
      case 'main':
        return <FirstPage close={closePress} goTo={setCurrentState} />
      case 'phoneLogin':
        return <PhoneInput close={closePress} goTo={setCurrentState} />
      case 'codeInput':
        return <CodeInput close={closePress} goTo={setCurrentState} />
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

export default Login