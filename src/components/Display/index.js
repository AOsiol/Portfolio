import React from "react";
import "./style.css";

function Display(props) {
  console.log(props);
  return (
    <div className="fascis">
      <strong className="title">{props.data.title}</strong>
      {/* <div className=> */}
      <div className="description">
        {props.data.description}
        <a target="_blank" href={props.data.link}>
          <img className="portfolioImage" src={props.data.image} />
        </a>
        {/* </div> */}
      </div>
    </div>
  );
}
export default Display;
