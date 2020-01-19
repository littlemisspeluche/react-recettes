import React from "react";
import Slider from "react-slick";
import { default as data } from "./chefsRestaurants.json";
import "./SignatureDish.css";
export default function SignatureDish({ recette }) {
  const { chefs } = data;
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 2000
  };

  return (
    <div className="signature-dish">
      <h3>SIGNATURE DISHS</h3>
      <div className="dish-container">
        <Slider {...settings}>
          <div className="card-popular">
            <div className="popular-top">
              <img
                src={chefs[0].restaurant.menu[1].image}
                className="popular-img"
                alt={chefs[0].restaurant.menu[1].name}
              />
            </div>
            <div className="popular-bottom">
              <h3 className="title">{chefs[0].restaurant.menu[1].name}</h3>
              <div className="restaurant">
                <span className="name">{chefs[0].restaurant.name}</span>
                <br />
                <span className="address">
                  {chefs[0].restaurant.shortAddress}
                </span>
              </div>
            </div>
          </div>

          <div className="card-popular">
            <div className="popular-top">
              <img
                src={chefs[1].restaurant.menu[7].image}
                className="popular-img"
                alt={chefs[1].restaurant.menu[7].name}
              />
            </div>
            <div className="popular-bottom">
              <h3 className="title">{chefs[1].restaurant.menu[7].name}</h3>
              <div className="restaurant">
                <span className="name">{chefs[1].restaurant.name}</span>
                <br />
                <span className="address">
                  {chefs[1].restaurant.shortAddress}
                </span>
              </div>
            </div>
          </div>

          <div className="card-popular">
            <div className="popular-top">
              <img
                src={chefs[2].restaurant.menu[4].image}
                className="popular-img"
                alt={chefs[2].restaurant.menu[4].name}
              />
            </div>
            <div className="popular-bottom">
              <h3 className="title">{chefs[2].restaurant.menu[4].name}</h3>
              <div className="restaurant">
                <span className="name">{chefs[2].restaurant.name}</span>
                <br />
                <span className="address">
                  {chefs[2].restaurant.shortAddress}
                </span>
              </div>
            </div>
          </div>

          <div className="card-popular">
            <div className="popular-top">
              <img
                src={chefs[2].restaurant.menu[4].image}
                className="popular-img"
                alt={chefs[2].restaurant.menu[4].name}
              />
            </div>
            <div className="popular-bottom">
              <h3 className="title">{chefs[2].restaurant.menu[4].name}</h3>
              <div className="restaurant">
                <span className="name">{chefs[2].restaurant.name}</span>
                <br />
                <span className="address">
                  {chefs[2].restaurant.shortAddress}
                </span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
