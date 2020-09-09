import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/Wearables/Mi/Redmi_Band/SaleOn/MI-Xiaomi_GW_MobileHero_1500x600._CB405135019_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
          id="1"
            title="Apple iPhone 11 Pro Max (64GB) - Midnight Green"
            price={999999}
            image="https://images-na.ssl-images-amazon.com/images/I/61ers6OzvUL._SL1024_.jpg"
            rating={4}
          />
          <Product
           id="2"
            title="Samsung Galaxy S10 (Black, 8GB RAM, 128GB Storage)"
            price={(49999)}
            image="https://images-na.ssl-images-amazon.com/images/I/61-snTeMjoL._SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
           id="3"
            title="Lenovo Tab M10 Tablet (10.1 inch, 16GB, Wi-Fi + 4G LTE), Slate Black"
            price={(14250)}
            image="https://images-na.ssl-images-amazon.com/images/I/61ul3f89uDL._SL1338_.jpg"
            rating={3}
          />
          <Product
           id="4"
            title="JBL T460BT Extra Bass Wireless On-Ear Headphones with 11 Hours Playtime & Mic (Black)"
            price={(2999)}
            image="https://images-na.ssl-images-amazon.com/images/I/71ynIMjwgwL._SL1500_.jpg"
            rating={4}
          />
          <Product
           id="5"
            title="Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens, 16GB Card and Carry Case
"
            price={(34499)}
            image="https://images-na.ssl-images-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg"
            rating={2}
          />
        </div>
        <div className="home__row">
          <Product
           id="6"
            title="Onida 80 cm (32 Inches) Fire TV Edition HD Ready Smart IPS LED TV 32HIF (Black) (2019)"
            price={(14199)}
            image="https://images-na.ssl-images-amazon.com/images/I/81bNwWF3Z2L._SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
