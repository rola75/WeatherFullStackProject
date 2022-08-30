import './App.css';
import { Heading } from './component/Heading/Heading';
import { useEffect, useState } from 'react';

const App = () => {
  const [weather, setWeather] = useState();

  const apiKey = '737d76764aadcf0f2bb5a71eb378395c';
  const cityName = 'Austin';
  const stateName = 'Texas';
  const countryCode = 'US';
  
  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${stateName},${countryCode}&appid=${apiKey}`);
      const data = response.json();
      setWeather(data)
    }
    fetchWeather();
  }, []);




  
  
  
  return (
    <div className="App">
     
     <header className='header'>
        <Heading />
     </header>
     <nav>
      <p>Search Bar goes here</p>
     </nav>
     <main>

     </main>

    </div>
  );
}

export default App;
