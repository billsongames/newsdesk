import React, { useState } from "react";

import "./navbar.css"

const NavBar = ({ onSubmit }) => {
    const [search, setSearch] = useState("");

    const handleSearchInput = (event) => {
        setSearch(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(search)
    };





    return (
    <div className="navbar-container">
        <img className="navbar-logo" src="/logo2.png" alt="logo" />
        <ul className="navbar-categories">
            <li className="navbar-categories-item">Tech</li>
            <li className="navbar-categories-item">Business</li>
            <li className="navbar-categories-item">Politics</li>
            <li className="navbar-categories-item">Sport</li>
            <li className="navbar-categories-item">Entertainment</li>
        </ul>

        <form className='search-form' onSubmit={handleSubmit}>
            <input 
                className='search-form__input-box' 
                type='text' 
                placeholder='Search' 
                value={search}
                onChange={handleSearchInput}
        />
    
        <button className='search-form__button' type='submit' data-testid='button'>
            Search
        </button>
        </form>
        

    </div>
    );
};

export default NavBar;
