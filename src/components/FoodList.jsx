import React from 'react';
import FoodItem from './FoodItem';

const foods = [
  { name: 'Feijão', price: 2.5, imageSrc: '../assets/Feijao.jpg' },
  { name: 'Arroz', price: 1.8, imageSrc: '../assets/Arroz.jfif' },
  { name: 'Leite', price: 3.0, imageSrc: '../assets/Leite.webp' },
  { name: 'Macarrão', price: 2.0, imageSrc: '../assets/Macarrao.jpg' },
  { name: 'Açúcar', price: 2.2, imageSrc: '../assets/Acucar.webp' },
  { name: 'Sal', price: 1.5, imageSrc: '../assets/Sal.avif' },
];

const FoodList = () => {
  return (
    <div className="flex justify-center flex-wrap">
      {foods.map((food, index) => (
        <FoodItem
          key={index}
          name={food.name}
          price={food.price}
          imageSrc={food.imageSrc}
        />
      ))}
    </div>
  );
};

export default FoodList;
