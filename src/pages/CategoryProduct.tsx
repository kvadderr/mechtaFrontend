import { useLocation } from 'react-router-dom';
import { ProductCard } from "../shared/Card"
import { useGetProductsByCategoryMutation } from '../api/categoriesApi';
import { useEffect } from 'react';

const CategoryProduct = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const category_id = query.get('id');

  const [getProductsByCategory, { data }] = useGetProductsByCategoryMutation()

  useEffect(() => {
    getProductsByCategory(category_id)
  }, [category_id])
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