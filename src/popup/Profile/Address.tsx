type Props = {
  close: () => void;
  goTo: (path: string) => void;
}

const Address = (props: Props) => {
  const { close, goTo } = props;
  return (
    <>
      <div className="popup__row popup__row--title">
        <div onClick={() => goTo('main')} className="popup__btn popup__btn--back"></div>
        <div className="popup__title">Адреса</div>
        <div onClick={close} className="button button--gray button--small">Изменить</div>
      </div>
      <div className="popup__row">
        <div className="basket__offer">
          <div className="basket__offer-container">
            <div className="basket__offer-row basket__offer-row--basket-add-address">
              <div className="basket__offer-col">
                <div className="basket__offer-subtitle">Большой Спасоглинищевский переулок, 9/1 ст4</div>
                <div className="basket__offer-subdescr">кв.&nbsp;3</div>
              </div>
            </div>
            <div className="basket__offer-row basket__offer-row--basket-add-address">
              <div className="basket__offer-col">
                <div className="basket__offer-subtitle">Садовая, 28-30 к1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="button button--red">Новый адрес</div>
    </>
  )

}

export default Address