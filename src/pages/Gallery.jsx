import React, { useState } from "react";
import Card from "../components/Card";
import carsArray from "../data.json";

function Gallery() {
  const [arr, setArr] = useState(carsArray);
  const [inputValue, setInputvalue] = useState("");


  const getCarsbycompany=()=>{
    const cars=carsArray.filter((x)=>{
        return x.company==inputValue
    })
    return cars
  }


  const getWhiteCars = () => {
    const whitecars = carsArray.filter((item) => {
      return item.color == "white";
    });
    return whitecars;
  };

  const createCard = (arr) => {
    const cardscomponents = arr.map((item, index) => {
      return (
        <Card
          company={item.company}
          color={item.color}
          price={item.price}
          image={item.image}
          key={index}
        />
      );
    });
    return cardscomponents;
  };

  return (
    <main>
      <div className="container py-4">
        {/* Search bar */}
        <div className="searchBox mb-4">
          <div className="row g-2 align-items-center">
            <div className="col-12 col-md-6">
              <input
                onChange={(e) => {
                  setInputvalue(e.target.value);
                  console.log(inputValue);
                }}
                type="text"
                className="form-control"
                placeholder="Search cars"
              />
            </div>

            <div className="col-8 col-md-3">
              <select className="form-select">
                <option value="company">company</option>
                <option value="color">color</option>
                <option value="year">year</option>
                <option value="price">price</option>
              </select>
            </div>

            <div className="col-4 col-md-3 d-grid">
              <button onClick={()=>{setArr(getCarsbycompany())}} className="btn btn-primary">Search</button>
            </div>
          </div>
        </div>

        {/* Gallery grid */}
        <div className="galleryDiv d-flex flex-wrap">
          {createCard(arr)}
        </div>
      </div>
              
    </main>
  );
}

export default Gallery;
