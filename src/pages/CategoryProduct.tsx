import { Product } from "../@types/ententy/Product"
import { ProductCard } from "../shared/Card"

type Props = {
  data: Product[] | undefined
}

const CategoryProduct = ({ data }: Props) => {
  return (
    <>
      <div className="content__row">
        <div className="section">
          <div className="section__container">
            <div className="section__row section__row--grid-5-cols">
              {
                data?.map((product, index) => (
                  <ProductCard product={product} key={index} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoryProduct