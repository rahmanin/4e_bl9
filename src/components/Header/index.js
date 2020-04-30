import React from "react";
import User from "../User";
import {Link} from 'react-router-dom';
import { routes } from "../../constants/routes";
import './index.scss';

export default function Header() {
  return <div className="header">
    <Link to={routes.items.index}>
      <div className="logo"></div>
    </Link>
    <User name="User" avatar="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"/>
  </div>
}