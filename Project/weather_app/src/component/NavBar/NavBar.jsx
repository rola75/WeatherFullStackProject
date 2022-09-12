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

        try {    
            const weatherCurrentResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`)
            const weatherHistoryResponse = await fetch(`http://localhost:3010/city?q=${cityName}`)
            
            const weatherCurrentData = await weatherCurrentResponse.json();
            const weatherHistoryData = await weatherHistoryResponse.json();

            if(weatherCurrentResponse.status === 200) {
                setWeather(weatherCurrentData)
                setMessage("")
            } else {
                setMessage("Err check Input")
            }

            if(weatherHistoryResponse.status === 200) {
                setWeatherHistory(weatherHistoryData)
                setMessage("")
            } else {
                console.log("other err", weatherHistoryData)
            }
            

            console.log("first fetch current response", weatherCurrentResponse)
            console.log("first fetch history response", weatherHistoryResponse)

            console.log("first fetch current data", weatherCurrentData)
            console.log("first fetch histroy data", weatherHistoryData)

            const {id, name, main, weather } = weatherCurrentData;
            const {description, icon} = weather[0];
            const {temp, feels_like} = main;
            const postData = async () =>{
            const requestOption = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: id,
                    name:name,
                    icon: icon,
                    description:description,
                    temp:temp,
                    feels_like:feels_like
                })        
            };
            postData();
            console.log("using post", postData());
            const response = await fetch(`http://localhost:3010/city?q=${cityName}`, requestOption);
            const data = await response.json();
            setWeatherHistory(data);
            console.log("data", data);

        }}
        catch (err) {
        console.log(err)
        };
    }



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

