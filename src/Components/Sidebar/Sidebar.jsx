import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"

import "./sidebar.css"

const Sidebar = (props) => {
  const { reverseOrder, articles, selected, setSelected } = props;
  const [newArticles, setNewArticles] = useState(true);
  const [oldArticles, setOldArticles] = useState(false);
  const [uniqueSources, setUniqueSources] = useState([])
  const [sourceSelected, setSourceSelected] = useState(selected)


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

  useEffect(() => {
    setUniqueSources([...new Set(articles.map(article => article.source.name))])

  }, [articles])

//  const uniqueSources = [...new Set(articles.map(article => article.source.name))];

return (
  <div className="sidebar-container">
    <div className="sidebar-filters-text">
      Sort by Date:
      <button data-testid="button1" className="sidebar-button" onClick={newClickHandler} disabled={newArticles}>Most Recent</button>
      <button data-testid="button2" className="sidebar-button" onClick={oldClickHandler} disabled={oldArticles}>Oldest</button>
    </div>

    <div className="sidebar-filters-text">
      Filter by Source:

      <select value={selected}
        onChange={(e) => setSelected(e.target.value)}>
          console.log({selected})
        <option value="">-All Sources-</option>
          {uniqueSources.map((source) => (
          <option value={source} key={source}>{source}</option>
          ))}
      </select>
    </div>
  </div>
);
}

Sidebar.propTypes = {
  reverseOrder: PropTypes.func.isRequired,
  articles: PropTypes.array.isRequired,
  setSelected: PropTypes.func.isRequired
}

export default Sidebar;