import React, { useContext }  from "react";
import User from "../User";
import {Link} from 'react-router-dom';
import { routes } from "../../constants/routes";
import Button from '../Button';
import { favsList } from '../../store/selectors';
import { useSelector } from "react-redux";

import './index.scss';

export default function Header() {
  const favourites = useSelector(favsList);
  const quantity = favourites.length;

  return <div className="header">
    <Link to={routes.items.index}>
      <div className="logo"></div>
    </Link>
    <Link to={routes.items.favs}>
      <Button 
        title={`Favs (${quantity})`}
        color="primary"
      />
    </Link>
    <User name="User" avatar="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"/>
  </div>
}