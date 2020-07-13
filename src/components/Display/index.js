import React from "react";
import "./style.css";

function Display(props) {
  console.log(props);
  return (
    <div>
      <strong>{props.data.title}</strong>
      <p>{props.data.description}</p>
      <img src={props.data.image} />
    </div>
  );
}
export default Display;
