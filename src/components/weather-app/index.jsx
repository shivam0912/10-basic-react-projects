import { useEffect, useState } from "react"

 function WeatherApp() {
    const [weatherData,setWeatherData]=useState(null)
    const [cityName,setCityName] = useState("");

    async function fetchData(city){
        try{
            const response =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`);
            const data = await response.json();

            if(data){
                setWeatherData(data);
            }
        }catch(error){
            console.log(error);
        }
    }

    async function handleSearch(){
        fetchData(cityName);
    }
    useEffect(()=>{

        fetchData(cityName);

    },[])
  return (
    <div>
        
        <input 
            type="text"
            placeholder="Enter City Name"
            value={cityName}
            onChange={(e)=>setCityName(e.target.value)}
            />
        <button onClick={handleSearch}>Search</button>
        <div className="fetched-data">
        <h2>
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </h2>
            <div className="temp">{weatherData?.main?.temp -  273.15 }</div>
            <p className="description">
            {weatherData && weatherData.weather && weatherData.weather[0]
              ? weatherData.weather[0].description
              : ""}
          </p>
          <div className="weather-info">
            <div className="column">
              <div>
                <p className="wind">{weatherData?.wind?.speed}</p>
                <p>Wind Speed</p>
              </div>
            </div>
            <div className="column">
              <div>
                <p className="humidity">{weatherData?.main?.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </div>


    </div>
  )
}

export default WeatherApp