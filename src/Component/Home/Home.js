import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id={644543218}
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id={678534518}
            title="Cracking the Coding Interview (Indian Edition)"
            price={499}
            image="https://images-na.ssl-images-amazon.com/images/I/41p1cRZGtaL._SX348_BO1,204,203,200_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id={678543218}
            title="Samsung 109 cm (43 inches) 4K Ultra HD Smart LED TV"
            price={46990}
            image="https://m.media-amazon.com/images/I/91oKbXQbBtL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id={678233218}
            title="Echo Dot (3rd Gen) – Smart speaker with Alexa (Black)"
            price={3499.99}
            image="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id={678543338}
            title="New Apple iPad Air (10.9-inch, Wi-Fi, 64GB) - Green (Latest Model, 4th Generation)"
            price={(54, 900)}
            image="https://m.media-amazon.com/images/I/71SAHzzQqkL._AC_UY218_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id={678837218}
            title="MSI Optix MAG241C 23.6 inch Full HD Curved Gaming Monitor, 144hz Refresh Rate, 1ms Response time, Anti Glare Panel and Adjustable Stand"
            price={18098}
            image="https://m.media-amazon.com/images/I/51sp9mu5FzL._AC_UY218_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
