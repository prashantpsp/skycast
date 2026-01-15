import { useState } from 'react'
import './App.css'
import useWeather from './hooks/useWeather'
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';

function App() {
  const [city, setCity] = useState("Lucknow")
  const {data:weatherInfo, loading} = useWeather(city);
  // console.log(weatherInfo);

  const handleSearch = (cityName) =>{
    cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
    console.log(cityName);
    
    setCity(cityName);
  }
  
  return (
    <div className='flex flex-col justify-center items-center mt-5'>
      {<SearchBar onSearch={handleSearch} loading={loading}/>}
      {weatherInfo && <WeatherCard data={weatherInfo}/>}
      {/* <WeatherCard/> */}
    </div>
  )
}

export default App
