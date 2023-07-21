import React from 'react'
import CardItem from './CardItem'
import "./Cards.css";

export default function ProductCard() {
  return (
    <div className="cards">
      <h1>In Stock Now!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={require("../assets/barnWhiteQueen.png")}
              text="NEW DELIVERIES EVERY WEEK!"
              label="Warehouse"
              path="/services"
            />
            <CardItem
              src={require("../assets/brownSet.png")}
              text="Buy now, Pay later with Snap Financing!"
              label="Financing"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={require("../assets/kingBed.png")}
              text="Example Product"
              label="Product"
              path="/services"
            />
            <CardItem
              src={require("../assets/grayPwrSofa.png")}
              text="Example Product"
              label="Product"
              path="/services"
            />
            <CardItem
              src={require("../assets/darkShelfQueen.png")}
              text="Example Product"
              label="Product"
              path="/services"
            />
            <CardItem
              src={require("../assets/fullBed.png")}
              text="Example Product"
              label="Product"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={require("../assets/grayRcl.png")}
              text="Example Product"
              label="Product"
              path="/services"
            />
            <CardItem
              src={require("../assets/grayRclSofa.png")}
              text="Example Product"
              label="Product"
              path="/services"
            />
            <CardItem
              src={require("../assets/graySectional.png")}
              text="Example Product"
              label="Product"
              path="/services"
            />
            <CardItem
              src={require("../assets/graySet.png")}
              text="Example Product"
              label="Product"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={require("../assets/metalBunks.png")}
              text="Example Product"
              label="Product"
              path="/services"
            />
            <CardItem
              src={require("../assets/queenSet.png")}
              text="Example Product"
              label="Product"
              path="/services"
            />
            <CardItem
              src={require("../assets/twoChairDinette.png")}
              text="Example Product"
              label="Product"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={require("../assets/AWF-logo2.png")}
              text="NEW DELIVERIES EVERY WEEK!"
              label="Warehouse"
              path="/services"
            />
            <CardItem
              src={require("../assets/snapLogo.png")}
              text="Buy now, Pay later with Snap Financing!"
              label="Financing"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}
