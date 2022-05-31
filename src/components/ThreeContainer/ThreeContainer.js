import React, { useContext, useEffect, useState } from "react";
import "./ThreeContainer.css";
import "aos/dist/aos.css";
import Aos from "aos";
import ImageContain from "../../images/ImageContain.png";
import EngineerCarts from "../EngineerCarts/EngineerCarts";
import ROICarts from "../ROICarts/ROICarts";
import { ThemeContext } from "../../context";
import { data } from "../../data";
import Links from "../Links/Links";

const ThreeContainer = () => {
  const [show, setShow] = useState("");

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    Aos.init({ easing: "ease" });
  }, []);

  return (
    <>
      <div className="allItems">
        {/* <Teams/> */}
        <div className="twoImagesContainer">
          <img
            className="twoImage"
            src="https://cdn.sstatic.net/Img/product/teams/screens/illo-question.png?v=14c5863a5550"
            alt=""
          />
          <img
            className="twoImage"
            src="https://cdn.sstatic.net/Img/product/teams/screens/illo-home-search.png?v=1ccd850cd929"
            alt=""
          />
        </div>
        <div>
          <img
            className="middleImage"
            src="https://cdn.sstatic.net/Img/product/teams/screens/illo-for-you.png?v=ab49238abe04"
            alt=""
          />
        </div>
        <div
          className="teams"
          style={{ backgroundColor: darkMode ? "#2d2d2d" : "white" }}
        >
          <div className="teamContent">
            <img
              className="teamImage"
              src="https://stackoverflow.design/assets/img/logos/so/logo-meta.png"
              alt=""
            />
            <p className="teamDesc">
              Capture your company's knowledge and context in a discoverable
              format to <span>unblock your team</span>
            </p>
            <a href="/teams/tour" className="teamDesc_button">
              Take a tour of Teams
            </a>
          </div>
          <div className="animatedContainers" data-aos="zoom-in">
            <div
              data-aos="zoom-in"
              data-aos-duration="200"
              className="animatedContainer"
            >
              <div className="container_content">
                <i className="aos_Container fa-solid fa-circle-check"></i>
                <h3 className="container_content_header">
                  Increase Productivity
                </h3>
                <p className="container_content_desc">
                  If somebody somewhere has the right answer, suddenly you have
                  it too. Collaborate better in a remote-first world.
                </p>
              </div>
            </div>
            <div
              data-aos-duration="400"
              data-aos="zoom-in"
              data-aos-delay="600"
              className="animatedContainer"
            >
              <div className="container_content">
                <i className="aos_Container fa-solid fa-circle-check"></i>
                <h3 className="container_content_header">
                  Accelerate time to market
                </h3>
                <p className="container_content_desc">
                  Shorten the time between initial idea and complete product.
                  Take delays and misinformation out of the equation.
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="1100"
              className="animatedContainer"
            >
              <div className="container_content">
                <i className="aos_Container fa-solid fa-circle-check"></i>
                <h3 className="container_content_header">
                  Protect institutional knowledge
                </h3>
                <p className="container_content_desc">
                  People come and people go, but if you capture their
                  contributions in one central place, that expertise sticks
                  around.
                </p>
              </div>
            </div>
          </div>

          <h1 className="heading">Ensure your company stays on course</h1>
          <h2 className="subHeading">
            Here are just a few types of technologists that we help.
          </h2>
          <div className="egineer">
            {/* Engineer carts  */}
            {data.map((item) => {
              return (
                <EngineerCarts
                  key={item.id}
                  title={item.title}
                  desc={item.desc}
                  setShow={setShow}
                  show={show}
                  id={item.id}
                />
              );
            })}
          </div>
          <ROICarts />
          {/* Links */}

          <Links />
        </div>
      </div>
    </>
  );
};

export default ThreeContainer;
