import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images.unsplash.com/photo-1503437313881-503a91226402?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems Paperback"
            price={40.26}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51gP9mXEqWL._SX379_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Clean Code: A Handbook of Agile Software Craftsmanship 1st Edition"
            price={42.31}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51b7XbfMIIL.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Apple MacBook Pro (16-inch, 16GB RAM, 1TB Storage, 2.3GHz Intel Core i9) - Space Gray"
            price={2549.05}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71pC69I3lzL._AC_SL1500_.jpg"
          />
          <Product
            id="23445930"
            title="Spark: The Definitive Guide: Big Data Processing Made Simple 1st Edition"
            price={48.05}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51u80Ra18-L._SX379_BO1,204,203,200_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation)"
            price={1028.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Drop CTRL High-Profile Mechanical Keyboard — Tenkeyless TKL (87 Key) Gaming Keyboard, Hot-Swap Switches, Programmable, Backlit RGB LED, USB-C, Doubleshot PBT, Aluminum (Gray, Kaihua Speed Silver)"
            price={270.98}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71x4MN%2BZiFL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
