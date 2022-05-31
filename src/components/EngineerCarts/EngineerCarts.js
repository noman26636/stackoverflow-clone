import React, { useState } from "react";
import "./EngineerCarts.css";
import classNames from "classnames";

const EngineerCarts = ({ title, desc, setShow, show, id }) => {
  const isActive = id === show;
  function nomanClick() {
    setShow(id);
    console.log(show[0].id);
  }
  return (
    <div className="engineerCarts">
      <div className="engineer_carts" onClick={nomanClick}>
        <div
          className={classNames([
            "engineer_cart",
            {
              active: isActive,
            },
          ])}
        >
          <i className="rocketIcon fa-brands fa-rocketchat"></i>
          <h3 className="title">{title}</h3>
          {isActive && <p className="engineer_cart_desc">{desc}</p>}
        </div>
      </div>
    </div>
  );
};

export default EngineerCarts;
