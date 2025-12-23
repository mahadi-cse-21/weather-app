import React, { useState } from "react";
import WeatherStatus from "./WeatherStatus";

function WeatherApp() {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleWeather = () => {
        if (!city.trim()) {
            setError("Please enter a city name");
            return;
        }

        setLoading(true);
        setError("");
        setWeatherData(null);

        fetch(
           

            `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${city}&aqi=no`
        )
            .then((res) => {
                if (!res.ok) throw new Error("City not found");
                return res.json();
            })
            .then((data) => {
                setWeatherData(data);
                
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div id="search-div">
            <h1>Weather App</h1>

            <input
                type="search"
                placeholder="Enter city name"
                value={city}
                id="search-input"
                onChange={(e) => setCity(e.target.value)}
            />

            <button onClick={handleWeather} id="search-button">
                Search
            </button>

            {/* Loading state */}
            {loading && <p>Loading weather data...</p>}

            {/* Error state */}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {/* Success state */}
            <WeatherStatus weatherData={weatherData} />
        </div>
    );
}

export default WeatherApp;
