import classNames from 'classnames';

type Props = {
  isOpen: boolean,
  close: () => void
}

const Faq = (props: Props) => {
  const { isOpen, close } = props;

  const modalClass = classNames('popup', {
    'popup--active': isOpen,
  });

  return (
    <div className={modalClass} data-popup="faq">
      <div className="popup__container">
        <div className="popup__row popup__row--title">
          <div className="popup__title">Ответы на&nbsp;вопросы</div>
          <div onClick={close} className="popup__btn popup__btn--close"></div>
        </div>
        <div className="popup__row">
          <div className="faq">
            <div className="faq__container">
              <div className="faq__item faq__item--active">
                <div className="faq__item-title">Как всё работает?</div>
                <div className="faq__item-content">Заказы везём на велосипедах из даркстора в вашем районе. Радиус доставки —
                  1,5 км, поэтому получается так быстро.</div>
              </div>
              <div className="faq__item">
                <div className="faq__item-title">Заказы везём на велосипедах из даркстора в вашем районе. Радиус доставки —
                  1,5 км, поэтому получается так быстро.</div>
                <div className="faq__item-content">С другой стороны сложившаяся структура организации требуют определения и
                  уточнения форм развития. Товарищи! дальнейшее развитие различных форм деятельности требуют определения и
                  уточнения направлений прогрессивного развития.</div>
              </div>
              <div className="faq__item">
                <div className="faq__item-title">Почему время доставки где-то 15 минут, а где-то 30?</div>
                <div className="faq__item-content">Идейные соображения высшего порядка, а также укрепление и развитие
                  структуры требуют определения и уточнения направлений прогрессивного развития. Разнообразный и богатый
                  опыт рамки и место обучения кадров позволяет оценить значение новых предложений.</div>
              </div>
              <div className="faq__item">
                <div className="faq__item-title">Как добавить новую карту?</div>
                <div className="faq__item-content">Повседневная практика показывает, что постоянное
                  информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов)
                  участие в формировании существенных финансовых и административных условий.</div>
              </div>
              <div className="faq__item">
                <div className="faq__item-title">Где вводить промокод?</div>
                <div className="faq__item-content">С другой стороны сложившаяся структура организации требуют определения и
                  уточнения форм развития. Товарищи! дальнейшее развитие различных форм деятельности требуют определения и
                  уточнения направлений прогрессивного развития.</div>
              </div>
              <div className="faq__item">
                <div className="faq__item-title">Когда вернутся деньги за продукты?</div>
                <div className="faq__item-content">Идейные соображения высшего порядка, а также укрепление и развитие
                  структуры требуют определения и уточнения направлений прогрессивного развития. Разнообразный и богатый
                  опыт рамки и место обучения кадров позволяет оценить значение новых предложений.</div>
              </div>
              <div className="faq__item">
                <div className="faq__item-title">Как поменять номер телефона в приложении?</div>
                <div className="faq__item-content">Повседневная практика показывает, что постоянное
                  информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов)
                  участие в формировании существенных финансовых и административных условий.</div>
              </div>
              <div className="faq__item">
                <div className="faq__item-title">Где прочитать отзывы на сервис и продукты?</div>
                <div className="faq__item-content">С другой стороны сложившаяся структура организации требуют определения и
                  уточнения форм развития. Товарищи! дальнейшее развитие различных форм деятельности требуют определения и
                  уточнения направлений прогрессивного развития.</div>
              </div>
              <div className="faq__item">
                <div className="faq__item-title">Как гарантируете свежесть продуктов?</div>
                <div className="faq__item-content">Идейные соображения высшего порядка, а также укрепление и развитие
                  структуры требуют определения и уточнения направлений прогрессивного развития. Разнообразный и богатый
                  опыт рамки и место обучения кадров позволяет оценить значение новых предложений.</div>
              </div>
              <div className="faq__item">
                <div className="faq__item-title">Где вводить промокод?</div>
                <div className="faq__item-content">Повседневная практика показывает, что постоянное
                  информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов)
                  участие в формировании существенных финансовых и административных условий.</div>
              </div>
              <div className="faq__item">
                <div className="faq__item-title">Где прочитать отзывы на сервис и продукты?</div>
                <div className="faq__item-content">С другой стороны сложившаяся структура организации требуют определения и
                  уточнения форм развития. Товарищи! дальнейшее развитие различных форм деятельности требуют определения и
                  уточнения направлений прогрессивного развития.</div>
              </div>
              <div className="faq__item">
                <div className="faq__item-title">Как всё работает?</div>
                <div className="faq__item-content">Идейные соображения высшего порядка, а также укрепление и развитие
                  структуры требуют определения и уточнения направлений прогрессивного развития. Разнообразный и богатый
                  опыт рамки и место обучения кадров позволяет оценить значение новых предложений.</div>
              </div>
              <div className="faq__item">
                <div className="faq__item-title">Если я отменю заказ, как потом восстановить?</div>
                <div className="faq__item-content">Повседневная практика показывает, что постоянное
                  информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов)
                  участие в формировании существенных финансовых и административных условий.</div>
              </div>
              <div className="faq__item">
                <div className="faq__item-title">Как изменить способ оплаты или отвязать банковскую карту?</div>
                <div className="faq__item-content">С другой стороны сложившаяся структура организации требуют определения и
                  уточнения форм развития. Товарищи! дальнейшее развитие различных форм деятельности требуют определения и
                  уточнения направлений прогрессивного развития.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div onClick={close} className="popup__overlay"></div>
    </div>
  )
}

export default Faq