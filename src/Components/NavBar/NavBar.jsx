import React, { useState } from "react";

import "./navbar.css"

const NavBar = ({ onNavBarCategoryChange,onSubmit }) => {
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
        <div className="navbar-categories">
          <button className="navbar-button" onClick={() => onNavBarCategoryChange("general")}>General</button>
          <button className="navbar-button" onClick={() => onNavBarCategoryChange("world")}>World</button>
          <button className="navbar-button" onClick={() => onNavBarCategoryChange("national")}>National</button>
          <button className="navbar-button" onClick={() => onNavBarCategoryChange("business")}>Business</button>
          <button className="navbar-button" onClick={() => onNavBarCategoryChange("technology")}>Technology</button>
          <button className="navbar-button" onClick={() => onNavBarCategoryChange("entertainment")}>Entertainment</button>
          <button className="navbar-button" onClick={() => onNavBarCategoryChange("sports")}>Sports</button>
          <button className="navbar-button" onClick={() => onNavBarCategoryChange("science")}>Science</button>
          <button className="navbar-button" onClick={() => onNavBarCategoryChange("health")}>Health</button>
{/*             <li className="navbar-categories-item">General</li>
            <li className="navbar-categories-item">World</li>
            <li className="navbar-categories-item">National</li>
            <li className="navbar-categories-item">Business</li>
            <li className="navbar-categories-item">Technology</li>
            <li className="navbar-categories-item">Entertainment</li>
            <li className="navbar-categories-item">Sports</li>
            <li className="navbar-categories-item">Science</li> */}



          </div>  

            

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