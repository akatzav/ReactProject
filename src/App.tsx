import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Restaurant from './pages/card-item/Restaurant';
import RestaurantList from './pages/card-list/RestaurantList';
import EditCard from './pages/edit-card/EditCard';
import CardDetails from './pages/card-details/CardDetails';
import logo from './image/iconNew.png'
import { AddCard } from './components/Add-Card/AddCard';
import NavBar from './components/NavBar/NavBar';
import { Filters } from './components/filters/Filters';
import { useState } from 'react';
import { restaurants } from './services/restaurant';
import { HomePage } from './components/Home-Page/HomePage';



function App() {
  return (
    <div className="App">
      <>
        <NavBar /> <hr /><br></br><br /><br /><br />
        <HomePage title="מסעדות כשרות בדרום" logo={logo} />
        {/* <AddCard /> */}
        <Routes>
          <Route path='/Filters' element={<Filters />} />
          <Route path="/AddCard" element={<AddCard />} />
          <Route path="/RestaurantList" element={<RestaurantList />} />
          <Route path="/cards" element={<RestaurantList />} />
          <Route path="/cards/edit/:id" element={<EditCard />} />
          <Route path='/cards/details/:id' element={<CardDetails />} />

        </Routes>
      </>
    </div>
  );
}

export default App;