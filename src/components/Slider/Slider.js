import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import CarouselContainer from "./CarouselContainer";
import "./Slider.css";

const Slider = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;


  return (
    <div className="slider">
      <h1 style={{ color: darkMode && "#c4c8cc" }}>
        Thousands of organizations around the globe use Stack Overflow for Teams
      </h1>
      <div className="customCarousel">
        <CarouselContainer />
      </div>
    </div>
  );
};

export default Slider;
