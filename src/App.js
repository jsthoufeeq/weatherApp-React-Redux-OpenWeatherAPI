import React from 'react';
import './App.css';
import SearchInput from './components/search/searchInput'
import CityWeatherComponent from './components/weather/cityWeather'

function App() {
  return (
    <div className="app">
      <header className="container-fluid">
        <h1 className="text-center mt-5">Weather application</h1>
        <SearchInput />
        <CityWeatherComponent />
      </header>
    </div>
  );
}

export default App;
