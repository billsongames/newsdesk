import React from "react";

import "../../styles/navbar.css"

const NavBar = () => {
    <div className="navbar-container">
        <img className="navbar-logo" src="/" alt="logo" />
        <ul className="navbar-categories">
            <li className="navbar-categories-item">Tech</li>
            <li className="navbar-categories-item">Business</li>
            <li className="navbar-categories-item">Politics</li>
            <li className="navbar-categories-item">Sport</li>
            <li className="navbar-categories-item">Entertainment</li>
        </ul>

        <form className='search-form'>
            <input 
                className='search-form__input-box' 
                type='text' 
                placeholder='Search' 
        />
    
        <button className='search-form__button' type='submit' data-testid='button'>
            Search
        </button>
        </form>
        

    </div>
}

export default NavBar;
