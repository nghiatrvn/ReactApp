import "./Food.scss";

// const props = {
//     foodName: '',
//     foodPrice:  0,
//     owner: '',
// } // cau truc cua props 

function Food({ foodName, foodPrice, foodOwner, imgSource }) {
  return (
    <>
      <div className="Food">
        <img src={imgSource} alt="anh mon an"/>
        <div className="Food__name">{foodName}</div>
        <div className="Food__price">{foodPrice} VND</div>

        <div className="owner">{foodOwner}</div>
      </div>
    </>
  );
}

export default Food;


//img
// cac ham cua array: foreach, map, filter, find, reduce