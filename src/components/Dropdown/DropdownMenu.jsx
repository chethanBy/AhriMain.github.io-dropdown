import React, { useState } from "react";
import DropdownItem from "./DropdownItem";
import { HiOutlineCog } from "react-icons/hi";
import { AiFillCaretLeft, AiOutlineThunderbolt } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";
import "./DropdownMenu.css";

const DropdownMenu = () => {
  // state for csstransition
  const [active, setActive] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  {
    /*we use this function as a callback in CSSTransition onEnter prop which runs this callback when it is 
mounted to DOM
*/
  }
  function calcHeight(el) {
    // el.offsetHeight is height in pixels of that component. we use this in dropdown menu style height to set height
    const height = el.offsetHeight;
    console.log(height);
    setMenuHeight(height);
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      {/* 
There are two dropdown containers for csstransitions component main and secondary.
we always go back to main conyainer and we use secondary as name for more container because we can style easy    
    */}
      <CSSTransition
        // if in is true then this CSSTransition component renders
        in={active === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        {/* CSSTransition component check for next element and adds transitions to that element by adding classNames we specified 
        in this component props to next element and we add css to animate
        */}
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          {/* if this item is clicked then only CSSTransition component will be triggered if active === settings as given in in prop boolean */}
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"settings"}
            setActive={setActive}
          >
            Settings
          </DropdownItem>
          <DropdownItem leftIcon="🦧" goToMenu="animals" setActive={setActive}>
            Animals
          </DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={active === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<AiFillCaretLeft />}
            goToMenu={"main"}
            setActive={setActive}
          />

          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            JavaScript
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Awesome!
          </DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={active === "animals"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            goToMenu="main"
            leftIcon={<AiFillCaretLeft />}
            setActive={setActive}
          >
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropdownMenu;
