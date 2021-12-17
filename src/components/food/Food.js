import "./Food.scss";

// const props = {
//     foodName: '',
//     foodPrice:  0,
//     owner: '',
// } // cau truc cua props 

function Food({ foodName, foodPrice, foodOwner }) {
  return (
    <>
      <div className="Food">
        <div className="Food__name">{foodName}</div>
        <div className="Food__price">{foodPrice} VND</div>

        <div className="owner">{foodOwner}</div>
      </div>
    </>
  );
}

export default Food;

// cac ham cua array: foreach, map, filter, find, reduce