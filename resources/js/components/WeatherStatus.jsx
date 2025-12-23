import React from "react";

function WeatherStatus({ weatherData }) {
    if (!weatherData) {
        return null; // nothing to show yet
    }

    // WeatherAPI doesn't use 'cod' for errors, you can check for error object
    if (weatherData.error) {
        return <p style={{ color: "red" }}>City not found ❌</p>;
    }

    // Destructure WeatherAPI response
    const { location, current } = weatherData;

    return (
        <div
            style={{
                marginTop: "20px",
                padding: "20px",
                border: "1px solid gray",
                borderRadius: "10px",
            }}
        >
            <h2>Weather in {location.name}, {location.country}</h2>
            
            <p>Temperature: {current.temp_c}°C</p>
            <p>Feels like: {current.feelslike_c}°C</p>
            <p>Weather: {current.condition.text}</p>
            <img 
                src={`https:${current.condition.icon}`} 
                alt={current.condition.text} 
                style={{ width: "50px", height: "50px" }}
            />
            <p>Humidity: {current.humidity}%</p>
            <p>Wind speed: {current.wind_kph} km/h ({current.wind_mph} mph)</p>
            <p>Last updated: {current.last_updated}</p>
        </div>
    );
}

export default WeatherStatus;
