import React from "react";
import Button from './Button';

export default function Card(props) {
  return <div className="card-wrapper">
    <h2>{props.title}</h2>
    <div className="card-image"></div>
    <p>Line 4:10:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles.</p>
    <Button />
  </div>
}