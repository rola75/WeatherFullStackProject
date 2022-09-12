import './App.css';
import { Heading } from './component/Heading/Heading.jsx';
import { NavBar } from './component/NavBar/NavBar.jsx';
import { useState } from 'react';
import { WeatherCardContainer } from './component/WeatherCard/WeatherCardContainer/WeatherCardContainer.jsx';
import { WeatherHistoryContainer } from './component/WeatherCard/WeatherHistoryContainer/WeatherHistoryContainer';

const App = () => {
  const [weather, setWeather] = useState();
  const [weatherHistory, setWeatherHistory] = useState();

  console.log("this is the app current", weather)
  console.log("this is the app history", weatherHistory)
 


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
        {weatherHistory ? <WeatherHistoryContainer weatherDataHistroy={weatherHistory}/> : <h1>Weather history will display here.</h1>}
     </main>

    </div>
  );
}

export default App;
