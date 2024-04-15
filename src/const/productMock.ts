import { Product } from "../@types/ententy/Product";

const productNames: string[] = [
  "Яблоки",
  "Молоко",
  "Мясо",
  "Мыло",
  "Средство для стекол",
  "Туалетная бумага",
  "Кофе",
  "Чай",
  "Хлеб",
  "Сахар",
  "Масло",
  "Подушка",
  "Пена для бритья",
  "Бананы",
  "Соль",
  "Перчик",
  "Мука",
  "Сыр",
  "Шампунь",
  "Маргарин"
];

const productsMock: Product[] = [];

// Генерация 100 продуктов
for (let i = 0; i < 100; i++) {
  const subcategoryId = Math.floor(Math.random() * 15) + 1; // случайный subcategory_id от 1 до 15
  const productNameIndex = Math.floor(Math.random() * productNames.length);
  const productName = productNames[productNameIndex];
  const productPrice = Math.floor(Math.random() * 1000) + 1; // случайная цена от 1 до 1000
  const productUnit = Math.random() < 0.5 ? "2л" : "3шт"; // случайный выбор между "2л" и "3шт"

  productsMock.push({
    id: i,
    subcategory_id: subcategoryId,
    image: "https://mechta-crimea.ru/test/img/preview-product/1.png",
    name: productName,
    unit: productUnit,
    price: productPrice
  });
}

export default productsMock