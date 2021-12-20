import { useEffect, useState } from "react";
import Food from "../food/Food";
import "./Menu.scss";

const foods = [
  {
    id: 1,
    name: "Bun cha",
    price: 30000,
    owner: "Tran Duc Trung",
    src: "https://dammenaunuong.com/wp-content/uploads/2019/10/2584396bb4ced2c262a744c2af56e243-cach-lam-nem-ran-sl.jpg",
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
  const [inputValue, setInputValue] = useState("");
  const [foodList, setFoodList] = useState(foods);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchFood = () => {
    let filterFood = foods.filter((food) =>
      food.name.toLowerCase().includes(inputValue)
    );
    setFoodList(filterFood);
  };

  console.log("------", inputValue);

  return (
    <div className="Menu">
      <div className="Menu-search">
        <div>Nhap ten mon</div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="button" onClick={handleSearchFood}>
          Search
        </button>
      </div>

      <div className="Menu-list">
        {foodList.map((food) => {
          const { id, name, price, owner, src } = food;
          return (
            <Food
              key={id}
              foodName={name}
              foodPrice={price}
              foodOwner={owner}
              imgSource={src}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;

// React hooks: useState, useEffect
// component render: life cycle...
// css