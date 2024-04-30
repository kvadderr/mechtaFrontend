import { useState } from "react"
import { Category } from "../@types/ententy/Category"
import classNames from "classnames"
import { useAppSelector } from "../store/storeHooks"
import { selectCategoriesList } from "../store/slices/categoriesSlice"
import { useNavigate } from 'react-router-dom';

type MenuItemProps = {
  menuItem: Category,
  isActive: boolean,
  setCurrentIndex: () => void;
}
const MenuItem = ({ menuItem, isActive, setCurrentIndex }: MenuItemProps) => {

  const navigate = useNavigate();
  const isActiveClass = classNames('nav__submenu', {
    'nav__submenu--active': isActive,
  });

  const goToCategory = (category: string) => {
    navigate(`/category?id=${category}`);
  }

  return (
    <>
      <div className="nav__item" onClick={setCurrentIndex}>
        <div className="nav__icon"></div>
        <div className="nav__text">{menuItem.name}</div>
      </div>
      <div className={isActiveClass}>
        {menuItem.children?.map((category) => (
          <a className="nav__submenu-item" onClick={() => goToCategory(category.id)} key={category.id}>{category.name}</a>
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