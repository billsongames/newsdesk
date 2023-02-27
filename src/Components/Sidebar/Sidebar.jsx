import React from "react";

import "./sidebar.css"

const Sidebar = () => {

return (
    <div className="sidebar-container">
    <h2 className="sidebar-filters-text">Filters</h2>
    <ul className="sidebar-filters">
        <li className="sidebar-filters-item"><a href="#">Most Recent</a></li>
        <li className="sidebar-filters-item"><a href="#">By Publisher</a></li>
    </ul>

    <h2 className="sidebar-share-text">Share</h2>
    <ul className="sidebar-share">
        <li className="sidebar-share-item"><a href="#">Email</a></li>
        <li className="sidebar-share-item"><a href="#">Twitter</a></li>
        <li className="sidebar-share-item"><a href="#">Facebook</a></li>
    </ul>
    </div>
);
};

export default Sidebar;
