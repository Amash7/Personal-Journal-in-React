import React from "react";
import './Main.css';

export default function Main(props) {
  return (
    <div>
      <section>
        <img src={require(`../images/${props.img}`)} className="main-image"/>
        <span className="right">
          <img src={require("../images/location.png")} alt="location marker" className="locator"/>
          <span className="location">{props.loc}</span>
          <span className="gray">
            <a href={props.map}><span className="gray1">View on Google Maps</span></a>
          </span>
          <h1 className="title">{props.titles}</h1>
          <p className="dates">
            {props.startDate1} <span>-</span> {props.endDate1}
          </p>
          {<p className="description">{props.description1}</p>}
        </span>
      </section>
    </div>
  );
}
