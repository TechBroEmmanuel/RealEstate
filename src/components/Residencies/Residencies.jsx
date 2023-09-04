import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import './Residencies.css';
// import data from '../../utils/slider.json';
import { useState, useEffect } from 'react';
import { sliderSettings } from '../../utils/common';

const API_KEY = "31818712-8106bdfbb14037d2023a0c1b2";

const Residencies = () => {

  const [apiImg, setApiImg] = useState([]);
  const [error, setError] = useState(null);


      useEffect(() => {
        fetch(
          "https://pixabay.com/api/?key=" +
            API_KEY +
            "&q=houses&category=buildings&image_type=photo&pretty=true"
        )
          .then((res) => res.json())
          .then(
            (result) => {
              setApiImg(result.hits);
            },
            (error) => {
              setError(error);
            }
          );
      }, []);

  

  return (
    <section className="r-wrapper" id='residencies'>
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart ">
          <span className="orangeText">Best Choices</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {apiImg.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.previewURL} alt="home" />
                <span className=" secondaryText r-price">
                  <span style={{ color: "blue", padding:"5px" }}>Likes:</span>
                  <span>{card.likes}</span>
                  {/* <span>{card.price}</span> */}
                </span>
                {/* <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Residencies

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className=" flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
}