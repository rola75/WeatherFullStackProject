import "./NavBar.scss"
import { useState, useEffect, useRef } from "react";

export const NavBar = (props) => {
    const [message, setMessage] = useState("");
    const {setWeather, setWeatherHistory} = props
    const [cityName, setCityName] = useState("");
    const apiKey = process.env.API_KEY || "516ecd691828eb92d3c409a58ec5dcff";
    
    let handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("") 
        console.log("event", e.target.value)
        try {    
            const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`)
            const weatherCurrentData = await weatherResponse.json();
            if (weatherResponse.status === 200) {
                setWeather(weatherCurrentData);
                setMessage("") 
              } else {
                setMessage("Some error occured");
              }
             
           
            console.log("wather response",weatherResponse)
        }
        catch (err) {
        console.log(err)
        };
    }

    console.log(cityName)
    console.log(apiKey)

    return (
        <>
            <nav>
                <label className="nav_label">Search</label>
                <input className="nav_input" type="text" placeholder="ex- Dallas" onChange={(e) => setCityName(e.target.value)}/>
                <button onClick={handleSubmit} type="submit">Submit Request</button>
            </nav>
            <div className="message">{message ? <p>{message}</p> : null}</div>
        </>
    )
}

