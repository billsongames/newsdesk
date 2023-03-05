import React, { useState } from "react";
import { Link } from "react-router-dom";
import FacebookLogin from 'react-facebook-login'

import "./navbar.css"

const NavBar = ({ onNavBarCategoryChange, onSearchSubmit, userID, onLogin, onLogout }) => {
    const [search, setSearch] = useState("");

    const handleSearchInput = (event) => {
        setSearch(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearchSubmit(search)
    };

    return (
    <div className="navbar-container">
        <img className="navbar-logo" src="/logo2.png" alt="logo" />
        <div className="navbar-categories">
          <Link to={"/"}>
            <button className="navbar-button" onClick={() => onNavBarCategoryChange("general")}>General</button>
          </Link>
          <Link to={"/"}>
            <button className="navbar-button" onClick={() => onNavBarCategoryChange("world")}>World</button>
          </Link>
          <Link to={"/"}>
            <button className="navbar-button" onClick={() => onNavBarCategoryChange("national")}>National</button>
          </Link>
          <Link to={"/"}>
            <button className="navbar-button" onClick={() => onNavBarCategoryChange("business")}>Business</button>
          </Link>
          <Link to={"/"}>
            <button className="navbar-button" onClick={() => onNavBarCategoryChange("technology")}>Technology</button>
          </Link>
          <Link to={"/"}>
            <button className="navbar-button" onClick={() => onNavBarCategoryChange("entertainment")}>Entertainment</button>
          </Link>
          <Link to={"/"}>
            <button className="navbar-button" onClick={() => onNavBarCategoryChange("sports")}>Sports</button>
          </Link>
          <Link to={"/"}>
            <button className="navbar-button" onClick={() => onNavBarCategoryChange("science")}>Science</button>
          </Link>
          <Link to={"/"}>
            <button className="navbar-button" onClick={() => onNavBarCategoryChange("health")}>Health</button>
          </Link>          
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
        {userID
          ? <>
          <Link to={"./account"}>Profile</Link>
          <button onClick={onLogout}>SignOut</button>
          </>
          : <FacebookLogin
              appId="582093880470486"
              autoLoad={false}
              fields="name,email,picture"
              callback={onLogin} />    
        }
    </div>
    );
};

export default NavBar;