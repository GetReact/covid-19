import React from 'react';
import './App.css';
import Cards from './components/Cards.components'
import CountryPicker from './components/CountryPicker.component'
function App() {
  return (
    <div className="App">
      <Cards />
      <CountryPicker />

    </div>
  );
}

export default App;
