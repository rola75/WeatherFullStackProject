import "./WeatherHistoryContainer.scss"
import { WeatherHistoryDisplay } from "../WeatherHistoryDisplay/WeatherHistoryDisplay.jsx"


export const WeatherHistoryContainer = (props) => {

    const { weatherDataHistroy } = props;
    console.log("container history",weatherDataHistroy)
    const {id, name, icon, description, temp, feels_like} = weatherDataHistroy[0]
 
    return(
        <section className="history_card_border">
            <WeatherHistoryDisplay key={id} name={name} image={icon} description={description} temp={temp} temp_like={feels_like}/>
        </section>
    )
}