import "./WeatherCardContainer.scss"
import { WeatherCardDisplay } from "../WeatherCardDisplay/WeatherCardDisplay.jsx"

export const WeatherCardContainer = (props) => {

    const {weatherData} = props;
    const {id, name, main, weather } = weatherData;
    const {description, icon} = weather[0];
    const {temp, feels_like} = main;
    
    console.log("container current",weatherData)
    
    return(
        <section className="card_border">
            <WeatherCardDisplay key={id} name={name} image={icon} description={description} temp={temp} temp_like={feels_like}/>
        </section>
    )
}