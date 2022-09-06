import "./WeatherCardContainer.scss"
import "../WeatherCardDisplay/WeatherCardDisplay.js"
import { WeatherCardDisplay } from "../WeatherCardDisplay/WeatherCardDisplay.js"

export const WeatherCardContainer = (props) => {

    const {weatherData} = props
    console.log(weatherData);
    return(
        <section>
            <WeatherCardDisplay/>
        </section>
    )
}