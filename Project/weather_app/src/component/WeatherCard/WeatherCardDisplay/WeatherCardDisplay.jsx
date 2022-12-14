import './WeatherCardDisplay.scss';

export const WeatherCardDisplay = (props) => {
    const {name, image, description, temp, temp_like} = props;
    
    return(
        <div className='card'>
            <header>
                <h1>{name}</h1>
            </header>
            <section>
                <img 
                src={`https://openweathermap.org/img/wn/${image}@2x.png`} 
                alt="weather icon" />
                <p>{description}</p>
            </section>
            <section>
                <p>Temp {temp} F</p>
                <p>Feels Like {temp_like} F</p>
            </section>
        </div>
    )
}