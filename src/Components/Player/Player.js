import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
const Player = (props) => {
   
    const { image, name, id, salary } = props.player;

    return (
        <div className="player ">
            <div>
                <h3 className="idNumber">{id}</h3>
                <img src={image} alt="" />
            </div>
            <div className="player-details">
                <h2>{name}</h2>
                {/* <h4>Role: {role}</h4> */}
                <h4>Salary: ${salary}</h4>
                <button
                    className="hire-button"
                    onClick={() => props.handleAddPlayer(props.player)}
                >
          <FontAwesomeIcon icon={faUserPlus} />          Add Player</button>
            </div>
        </div>
    );
};

export default Player;