import React from "react";
import './index.scss';

export default function User({name, avatar}) {
  return <div className="user-wrapper">
    <div className="user-name">{name}</div>
    <img className="avatar" src={avatar} alt=""/>
  </div>
}