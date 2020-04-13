import React from "react";
import User from "../User";
import './index.scss';

export default function Header() {
  return <div className="header">
    <div className="logo"></div>
    <User name="User" avatar="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"/>
  </div>
}