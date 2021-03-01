import React, { useEffect, useState } from 'react';
import playersData from '../../data.json';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import PlayersList from '../PlayersList/PlayersList';


const Home = () => {

    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        setPlayers(playersData);
    }, [])
    const [category, setCategory] = useState('cricket');
    const matchedPlayersList = players.filter(item => item.category === category);

    const handleAddPlayer = (player) => {
        const newCart = [...cart, player];
        const uniquePlayerCart = newCart.reduce((unique, item) => {
            if (unique.includes(item)) {
                return unique
            } else {
                return [...unique, item]
            }
        }, []);
        setCart(uniquePlayerCart);
    }
    const handleRemovePlayer = (id) => {
        const playerRemoved = cart.filter(item => item.id !== id);
        setCart(playerRemoved);
    }
    return (
        <>
            <Header setCategory={setCategory} />
            <div className="container px-2">
                <div className="row food-items">
                    <div className="col-md-9 row border-right">
                        {
                            matchedPlayersList.map(player => <PlayersList player={player} handleAddPlayer={handleAddPlayer} key={player.id} />)
                        }
                    </div>

                    <div className="col-md-3">
                        <Cart cart={cart} handleRemovePlayer={handleRemovePlayer} />
                    </div>
                </div>
            </div>

        </>
    );
};

export default Home;