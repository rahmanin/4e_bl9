import React from "react";
import Button from '../Button';

import './index.scss';

export default function CardBig({title, cardImage, path, button_title, btn_color, ship_type, weight_lbs, weight_kg, year_built, home_port, speed_kn, url, url_title, url_color}) {
  return <div className="big_card">
    <h2 className="text">{title}</h2>
    <img className="image" src={cardImage} alt=""/>
    <table className="text info">
      <tbody>
        <tr>
          <td>Ship type</td>
          <td>{ship_type}</td>
        </tr>
        <tr>
          <td>Weight lbs</td>
          <td>{weight_lbs}</td>
        </tr>
        <tr>
          <td>Weight kg</td>
          <td>{weight_kg}</td>
        </tr>
        <tr>
          <td>Year built</td>
          <td>{year_built}</td>
        </tr>
        <tr>
          <td>Home port</td>
          <td>{home_port}</td>
        </tr>
        <tr>
          <td>Speed kn</td>
          <td>{speed_kn}</td>
        </tr>
        </tbody>
    </table>
    <div className="btn_wrapper">
      <a href={path}>
        <Button
          title={button_title}
          type="button"
          color={btn_color}
        />
      </a>
      <a href={url}>
        <Button
          title={url_title}
          type="button"
          color={url_color}
        />
      </a>
    </div>
  </div>  
}