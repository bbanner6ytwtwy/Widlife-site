import React from 'react';
import "./index.css"
import Main from './pages/Main';
import Home from './pages/Home';
import Page from './pages/Page';
import Category from './pages/Category';
import Blog from './pages/Blog';
import {BrowserRouter, Routes, Route} from "react-router-dom"
function App() {
    return (
      <>
      <BrowserRouter>
       <Routes>
        <Route index element={<Main />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/forest/:id" element={<Page />}/>
        <Route path="/forest/family/:animal" element={<Category />}/>
       </Routes>
      </BrowserRouter>
      </>
    );
}

export default App
