import './App.css';
import { Heading } from './component/Heading/Heading.jsx';
import { NavBar } from './component/NavBar/NavBar.jsx';
import { useEffect, useState } from 'react';
import { WeatherCardContainer } from './component/WeatherCard/WeatherCardContainer/WeatherCardContainer.jsx';


const App = () => {
  const [weather, setWeather] = useState();
  const [weatherHistory, setWeatherHistory] = useState();

  return (
    <div className="App">
     
     <header className='header'>
        <Heading />
     </header>
     <nav className='nav'>
      <NavBar setWeather={setWeather} setWeatherHistory={setWeatherHistory}/>
     </nav>
     <main className='main'>
        {weather ? <WeatherCardContainer weatherData={weather}/> : <h1>Weather will display here.</h1>}
        {weatherHistory ? <WeatherCardContainer weatherData={weatherHistory}/> : <h1>Weather history will display here.</h1>}
     </main>

    </div>
  );
}

export default App;
