import React from "react";
import Button from '../Button';
import {Link} from 'react-router-dom';

import './index.scss';

export default function Card({title, cardImage, text, additional_1, additional_2, path, button_title, btn_color}) {
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
  </div>
}