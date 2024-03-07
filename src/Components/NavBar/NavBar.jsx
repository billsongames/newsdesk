import React, { useState, useContext } from "react";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import FacebookLogin from 'react-facebook-login'

import { DarkModeContext } from "../../context/DarkModeContext";

//import DateDisplay from '../DateDisplay/DateDisplay';

import "./navbar.css"

const NavBar = ({ onNavBarCategoryChange, onSearchSubmit, userID, onLogin, onLogout }) => {

  const appId = process.env.REACT_APP_FACEBOOK_APP_ID

  const {darkMode} = useContext(DarkModeContext)

  const [search, setSearch] = useState("");

  const handleSearchInput = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(search)
  };

  return (
    <div className="navbar">

      <div className="navbar-container">
      <Link to={"/"}>
        {darkMode
        ? <img className="navbar-logo" src="/logo2_dark.png" alt="logo" />
        : <img className="navbar-logo" src="/logo2_light.png" alt="logo" />
        }
      </Link>  

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
      </div>

      <div className="navbar-log-in-search-container">
        <div className="navbar__facebook-login">
          {userID
          ? <>
          <div className="navbar-profile">
            <Link to={'/'}>
              <button onClick={onLogout} className="sign-out-button">Log out</button>
            </Link>
            <Link to={"./saved-articles"}>
              <button className="saved-articles-button">Saved articles</button>
            </Link>
          </div>


          </>
          : <FacebookLogin
              appId = {process.env.REACT_APP_FACEBOOK_APP_ID}
              autoLoad = {false}
              fields = "name,email,picture"
              callback = {onLogin}
              cssClass = "my-facebook-button-class"
              cookie = {true}
          />    
        }
        </div>

        <form className='search-form' onSubmit={handleSubmit}>
          <input 
            className='search-form__input' 
            type='text' 
            placeholder='Search articles' 
            value={search}
            onChange={handleSearchInput}
            />
          <Link to={"/"}>
          <button className='search-form__button' type='submit' data-testid='button'>
            {darkMode
            ? <img src="./search-icon-50px_dark.png"></img>
            : <img src="./search-icon-50px_light.png"></img>
            }            
          </button>
          </Link>
        </form>

      </div>
    </div>

  );
};

NavBar.propTypes = {
  onNavBarCategoryChange: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
  userID: PropTypes.string.isRequired,
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired
}

export default NavBar;