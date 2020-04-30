import React, { useContext }  from "react";
import Button from '../Button';
import {Link} from 'react-router-dom';
import { FavoritesContext } from "../../providers/FavouritesProvider";
import { useData } from "../../hooks/useData";

import './index.scss';

export default function Card({title, cardImage, text, additional_1, additional_2, path, button_title, btn_color}) {
  
  const { favorites, addToFavorites, deleteFromFavorites } = useContext(
    FavoritesContext
  );

  const {data} = useData();

  const isFavorite = (id) => {
    return favorites.has(id);
  } 

  const handleClick = (id) => {
    return isFavorite(id) ? deleteFromFavorites(id) : addToFavorites(id)
  } 

  console.log('asdasd', favorites);

  return <div className="card">
    <h2 className="text">{title}</h2>
    <img className="image" src={cardImage} alt=""/>
    <p className="text port">{text}</p>
    <div className="info_wrapper">
      <h2 className="text">{additional_1}</h2>
      <p className="text lbs">{additional_2}</p>
      <Link to={path}>
        <Button 
          title={button_title}
          type="button"
          color={btn_color}
        />
      </Link>
      
    </div>
    <Button 
      type="button"
      title={isFavorite(data.ship_id) ? "Remove" :  "Add to favs"}
      onClick={() => handleClick(data.ship_id)}
      color={isFavorite(data.ship_id) ? "fav2" : "fav1"}
      />
  </div>
}