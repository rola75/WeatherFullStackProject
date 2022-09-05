import './App.css';
import { Heading } from './component/Heading/Heading';
import { NavBar } from './component/NavBar/NavBar';
import { useEffect, useState } from 'react';

const App = () => {
  const [weather, setWeather] = useState();
  const [weatherHistory, setWeatherHistory] = useState();

  const apiKey = '737d76764aadcf0f2bb5a71eb378395c';
  const cityName = 'Austin';

  
  useEffect(() => {
    const fetchWeather = async () => {
      const [weatherResponse, historyWeatherResponse] = await Promise.all([
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${},${},${}&appid=${}`),
        fetch(`http://localhost:3010/city`)
      ]);
      const weatherCurrentData = await weatherResponse.json();
      const weatherHistoryData = await historyWeatherResponse.json();

      setWeather(weatherCurrentData);
      setWeatherHistory(weatherHistoryData);
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
        <p>{weather}</p>
     </main>

    </div>
  );
}

export default App;
