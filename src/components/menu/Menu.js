import { useEffect, useState } from "react";
import Food from "../food/Food";
import "./Menu.scss";

const foods = [
  {
    id: 1,
    name: "Bun cha",
    price: 30000,
    owner: "Tran Duc Trung",
  },
  {
    id: 2,
    name: "Bun bo",
    price: 70000,
    owner: "Tran Duc Trung",
  },
  {
    id: 3,
    name: "Bun rieu",
    price: 40000,
    owner: "Tran Duc Trung",
  },
  {
    id: 4,
    name: "Bun cua",
    price: 20000,
    owner: "Tran Duc Trung",
  },
  {
    id: 5,
    name: "Bun moc",
    price: 15000,
    owner: "Tran Duc Trung",
  },
];

function Menu() {
  return (
    <div className="Menu">
      {/* <Food foodName="Bun cha" foodPrice={30000} foodOwner="Tran Trong Duc"/>
      <Food foodName="Bun bo"  />
      <Food foodName="pho bo" />
      <Food foodName="Bun real" />
      <Food foodName="Bun fake" /> */}

      {foods.map((food) => {
        const { id, name, price, owner, local } = food;
        return (
          <Food key={id} foodName={name} foodPrice={price} foodOwner={owner} />
        );
      })}
    </div>
  );
}

export default Menu;
