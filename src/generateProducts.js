import Chance from "chance";

const chance = new Chance();

const colors = ["красный", "синий", "зеленый", "черный", "белый"];
const categories = [
  "Одежда",
  "Обувь",
  "Аксессуары",
  "Электроника",
  "Спорт",
  "Дом",
  "Красота",
  "Игрушки",
  "Канцтовары",
  "Продукты",
];

const generateProducts = (count) => {
  return Array.from({ length: count }, () => ({
    id: chance.guid(),
    name: chance.word({ length: 5 }),
    description: chance.sentence({ words: 10 }),
    color: chance.pickone(colors),
    category: chance.pickone(categories),
    price: chance.integer({ min: 10, max: 9999 }),
    rating: chance.floating({ min: 0, max: 5, fixed: 1 }),
    imageUrl: chance.pickone(["https://via.placeholder.com/250"]),
  }));
};

export default generateProducts;
