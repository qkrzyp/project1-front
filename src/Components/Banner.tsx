import React from "react";
import Carousel from "nuka-carousel";
const classes = require("../Style.module.css");

const Banner = () => {
  return (
    <div className={classes.Banner}>
      <div className={classes.BannerText}>
        <h3>특별 선물 기획전</h3>
        <p>특별 선물로 식물을 선물해보세요.</p>
      </div>
      <Carousel
        pauseOnHover={false}
        autoplay={true}
        autoplayInterval={2000}
        speed={900}
        wrapAround={true}
        disableEdgeSwiping={true}
        slidesToScroll={1}
        renderCenterLeftControls={({ previousSlide }) => (
          <button
            onClick={previousSlide}
            style={{ backgroundColor: "transparent", border: "none" }}
          >
            <img
              src="https://i.ya-webdesign.com/images/white-arrow-transparent-png-1.png"
              style={{ width: "50px", transform: "rotate(180deg)" }}
            />
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button
            onClick={nextSlide}
            style={{ backgroundColor: "transparent", border: "none" }}
          >
            <img
              src="https://i.ya-webdesign.com/images/white-arrow-transparent-png-1.png"
              style={{ width: "50px" }}
            />
          </button>
        )}
        defaultControlsConfig={{
          pagingDotsStyle: {
            fill: "transparent",
            width: "10px",
            height: "14px",
            backgroundColor: "white",
            margin: "10px",
            borderRadius: "50%"
          }
        }}
      >
        <img
          style={{ height: "500px", width: "100%" }}
          src="https://www.proflowers.com/blog/wp-content/uploads/2019/06/how-to-water-plants-on-vacation-hero-1.jpg"
        />
        <img
          style={{ height: "500px", width: "100%" }}
          src="https://www.proflowers.com/blog/wp-content/uploads/2018/06/how-to-revive-a-plant-hero.jpg"
        />
        <img
          style={{ height: "500px", width: "100%" }}
          src="https://miro.medium.com/max/15750/0*SgXraDaYrUs9DEBF"
        />
      </Carousel>
    </div>
  );
};

export default Banner;
