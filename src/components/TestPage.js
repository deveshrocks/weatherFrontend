import React, { useState, useEffect } from 'react';

const TestPage = () => {
    const [weatherData, setWeatherData] = useState([]);
  
    useEffect(() => {
      // Fetch weather data from the API
      fetch('https://localhost:8080/weather')
        .then(response => response.json())
        .then(data => setWeatherData(data))
        .catch(error => console.error('Error:', error));
    }, []);
  
    return (
      <div>
        <h1>Weather Forecast</h1>
        <ul>
          {weatherData.map((data, index) => (
            <li key={index}>
              <p>Date: {data.date}</p>
              <p>Temperature Min: {data.temp_min}</p>
              <p>Temperature Max: {data.temp_max}</p>
              <p>Message: {data.message}</p>
              <p>Additional Message: {data.additional_message}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  export default TestPage;