import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import "./StackCards.css";

const StackCards = () => {


  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div className="stackCards">
        <div className="cards">
          {/* Left */}
          <div className="leftCard" style={{background : darkMode && '#2d2d2d', color : darkMode && '#c4c8cc', border : darkMode && '1px solid #808080'}} >
            <div className="leftCard_content">
              <img
                className="leftCard_logo_stack"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/1280px-Stack_Overflow_logo.svg.png"
                alt=""
              />
              <img
                className="leftCard_globe"
                src="https://cdn.sstatic.net/Img/home/illo-public.svg?v=14bd5a506009"
                alt=""
              />
              {/* Bottom content  */}
              <div className="bottomContent">
                <h1 style={{color : darkMode && '#E7E9EB'}}>
                  A public platform building the definitive collection of coding
                  questions & answers{" "}
                </h1>
                <h2 style={{color : darkMode && '#ACB3B9'}}>
                  A community-based space to find and contribute answers to
                  technical challenges, and one of the most popular websites in
                  the world.
                </h2>
                <button className="pinkCart_button_stack" style={{background : darkMode && '#2d2d2d', color : darkMode && '#c4c8cc', border : darkMode && '1px solid #808080'}}>Join the community</button>
                <p className="desc_searchContent" style={{color : darkMode && 'white'}} >
                  or
                  <a href="/searchContent" style={{color : darkMode && '#c4c8cc'}}>search content</a>
                </p>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="rightCard" style={{background : darkMode && '#2d2d2d', color : darkMode && '#c4c8cc', border : darkMode && '1px solid #808080'}}>
            <div className="rightCard_content">
              <div className="rightheader">
                <img
                  className="headerLogo"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png"
                  alt=""
                />
                <div className="rightBorder"></div>
                <h1>For Teams</h1>
              </div>
              <img
                className="rightCard_image"
                src="https://cdn.sstatic.net/Img/home/illo-teams.svg?v=7e543f14fcc0"
                alt=""
              />
              {/* Bottom content  */}
              <div className="bottomContent_right">
                <h1 style={{color : darkMode && '#E7E9EB'}}>
                  A private collaboration & knowledge sharing SaaS platform for
                  companies
                </h1>
                <h2 style={{color : darkMode && '#ACB3B9'}}>
                  A web-based platform to increase productivity, decrease cycle
                  times, accelerate time to market, and protect institutional
                  knowledge.
                </h2>
                <div className="getStarted1">
              <span className="border_stacks"></span>
              <span className="getStarted_text" style={{color : darkMode && '#c4c8cc'}}>Get started</span>
              <span className="border_stacks"></span>
            </div>
            <div className="two_buttons">
              <button className="orgBtn1" style={{background : darkMode && '#2d2d2d', color : darkMode && '#c4c8cc', border : darkMode && '1px solid #808080'}}>
                For large organizations
                <span>
                  <i class="orgButtons fa-solid fa-building"></i>
                </span>
              </button>
              <button className="orgBtn1 taskBtn2" style={{background : darkMode && '#2d2d2d', color : darkMode && '#379FEF', border : darkMode && '1px solid #379FEF'}}>
                For small teams
                <span>
                  <i class="orgButtons fa-solid fa-user-group" style={{color : darkMode && '#379FEF'}}></i>
                </span>
              </button>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StackCards;
