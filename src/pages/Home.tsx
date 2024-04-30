import { ProductCard } from "../shared/Card"

import { useAppSelector } from "../store/storeHooks"
import { selectCategoriesList } from "../store/slices/categoriesSlice"
import Flickity from 'react-flickity-component'

type Props = {
  openInfo: () => void;
}

const Home = ({ openInfo }: Props) => {
  
  return (
    <>
      <div className="content__row">
        <h1 className="content__title">Мечта - самый быстрый интернет-магазин. Доставка за 15 минут.</h1>
      </div>
      <div className="content__row">
        <div className="promo">
          <Flickity
            disableImagesLoaded={false}
            options={{ initialIndex: 1, wrapAround: true }}
            reloadOnUpdate
          >
            <div className="promo__carousel-item"><img src="https://mechta-crimea.ru/test/img/promo/1.webp" /></div>
            <div className="promo__carousel-item"><img src="https://mechta-crimea.ru/test/img/promo/2.webp" /></div>
            <div className="promo__carousel-item"><img src="https://mechta-crimea.ru/test/img/promo/3.webp" /></div>
          </Flickity>
        </div>
      </div>
      <div className="content__row">
        <div className="section">
          <div className="section__container">
            <div className="section__row section__row--grid-4-cols"><a className="card-promo" href="#">
              <div className="card-promo__container">
                <h2>Сладкое к завтраку</h2><img src="https://mechta-crimea.ru/test/img/card-promo/1.webp" alt=""/>
              </div></a><a className="card-promo" href="#">
                <div className="card-promo__container">
                  <h2>Сладкое к завтраку</h2><img src="https://mechta-crimea.ru/test/img/card-promo/1.webp" alt=""/>
                </div></a><a className="card-promo" href="#">
                <div className="card-promo__container">
                  <h2>Сладкое к завтраку</h2><img src="https://mechta-crimea.ru/test/img/card-promo/1.webp" alt=""/>
                </div></a><a className="card-promo" href="#">
                <div className="card-promo__container">
                  <h2>Сладкое к завтраку</h2><img src="https://mechta-crimea.ru/test/img/card-promo/1.webp" alt=""/>
                </div></a></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home