import React from "react";
import Button from '../Button';
import './index.scss';

export default function Card({title, cardImage}) {
  return <div className="card-wrapper">
    <h2>{title}</h2>
    <img className="card-image" src={cardImage} alt=""/>
    <p>Line 4:10:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles.</p>
    <Button title="See more" type="default"/>
  </div>
}