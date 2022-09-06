import './App.css';
import { Heading } from './component/Heading/Heading';
import { NavBar } from './component/NavBar/NavBar';
import { useEffect, useState } from 'react';
import { WeatherCardContainer } from './component/WeatherCard/WeatherCardContainer/WeatherCardContainer';

const App = () => {
  const [weather, setWeather] = useState();
  //const [weatherHistory, setWeatherHistory] = useState();

  const apiKey = '737d76764aadcf0f2bb5a71eb378395c';
  const cityName = 'Austin';

  
  useEffect(() => {
    const fetchWeather = async () => {
      //const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${},${},${}&appid=${}`)
      const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
      const weatherCurrentData = await weatherResponse.json();
      setWeather(weatherCurrentData);
    }
    fetchWeather();
  }, []);

  
  return (
    <div className="App">
     
     <header className='header'>
        <Heading />
     </header>
     <nav>
      <NavBar />
     </nav>
     <main>
        {weather && <WeatherCardContainer weatherData={weather}/>}
     </main>

    </div>
  );
}

export default App;
