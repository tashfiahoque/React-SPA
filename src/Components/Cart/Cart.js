import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const cart = props.cart;
    const total = cart.reduce((total, cart) => total + cart.hirePrice, 0);

    return (
        <>
            <div className="cart-container">
                <h1>Total Players Added: {cart.length}</h1>
                <ul className="list-group">
                    {cart.map((addedPlayer) => <li className="list-group-item d-flex my-2 shadow justify-content-between" key={addedPlayer.id}>
                        <span>{addedPlayer.name}</span> <span> Tk. {addedPlayer.hirePrice}</span>
                        <span><button className="btn btn-sm hire-button" onClick={() => props.handleRemovePlayer(addedPlayer.id)}>Remove</button></span>
                    </li>)}
                </ul>
                <h5 className="budget">Total Budget: $ {total}</h5>
            </div>
        </>
    );
};

export default Cart;