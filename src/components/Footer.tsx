
type Props = {
  openFooter: () => void
}

const Footer = (props: Props) => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__row footer__row--space-between">
          <div className="footer__col"><a className="footer__link footer__link--appstore" href="#"></a><a
            className="footer__link footer__link--google-play" href="#"></a><a
              className="footer__link footer__link--app-gallery" href="#"></a><a
                className="footer__link footer__link--rustore" href="#"></a></div>
          <div className="footer__col"><a className="footer__link footer__link--tiktok" href="#"></a><a
            className="footer__link footer__link--vk" href="#"></a><a className="footer__link footer__link--ok"
              href="#"></a><a className="footer__link footer__link--youtube" href="#"></a></div>
        </div>
        <div className="footer__row footer__row--indent-bottom-small">
          <div className="footer__nav">
            <div className="footer__nav-item" onClick={props.openFooter}>Ответы на&nbsp;вопросы</div><a className="footer__nav-item"
              href="http://ya.ru" target="_blank">Стать курьером-партнёром</a>
            <div className="footer__nav-item" data-link="contacts">Контакты</div>
            <div className="footer__nav-item" data-link="for-suppliers">Для поставщиков</div><a className="footer__nav-item"
              data-link="helpline">Линия доверия Мечта</a>
            <div className="footer__nav-item" data-link="rules">Правила и&nbsp;соглашения</div><a
              className="footer__nav-item" href="http://ya.ru" target="_blank">Политика конфиденциальности</a>
          </div>
        </div>
        <div className="footer__row">
          <div className="footer__text">Зона, время, товары и&nbsp;предложения доставки ограничены. Организатор,
            продавец ООО &laquo;Умный ритейл&raquo; ОГРН 1177847261602, 192019, Санкт‑ Петербург, улица Седова, 11,
            литер&nbsp;А, офис 627. Информационные услуги оказываются ООО &laquo;Умное пространство&raquo; ОГРН
            1137847232852, 192019, Санкт-Петербург, улица Седова, 11&nbsp;лит. А</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer