import React from "react";
import User from "../User";
import './index.scss';

export default function Header() {
  return <div className="header-wrapper">
    <div className="logo"></div>
    <User name="Name"/>
  </div>
}