import React from "react";
import { UseGlobalContext } from "./context";
import bg from "./bg.svg";
import plate from "./plate.png";
const Hero = () => {
  const { closeSubMenu } = UseGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubMenu}>
      <div className="herocontent">
        <div className="left">
          <article className="tagwithdesc">
            <p className="title">
              <span className="thintitle">Hack Your Way To</span>
              <br /> A Delicious Meal
            </p>
            <p className="tagline">
              Enter the Ingredients you have in your kitchen and get a list of
              recipes you can make with them
            </p>
          </article>

          <article className="actions">
            <button className="browse btn">Browse</button>
            <button className="findrecipi btn">Find Recipe</button>
          </article>

          <article className="stats">
            <div className="singlestat">
              <img src={require("./hamburger.png")} alt="statimg" />
              <p className="statcount">5000+</p>
              <p className="statname">Burger Recipes</p>
            </div>
            <div className="singlestat">
              <img src={require("./hamburger.png")} alt="statimg" />
              <p className="statcount">5000+</p>
              <p className="statname">Burger Recipes</p>
            </div>
            <div className="singlestat">
              <img src={require("./hamburger.png")} alt="statimg" />
              <p className="statcount">5000+</p>
              <p className="statname">Burger Recipes</p>
            </div>
          </article>
        </div>
        <div className="right">
          <img
            src={require("./plate.png")}
            alt="pasta plate image"
            className="heroimg"
          />
          <article className="recipioftheday">
            <div className="mealwithimage">
              <img src={require("./plate.png")} alt="small" />
              <div className="details">
                <h4>Pronto Pasta</h4>
                <h5>cooking time . 15 minutes</h5>
              </div>
            </div>
            <div className="ingredients">
              <p>Onions . Tomato . Pasta . Salt . pepper . chilli</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Hero;
