import React from "react";
import Card from '../../components/Card';
import IsLoading from '../../components/IsLoading';
import { useData } from "../../hooks/useData";
import { routes } from "../../constants/routes";

export default function MainList() {
  
  const {data} = useData();

  if (!data.length) return <IsLoading />;

  return data.map(i => (
    <Card 
      key={i.ship_id}
      title={i.ship_name}
      cardImage={!i.image ? 'https://metalworking-expo.com/upload/medialibrary/d27/blank.png' : i.image}
      text={`Home port: ${i.home_port}`}
      additional_1={!i.year_built ? 'N/A' : i.year_built}
      additional_2={!i.weight_lbs ? 'Lbs unknown' : `${i.weight_lbs} lbs`}
      path={`${routes.items.index}/${i.ship_id}`}
      button_title='See more'
      btn_color='default'
    />
  ))
}