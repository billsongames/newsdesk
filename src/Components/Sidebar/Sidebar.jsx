import React, { useState, useEffect } from "react";

import "./sidebar.css"

const Sidebar = (props) => {
  const { reverseOrder, articles, selected, setSelected } = props;
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

  const uniqueSources = [...new Set(articles.map(article => article.source.name))];

return (
  <div className="sidebar-container">
    <div className="sidebar-filters-text">
      Sort by Date:

{/*       <div className="sidebar-buttons-container"> */}
      <button className="sidebar-button" onClick={newClickHandler} disabled={newArticles}>Most Recent</button>
      <button className="sidebar-button" onClick={oldClickHandler} disabled={oldArticles}>Oldest</button>
    </div>

    <div className="sidebar-filters-text">
      Filter by Source:

      <select value={selected}
        onChange={(e) => setSelected(e.target.value)}>
          console.log({selected})
        <option value="">-All Sources-</option>
          {uniqueSources.map((source) => (
          <option value={source}>{source}</option>
          ))}
      </select>
    </div>
  </div>



);
}


export default Sidebar;