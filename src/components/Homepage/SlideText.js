import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context";
import "./SlideText.css";

const SlideText = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const work = [
    "Developer",
    "Game Developer",
    "Android Developer",
    "Data Scientist",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const tick = () => setIndex((i) => i + 1);

    const animation = setInterval(tick, 3000);
    return () => clearInterval(animation);
  }, []);

  return (
    <div className="i-title">
      <h1 className="description" style={{color : darkMode && '#c4c8cc'}}>
        Every{" "}
        <div className="moving" style={{color : darkMode && '#ffa65e'}}>{`${
          work[index % work.length]}`}</div>
          {" "}
        has
        <br /> a tab open to Stack Overflow
      </h1>
    </div>
  );
};

export default SlideText;
