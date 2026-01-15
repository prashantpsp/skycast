import { useEffect, useState } from "react";

function useWeather(city) {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`)
        .then((geoRes) => geoRes.json())
        .then((geoData) => {
            // setData(geoData.results[0])
            const {name, latitude, longitude} = geoData.results[0];
            fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
            .then((weatherRes) => weatherRes.json())
            .then((weatherData) => {setData({...weatherData, cityName:name}); setLoading(false)})
        })
    },[city])
    return {data, loading};
}

export default useWeather