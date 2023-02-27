import React, { useState } from "react";

import "../../styles/navbar.css"

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
        <img className="navbar-logo" src="/" alt="logo" />
        <ul className="navbar-categories">
            <li className="navbar-categories-item">General</li>
            <li className="navbar-categories-item">World</li>
            <li className="navbar-categories-item">National</li>
            <li className="navbar-categories-item">Business</li>
            <li className="navbar-categories-item">Technology</li>
            <li className="navbar-categories-item">Entertainment</li>
            <li className="navbar-categories-item">Sports</li>
            <li className="navbar-categories-item">Science</li>
            <li className="navbar-categories-item">Health</li>
        </ul>

        <form className='search-form' onSubmit={handleSubmit}>
            <input 
                className='search-form__input' 
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
