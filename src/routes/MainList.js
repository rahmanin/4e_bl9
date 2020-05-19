import React, { useContext }  from "react";
import Card from '../components/Card';
import Loader from '../components/Loader';
import { routes } from "../constants/routes";
import { useData } from "../hooks/useData";
import { FavoritesContext } from "../providers/FavouritesProvider";

export default function MainList() {
  
  const { favorites, addToFavorites, deleteFromFavorites } = useContext(
    FavoritesContext
  );

  const isFafourite = item => {
    return favorites.some(element => element.ship_id === item.ship_id);
  }
  
  const {data} = useData();

  const handleClick = (item) => {
    return isFafourite(item) ? deleteFromFavorites(item) : addToFavorites(item);
  } 

  if (!data.length) return <Loader />;

  return data.map(item => (
    <Card 
      key={item.ship_id}
      title={item.ship_name}
      cardImage={!item.image ? 'https://metalworking-expo.com/upload/medialibrary/d27/blank.png' : item.image}
      text={`Home port: ${item.home_port}`}
      additional_1={!item.year_built ? 'N/A' : item.year_built}
      additional_2={!item.weight_lbs ? 'Lbs unknown' : `${item.weight_lbs} lbs`}
      path={`${routes.items.index}/${item.ship_id}`}
      button_title='See more'
      btn_color='default'
      favTitle={isFafourite(item) ? "Remove" :  "Add to favs"}
      favOnClick={() => handleClick(item)}
      favColor={isFafourite(item) ? "fav2" : "fav1"}
    />
  ))
}