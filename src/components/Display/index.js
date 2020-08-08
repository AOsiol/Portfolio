import React from "react";
import "./style.css";

function Display(props) {
  console.log(props);
  return (
    <>
      <div className="portfolioCard">
        <a className="title" a target="_blank" href={props.data.github}>
          {props.data.title}
        </a>
        <div className="description">
          <div className="narrative">{props.data.description}</div>
          <div className="portfolioImage">
            <a target="_blank" href={props.data.link}>
              <img src={props.data.image} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Display;
