import React from "react";
import DropdownItem from "./DropdownItem";
import { HiOutlineCog } from "react-icons/hi";
import "./DropdownMenu.css";

const DropdownMenu = () => {
  return (
    <div className="dropdown">
      <DropdownItem>My Profile</DropdownItem>
      <DropdownItem leftIcon={<HiOutlineCog />}>My Profile</DropdownItem>
    </div>
  );
};

export default DropdownMenu;
