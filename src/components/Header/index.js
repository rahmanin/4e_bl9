import React, { useContext }  from "react";
import User from "../User";
import {Link} from 'react-router-dom';
import { routes } from "../../constants/routes";
import Button from '../Button';
import { FavoritesContext } from "../../providers/FavouritesProvider";

import './index.scss';

export default function Header() {

  const {favorites} = useContext(FavoritesContext);
  const quantity = favorites.length;

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