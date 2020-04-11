import React from "react";
import './index.scss';

export default function Button({title, onclick, type}) {
  return <button className="button-wrapper" type={type} onClick={onclick}>{title}</button>
}