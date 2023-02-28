import React, { useState } from "react";

import "./sidebar.css"

const Sidebar = (props) => {
    const { reverseOrder } = props;
    const [newArticles, setNewArticles] = useState(true);
    const [oldArticles, setOldArticles] = useState(false);

    const newClickHandler = () => {
        setNewArticles(true);
        setOldArticles(false);
        reverseOrder();
};

    const oldClickHandler = () => {
        setNewArticles(false);
        setOldArticles(true);
        reverseOrder();
    };

return (
    <div className="sidebar-container">
    <h2 className="sidebar-filters-text">Sort by Date</h2>
    <div className="sidebar">
    <button className="sidebar-button" onClick={newClickHandler} disabled={newArticles}>Most Recent</button>
    <button className="sidebar-button" onClick={oldClickHandler} disabled={oldArticles}>Oldest</button>
</div>

    <h2 className="sidebar-share-text">Share</h2>
    <ul className="sidebar-share">
        <li className="sidebar-share-item"><a href="/">Email</a></li>
        <li className="sidebar-share-item"><a href="/">Twitter</a></li>
        <li className="sidebar-share-item"><a href="/">Facebook</a></li>
    </ul>
    </div>
);
};

export default Sidebar;
