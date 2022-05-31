import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import Community from "./Community";
import "./MainHome.css";
import SlideText from "./SlideText";
import { Container, Row, Col } from "react-bootstrap";
const MainHome = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <Container>
      <Row>
        <div
          className="blackBackground"
          style={{ backgroundColor: darkMode && "#524C38" }}
        >
          <Container style={{justifyContent:"center !important"}}>
          <div className="bothCarts">
            <Row>
              <Col lg={5} sm={12}>
                <div
                  className="pinkCart"
                  style={{
                    backgroundColor: darkMode && "#2d2d2d",
                    boxShadow: darkMode && "0px 1px 3px black",
                  }}
                >
                  <div className="pinkCart_content">
                    <i className="searchCart fa-solid fa-magnifying-glass"></i>
                    <h1 style={{ color: darkMode && "#c4c8cc" }}>
                      Find the best answer to your technical question, help
                      others answer theirs
                    </h1>
                    <button
                      className="pinkCart_button"
                      style={{
                        backgroundColor: darkMode && "#2d2d2d",
                        color: darkMode && "gray",
                        border: darkMode && "1px solid gray",
                      }}
                    >
                      Join the community
                    </button>
                    <p className="desc_searchContent">
                      or
                      <a
                        href="/searchContent"
                        style={{ color: darkMode && "#c4c8cc" }}
                      >
                        search content
                      </a>
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={5} sm={12}>
                <div
                  className="blueCart"
                  style={{
                    backgroundColor: darkMode && "#2d2d2d",
                    boxShadow: darkMode && "0px 1px 3px black",
                  }}
                >
                  <div className="blueCart_content">
                    <i className=" lockCart fa-solid fa-lock"></i>
                    <h1 style={{ color: darkMode && "#c4c8cc" }}>
                      Want a secure, private space for your technical knowledge?
                    </h1>
                    <div className="getStarted">
                      <span className="border"></span>
                      <span
                        className="getStarted_text"
                        style={{ color: darkMode && "#c4c8cc" }}
                      >
                        Get started
                      </span>
                      <span className="border"></span>
                    </div>
                    <div className="two_buttons">
                      <button
                        className="orgBtn1"
                        style={{
                          backgroundColor: darkMode && "#2d2d2d",
                          color: darkMode && "gray",
                          border: darkMode && "1px solid gray",
                        }}
                      >
                        For large organizations
                        <span>
                          <i class="orgButtons fa-solid fa-building"></i>
                        </span>
                      </button>
                      <button
                        className="orgBtn1 taskBtn2"
                        style={{
                          backgroundColor: darkMode && "#2d2d2d",
                          color: darkMode && "gray",
                          border: darkMode && "1px solid gray",
                        }}
                      >
                        For small teams
                        <span>
                          <i class="orgButtons fa-solid fa-user-group"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          </Container>
          <SlideText />
          <div className="barWidth">
            <div className="bar" />
          </div>
          <Community />
        </div>
      </Row>
    </Container>
  );
};

export default MainHome;
