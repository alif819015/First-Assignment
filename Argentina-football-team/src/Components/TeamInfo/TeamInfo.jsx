import React, { useEffect, useState } from "react";
import Info from "../Info/Info";
import Player from "../Player/Player";
import "./TeamInfo.css";
const TeamInfo = () => {
  const [players, usePlayers] = useState([]);
  const [cart, useCart] = useState([]);
  useEffect(() => {
    fetch("player.json")
      .then((res) => res.json())
      .then((data) => usePlayers(data));
  }, []);
  const handelAddToCard = (player) => {
    const newCart = [...cart, player];
    useCart(newCart);
  };
  return (
    <div className="player-Container">
      <div className="list-Container">
        {players.map((player) => (
          <Player
            key={player.name}
            player={player}
            handelAddToCard={handelAddToCard}
          ></Player>
        ))}
      </div>
      <Info cart={cart}></Info>
      </div>
  );
};

export default TeamInfo;
