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
import { restaurants } from './services/restaurant/restaurant';
import { HomePage } from './components/Home-Page/HomePage';
import { TitleAndLogo } from './components/Title-And-Logo/TitleAndLogo';
import { Footer } from './components/footer/Footer';



function App() {
  return (
    <div className="App">
      <>
        <NavBar />
        {/* <HomePage title="מסעדות כשרות בדרום" logo={logo} /> */}
        {/* <AddCard /> */}
        <Routes>
          <Route path='/' element={<HomePage title="מסעדות כשרות בדרום" logo={logo} description={".באתר זה תוכלו למצוא מגוון של מסעדות בכשרויות שונות בדרום"} />} />
          {/*   <Route path='/' element={<TitleAndLogo title="מסעדות כשרות בדרום" logo={logo} description={"באתר זה תוכלו למצוא מגוון של מסעדות בכשרויות שונות בדרום"}/>} /> */}
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
