import React, { useContext } from "react";
import "./CarouselContainer.css";
import Slider from "react-slick";
import { ThemeContext } from "../../context";

// import { Carousel } from "antd";
// import FirstImage from "../../images/FirstImage.PNG"
// import SecondImage from "../../images/SecondImage.PNG"
// import ThirdImage from "../../images/ThirdImage.PNG"
// import FourthImage from "../../images/FourthImage.PNG"

// const contentStyle = {
//   height: "100px",
//   color: "#fff",
//   width: "100%",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "#364d79",
// };
const CarouselContainer = () => {

 const theme = useContext(ThemeContext);
 const darkMode = theme.state.darkMode;

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div>
      <Slider {...settings} className="slicker" autoplay={true} style={{padding : darkMode && '10px' , border : darkMode && '1px solid gray',borderRadius : darkMode && '5px'}}>
        <div className="imageContainer">
          <img
            src="https://cdn.sstatic.net/Img/product/teams/logos/wisetech-global-alt.svg?v=3b6b11e76536"
            alt=""
          />
        </div>
        <div className="imageContainer">
          <img
            src="https://cdn.sstatic.net/Img/product/teams/logos/chevron-alt.svg?v=3bfd2c06a64b"
            alt=""
          />
        </div>
        <div className="imageContainer">
          <img
            src="https://cdn.sstatic.net/Img/product/teams/logos/philips-alt.svg?v=7fc60c993103"
            alt=""
          />
        </div>
        <div className="imageContainer">
          <img
            src="https://cdn.sstatic.net/Img/product/teams/logos/dialpad-alt.svg?v=4e63facf7f79"
            alt=""
          />
        </div>

        <div className="imageContainer">
          <img
            src="https://cdn.sstatic.net/Img/product/teams/logos/bloomberg-alt.svg?v=9fc4f6650377"
            alt=""
          />
        </div>
        <div className="imageContainer">
          <img
            src="https://cdn.sstatic.net/Img/product/teams/logos/logitech-alt.svg?v=a99c74b88566"
            alt=""
          />
        </div>
        <div className="imageContainer">
          <img
            src="https://cdn.sstatic.net/Img/product/teams/logos/verizon-media-alt.svg?v=f335b20096b2"
            alt=""
          />
        </div>
        <div className="imageContainer">
          <img
            src="https://cdn.sstatic.net/Img/product/teams/logos/box-alt.svg?v=eb76fd9d884f"
            alt=""
          />
        </div>
        <div className="imageContainer">
          <img
            src="https://cdn.sstatic.net/Img/product/teams/logos/expensify-alt.svg?v=375099b85ce5"
            alt=""
          />
        </div>
        <div className="imageContainer">
          <img
            src="https://cdn.sstatic.net/Img/product/teams/logos/intercom-alt.svg?v=3eda71aed47c"
            alt=""
          />
        </div>
        <div className="imageContainer">
          <img
            src="https://cdn.sstatic.net/Img/product/teams/logos/instacart-alt.svg?v=15bd0b39b197"
            alt=""
          />
        </div>
        <div className="imageContainer">
          <img
            src="https://cdn.sstatic.net/Img/product/teams/logos/barkbox-alt.svg?v=419890745024"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselContainer;
