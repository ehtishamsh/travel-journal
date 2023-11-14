import React from "react";

function Card(props) {
  return (
    <div className="card_section">
      <img src={`images/${props.img}`} alt="" className="card_img" />
      <div className="card_body">
        <div className="card_body_location">
          <img src="images/location-logo.png" alt="" />
          <p className="location">{props.country}</p>
          <a href={props.link}>View on Google Maps</a>
        </div>
        <h1>{props.place}</h1>
        <h2>{props.date}</h2>
        <p className="disc">{props.disc}</p>
      </div>
    </div>
  );
}

export default Card;
