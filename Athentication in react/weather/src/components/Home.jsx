import React, { useState } from "react";
import "../App.css";

function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_KEY = "5c51e271387151cd087dc3e003f609d"; // Replace with your actual API key

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const getData = async () => {
    if (city.trim() === "") {
      alert("Please enter a city name.");
      return;
    }
    setLoading(true);
    setError(null); // Reset error state before fetching
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      console.log("Response Status:", response.status); // Log response status
      console.log("Response Headers:", response.headers); // Log response headers

      if (response.ok) {
        const data = await response.json();
        console.log("API Data:", data); // Log data for debugging

        if (data && data.main) { // Check if data.main exists
          setWeather(data);
        } else {
          setWeather(null);
        }
      } else {
        const errorData = await response.json(); // Try to get error details
        console.log("Error Data:", errorData);
        setWeather(null);
        setError(errorData.message || "City not found");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setLoading(false);
      setWeather(null);
      setError("Failed to fetch weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <div className="container">
        <div className="searchbox">
          <input
            type="search"
            placeholder="Enter City Name..."
            value={city}
            onChange={handleCityChange}
          />
          <button onClick={getData}>Search</button>
        </div>
        <div className="results">
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>
              <h1>{error}</h1>
            </div>
          ) : weather ? (
            <div>
              <h1>{weather.data.name}</h1>
              <h1>{weather.data.name}°C</h1>
            </div>
          ) : (
            <div>
              <h1>No data available</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
