import { ProductCard } from "../shared/Card"

import { useAppSelector } from "../store/storeHooks"
import { selectCategoriesList } from "../store/slices/categoriesSlice"
import Flickity from 'react-flickity-component'


type Props = {
  openInfo: () => void;
}

const Home = ({ openInfo }: Props) => {

  const categories = useAppSelector(selectCategoriesList);

  
  return (
    <>
      <div className="content__row">
        <h1 className="content__title">Мечта - самый быстрый интернет-магазин. Доставка за 15 минут.</h1>
      </div>
      <div className="content__row">
        <div className="promo">
          <Flickity
            disableImagesLoaded={false}
            options={{ initialIndex: 1 }}
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
            {
              categories?.map((item, index) => {
                return (
                  <>
                    <div className="section__row">
                      <h2 className="section__title">{item.name}</h2><a className="section__link" href="#">Больше</a>
                    </div>
                    <div className="section__row section__row--grid-5-cols">
                      {
                        item.products.map((product, index) => (
                          <ProductCard openInfo={openInfo} product={product} key={index} />
                        ))
                      }
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Home