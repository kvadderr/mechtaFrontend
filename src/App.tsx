import { useEffect, useState } from "react"
import classNames from "classnames"
import { Basket, SearchHeader, Footer, Menu } from "./components"
import { Faq, Profile, Login } from "./popup"
import Home from "./pages/Home"

import Promo from "./components/Promo"
import { useAppDispatch, useAppSelector } from "./store/storeHooks"
import { selectIsAuthorized } from "./store/slices/authSlice"
import { Product } from "./@types/ententy/Product"
import { Routes, Route, useNavigate } from 'react-router-dom';

import Search from "./pages/Search"

import BasketPopup from "./popup/Basket"
import ProductInfo from "./popup/Product"
import SelectAddress from "./popup/SelectAdress"
import { useGetCategoriesQuery } from "./api/categoriesApi"
import { useGetMyInformationMutation } from "./api/authApi"
import { Category } from "./@types/ententy/Category"
import { selectCurrentCategory } from "./store/slices/categoriesSlice"
import CategoryProduct from "./pages/CategoryProduct"

function App() {

  useGetCategoriesQuery()

  const [faqOpen, setFaqOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const [productInfoOpen, setProductInfoOpen] = useState(false)
  const [basketOpen, setBasketOpen] = useState(false)
  const [addressOpen, setAddressOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchData, setSearchData] = useState<Product[]>()

  const [getMe] = useGetMyInformationMutation();
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(selectIsAuthorized)
  const currentCategory = useAppSelector(selectCurrentCategory);
  const navigate = useNavigate();


  const gridRightClass = classNames('grid__col grid__col--right', {
    'grid__col--include-rows': isAuth,
  });

  useEffect(() => {
    // Проверяем, не пустой ли запрос
    if (searchQuery.trim()) {
      // Формируем URL с параметром поиска
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
    if (searchQuery.length === 0) {
      navigate(`/`);
    }
  }, [searchQuery]);

  useEffect(() => {
    function searchProductByName(name: string): Product[] {
      return []
    }
    searchQuery.length > 0 && setSearchData(searchProductByName(searchQuery))
  }, [searchQuery])

  useEffect(() => {
    if (isAuth) getMe().unwrap();
  }, [isAuth])

  return (
    <div className="grid">
      <div className="grid__container grid__container--indent-bottom-big">
        <div className="grid__col grid__col--left">
          <aside className="sidebar">
            <div className="sidebar__container sidebar__container--visible">
              <div className="sidebar__row sidebar__row--logo"><a className="logo" href="/" title="Мечта"></a></div>
              <div className="sidebar__row sidebar__row--nav">
                <Menu />
              </div>
            </div>
          </aside>
        </div>
        <div className="grid__col grid__col--center">
          <div className="content">
            <BasketPopup isOpen={basketOpen} close={() => setBasketOpen(false)} />
            <SearchHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <Routes>
              <Route path="/" element={<Home openInfo={() => setProductInfoOpen(true)} />} />
              <Route path="/category" element={<CategoryProduct />} />
              <Route path="/search" element={<Search data={searchData} />} />
            </Routes>
            <Faq isOpen={faqOpen} close={() => setFaqOpen(false)} />
            <Profile isOpen={profileOpen} close={() => setProfileOpen(false)} />
            <Login isOpen={loginOpen} close={() => setLoginOpen(false)} />
            <ProductInfo isOpen={productInfoOpen} close={() => setProductInfoOpen(false)} />
            <SelectAddress isOpen={addressOpen} close={() => setAddressOpen(false)} />
          </div>
          <Footer openFooter={() => setFaqOpen(true)} />
        </div>
        <div className={gridRightClass}>
          {isAuth ? <Basket openBasket={() => setBasketOpen(true)} openProfile={() => setProfileOpen(true)} /> : <Promo openAddress={() => setAddressOpen(true)} openLogin={() => setLoginOpen(true)} />}
        </div>
      </div>
      <div className="attached-button" data-link="basket">
        <div className="attached-button__title">129&nbsp;₽</div>
        <div className="attached-button__descr">30&nbsp;мин</div>
      </div>
    </div>

  )
}

export default App
