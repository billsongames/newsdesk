import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';

import DateDisplay from './DateDisplay/DateDisplay';
import Navbar from "./NavBar/NavBar"
import ArticleContainer from './ArticleContainer/ArticleContainer';

function App() {

  const [articleCategory, setArticleCategory] = useState("general")

  return (
    <BrowserRouter>
      <div className="App">
        <DateDisplay />
        <Navbar />
        <Routes>
          <Route path = "/" element={<ArticleContainer/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
