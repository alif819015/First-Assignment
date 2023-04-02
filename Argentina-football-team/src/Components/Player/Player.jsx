import React from "react";
import "./Player.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGolfBall } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
  const { img, name, born, currentTeams, price, height } = props.player;
  const handelAddToCard = props.handelAddToCard;

  return (
        <div className="players">
      <img src={img} alt="" />
      <h2>{name}</h2>
      <p><span style={{fontWeight: 800}}>Born: </span> {born}</p>
      <p><span style={{fontWeight: 800}}>Price: </span> ${price}</p>
      <p><span style={{fontWeight: 800}}>Current-Teams: </span> {currentTeams}</p>
      <p><span style={{fontWeight: 800}}>Height: </span> {height}</p>
      <button onClick={ () => handelAddToCard(props.player)} className="btn-info">Player Info <FontAwesomeIcon icon={faGolfBall} /></button>
      </div>
      
  );
};

export default Player;
