import React, { useState } from 'react';
import useWeather from '../hooks/useWeather';

const WeatherCard = ({data}) => {
    console.log(data);
//   const data = useWeather("Lucknow");
    
  const getWeatherDetails = (code, isDay) => {
    const mapping = {
      0: { label: "Clear Sky", icon: isDay? "☀️": "🌙", bg: isDay ? "from-orange-400 to-yellow-500" : "from-gray-800 to-slate-950" },
      1: { label: "Mainly Clear", icon: isDay? "🌤️": "☁️", bg: isDay ? "from-blue-400 to-yellow-200" : "from-slate-800 to-indigo-950" },
      2: { label: "Partly Cloudy", icon: "⛅", bg: "from-blue-300 to-gray-300" },
      3: { label: "Overcast", icon: "☁️", bg: "from-gray-400 to-gray-600" },
      61: { label: "Rainy", icon: "🌧️", bg: "from-blue-700 to-indigo-900" },
    };
    return mapping[code] || { label: "Cloudy", icon: "☁️", bg: "from-blue-400 to-blue-600" };
  };

  const weather = getWeatherDetails(data?.current_weather?.weathercode, data?.current_weather?.is_day);

  return (
    <div className={`relative w-full max-w-sm mx-auto overflow-hidden rounded-3xl bg-linear-to-br ${weather.bg} p-1 shadow-2xl transition-all duration-500`}>
      
      <div className="bg-white/10 backdrop-blur-xl rounded-[calc(1.5rem-1px)] p-8 text-white">
        {/* city name */}
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold tracking-tight drop-shadow-md">
            {data.cityName}
          </h2>
          <p className="text-xs font-light opacity-80 uppercase tracking-[0.2em] mt-1">
            Current Weather
          </p>
        </div>

        <div className="flex justify-between items-center p-4 rounded-2xl shadow-2xl">
           <div className="flex flex-col">
              <h1 className="text-7xl font-black tracking-tighter relative">
                {Math.round(data?.current_weather?.temperature)}
                <span className="text-2xl absolute top-2 -right-7 font-light">{data.current_weather_units?.temperature}</span>
              </h1>
              <p className="text-lg font-medium opacity-90">{weather.label}</p>
           </div>
           <span className="text-6xl filter drop-shadow-lg">{weather.icon}</span>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/20">
          <div className="flex flex-col items-center p-3 bg-white/10 rounded-2xl">
            <span className="text-[10px] uppercase opacity-60 mb-1 font-bold">Wind Speed</span>
            <span className="text-lg font-semibold">{data?.current_weather?.windspeed} <small className="text-xs">{data?.current_weather_units?.windspeed}</small></span>
          </div>
          <div className="flex flex-col items-center p-3 bg-white/10 rounded-2xl">
            <span className="text-[10px] uppercase opacity-60 mb-1 font-bold">Date</span>
            <span className="text-lg font-semibold">{data?.current_weather?.time.split('T')[0]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard