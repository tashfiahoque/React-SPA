import React from 'react';
import './PlayersList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const PlayersList = (props) => {

    const { name, img, hirePrice, currentClub } = props.player;
    return (
        <>
            <div className="col-md-4">
                <div className="single-item text-center my-4">
                    <div className="card p-2">
                        <img className="card-img-top img-fluid" src={img} alt="avatar" />
                        <div className="card-body">
                            <h3 className="card-title">Name: {name}</h3>
                            <h4 className="card-title">Salary: $ {hirePrice}</h4>
                            <h3 className="card-title">Current Club: {currentClub}</h3>
                            <button className="btn btn-sm hire-button"
                                onClick={() => props.handleAddPlayer(props.player)}>
                                <FontAwesomeIcon icon={faShoppingCart} /> Hire </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default PlayersList;