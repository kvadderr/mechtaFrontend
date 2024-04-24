import { useState } from "react"
import { Category } from "../@types/ententy/Category"
import classNames from "classnames"
import { useAppDispatch, useAppSelector } from "../store/storeHooks"
import { selectCategoriesList, setCurrentCategory } from "../store/slices/categoriesSlice"
import { useGetProductsByCategoryMutation } from "../api/categoriesApi"
type MenuItemProps = {
  menuItem: Category,
  isActive: boolean,
  setCurrentIndex: () => void;
}
const MenuItem = ({ menuItem, isActive, setCurrentIndex }: MenuItemProps) => {

  const dispatch = useAppDispatch()
  const [getProducts] = useGetProductsByCategoryMutation();
  const isActiveClass = classNames('nav__submenu', {
    'nav__submenu--active': isActive,
  });


  return (
    <>
      <div className="nav__item" onClick={setCurrentIndex}>
        <div className="nav__icon"></div>
        <div className="nav__text">{menuItem.name}</div>
      </div>
      <div className={isActiveClass}>
        {menuItem.children?.map((category, index) => (
          <a className="nav__submenu-item" onClick={() => {dispatch(setCurrentCategory(category))}} href="#" key={category.id}>{category.name}</a>
        ))}
      </div>
    </>
  )
}
const Menu = () => {

  const [currentIndex, setCurrentIndex] = useState<number | null>(null)
  const categories = useAppSelector(selectCategoriesList);

  return (
    <nav className="nav">
      {categories?.map((category, index) => (
        <MenuItem setCurrentIndex={() => setCurrentIndex(currentIndex === index ? null : index)} menuItem={category} key={index} isActive={index === currentIndex} />
      ))}
    </nav>
  )
}

export default Menu