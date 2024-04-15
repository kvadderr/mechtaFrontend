import { Category } from "../@types/ententy/Category";

export const categoriesMock: Category[] = [
  {
    id: 1,
    name: "Еда и напитки22",
    icon: "https://mechta-crimea.ru/test/img/nav/1.webp",
    subcategories: [
      { id: 1, name: "Фрукты и овощи" },
      { id: 2, name: "Молочные продукты" },
      { id: 3, name: "Мясо и птица" }
    ]
  },
  {
    id: 2,
    name: "Бытовая химия и уборка",
    icon: "https://mechta-crimea.ru/test/img/nav/1.webp",
    subcategories: [
      { id: 4, name: "Моющие средства" },
      { id: 5, name: "Освежители воздуха" },
      { id: 6, name: "Уборочные принадлежности" }
    ]
  },
  {
    id: 3,
    name: "Кухонная утварь и посуда",
    icon: "https://mechta-crimea.ru/test/img/nav/1.webp",
    subcategories: [
      { id: 7, name: "Поварские инструменты" },
      { id: 8, name: "Посуда" },
      { id: 9, name: "Кухонные аксессуары" }
    ]
  },
  {
    id: 4,
    name: "Красота и уход",
    icon: "https://mechta-crimea.ru/test/img/nav/1.webp",
    subcategories: [
      { id: 10, name: "Уход за кожей" },
      { id: 11, name: "Уход за волосами" },
      { id: 12, name: "Декоративная косметика" }
    ]
  },
  {
    id: 5,
    name: "Товары для дома и сада",
    icon: "https://mechta-crimea.ru/test/img/nav/1.webp",
    subcategories: [
      { id: 13, name: "Мебель и декор" },
      { id: 14, name: "Инструменты и оборудование" },
      { id: 15, name: "Садовые принадлежности" }
    ]
  }
];