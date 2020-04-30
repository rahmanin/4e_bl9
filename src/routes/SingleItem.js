import React from "react";
import MainCard from '../components/MainCard';
import Loader from '../components/Loader';
import { useItem } from "../hooks/useItem";
import { useParams } from "react-router-dom";
import { routes } from "../constants/routes";


export default function SingleItem() {
  
  const {ship_id} = useParams();
  const {item} = useItem(ship_id);
  if (!item) return <Loader />;
  
  return <MainCard 
    key={item.ship_id}
    title={item.ship_name}
    cardImage={!item.image ? 'https://metalworking-expo.com/upload/medialibrary/d27/blank.png' : item.image}
    additional_1={`${item.year_built}`}
    additional_2={`${item.weight_lbs} lbs`}
    path={`${routes.items.index}`}
    button_title='Main List'
    btn_color='primary'
    ship_type={!item.ship_type ? 'unknown' : item.ship_type}
    weight_lbs={!item.weight_lbs ? 'unknown' : item.weight_lbs}
    weight_kg={!item.weight_kg ? 'unknown' : item.weight_kg}
    year_built={!item.year_built ? 'unknown' : item.year_built}
    home_port={!item.home_port ? 'unknown' : item.home_port}
    speed_kn={!item.speed_kn ? 'unknown' : item.speed_kn}
    url={item.url}
    url_color='default'
    url_title='View on site'
  />
}