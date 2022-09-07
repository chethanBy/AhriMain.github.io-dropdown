import React from "react";
import "./DropdownItem.css";

const DropdownItem = (props) => {
  return (
    <>
      <a className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    </>
  );
};

export default DropdownItem;
