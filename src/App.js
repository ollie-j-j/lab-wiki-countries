import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';

function App() {
  const [countryData, setCountryData] = useState(countries);

  useEffect(() => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
      .then(res => {
        return res.json();
      })
      .then(apiData => {
        setCountryData([...countryData, ...apiData]);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <CountriesList countries={countryData} />
        <Routes>
          <Route path="/:countryCode" element={<CountryDetails countries={countryData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
