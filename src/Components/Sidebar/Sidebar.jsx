import React from "react";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";

import "./sidebar.css"

const Sidebar = () => {
    const { search } = useLocation();

    const buildQueryString = (operation, valueObj) => {
        const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
        const newQueryParams = {
            ...currentQueryParams,
            [operation]: JSON.stringify(valueObj),
        };
        return qs.stringify(newQueryParams, {
            addQueryPrefix: true,
            encode: false,
        });
    };

return (
    <div className="sidebar-container">
    <h2 className="sidebar-filters-text">Sort by Date</h2>
    <ul className="sidebar-filters">
        <li className="sidebar-filters-item"><Link to={buildQueryString("sort", { publishedAt: -1 })}>Most Recent</Link></li>
        <li className="sidebar-filters-item"><Link to={buildQueryString("sort", { publishedAt: 1 })}>Oldest</Link></li>
    </ul>

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
