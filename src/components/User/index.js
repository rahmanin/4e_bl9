import React from "react";
import './index.scss';

export default function User(props) {
  return <div className="user-wrapper">
    <div className="user-name">{props.name}</div>
    <div className="avatar">{props.avatar}</div>
  </div>
}