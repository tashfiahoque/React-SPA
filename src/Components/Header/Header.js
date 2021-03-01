import React from 'react';
import './Header.css';


const Header = (props) => {
    const setCategory = props.setCategory;

    return (
        <>
            <h1 className="text-center text-design">Create Your Own Invincible Team</h1>
            <nav className="navbar navbar-expand-lg" id="nav">
                <div className="container">
                    <a className="navbar-brand logo" href="#nav">Logo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse menu" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#nav" onClick={() => setCategory('football')}>Football</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#nav" onClick={() => setCategory('cricket')}>Cricket</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#nav" onClick={() => setCategory('basketball')}>Basketball</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;