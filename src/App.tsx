import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Navigate from './components/Navigate';
import {Routes, Route} from "react-router-dom"
import Popular from './components/Popular';
import TopRated from './components/TopRated';
import SearchResult from './components/Search';
import { useAppSelector } from './components/Hooks/useAppSelector';
import DetailPage from './components/DetailPage';
import Favorite from './components/Favorite';

function App() {

  const {dark} = useAppSelector(s => s.SearchSlice);
  return (
    <div className="App" style={{
      color: dark ? "white": "",
      backgroundColor: dark ? "black": ""
    }}>
        <Header/>
        <Home/>
        <Navigate/>

        <Routes>
          <Route path="/popular" element={<Popular/>}/>
          <Route path="/topRated" element={<TopRated/>}/>
          <Route path='/informResult/:movieName' element={<SearchResult/>}/>
          <Route path="/detailPage/:movieId" element={<DetailPage/>}/>
          <Route path='/favorite' element={<Favorite/>}/>
        </Routes>
    </div>
  );
}

export default App;
