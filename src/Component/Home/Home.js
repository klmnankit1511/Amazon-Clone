import React from "react";
import "./Home.css";
import Product from "../Product/Product";
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
            price={299}
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
          <Product
            id={678534576}
            title="New Apple iPhone 12 (128GB) - Blue"
            price={75900}
            image="https://m.media-amazon.com/images/I/71ZOtNdaZCL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id={678534576}
            title="New Apple iPhone 12 Pro Max (256GB) - Pacific Blue"
            price={132900}
            image="https://m.media-amazon.com/images/I/71MHTD3uL4L._AC_UY218_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id={678543218}
            image="https://m.media-amazon.com/images/I/61IwksZ-DGL._AC_UY218_.jpg"
            price={46990}
            title="OnePlus 9R 5G (Lake Blue, 8GB RAM, 128GB Storage)"
            rating={4}
          />
          <Product
            id={678233218}
            title="Echo Dot (3rd Gen) – Smart speaker with Alexa (Black)"
            price={3499}
            image="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id={678333338}
            title="Google Home with Google Assistant Smart Speaker  (White)"
            price={5990}
            image="https://rukminim1.flixcart.com/image/612/612/jfsknm80/smart-assistant/b/h/m/home-ghome-google-original-imaf46b7mrhmpzdg.jpeg?q=70"
            rating={4}
          />
          <Product
            id={678593838}
            title="APPLE Airpods Pro With Wireless Charging Case Active noise cancellation enabled Bluetooth Headset"
            price={23900}
            image="https://rukminim1.flixcart.com/image/612/612/k5cs87k0/headphone/h/8/8/apple-earphone-1a-original-imafmyz2ufupkvxr.jpeg?q=70"
            rating={3}
          />
          <Product
            id={673983338}
            title="New Apple iPad Air (10.9-inch, Wi-Fi, 64GB) - Green (Latest Model, 4th Generation)"
            price={54900}
            image="https://m.media-amazon.com/images/I/71SAHzzQqkL._AC_UY218_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id={678837218}
            title="MSI Optix MAG241C 23.6 inch Full HD Curved Gaming Monitor, 144hz Refresh Rate, 1ms Response time, Anti Glare Panel and Adjustable Stand"
            price={78098}
            image="https://m.media-amazon.com/images/I/51sp9mu5FzL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id={6788628718}
            title="Sony Bravia 138.8 cm (55 inches) 4K Ultra HD Smart LED TV KD-55X7002G (Black) (2019 Model)"
            price={59990}
            image="https://m.media-amazon.com/images/I/81Nw2ifyBzL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id={6788628718}
            title="Samsung 108 cm (43 inches) Crystal 4K Pro Series Ultra HD Smart LED TV UA43AUE70AKLXL"
            price={39980}
            image="https://m.media-amazon.com/images/I/61GwJAhftvS._AC_UY218_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
