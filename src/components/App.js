import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import SearchWeather from "./SearchWeather";
import WeatherDetails from "./WeatherDetails";
import api from "../api/weather";
import TestPage from "./TestPage";

function App() {
  // const weather_data_api =  () => {
  //   const response = api.get();
  //   return response;
  // }
  // console.log("hello" +  weather_data_api());
  // console.log("hello1" + weather_data_api());
  // const weather_data = [
  //   {
  //     "date" : "2023-12-09 09:00:00",
  //     "temp_min" :  282.0,
  //     "temp_max" : 282.92,
  //     "message" : "Carry Umbrella",
  //     "additional_message" : "Its too windy"
  //   },
  //   {
  //     "date" : "2023-12-09 09:00:00",
  //     "temp_min" :  282.0,
  //     "temp_max" : 282.92,
  //     "message" : "Use Sun Screen Lotion",
  //     "additional_message" : "Its too windy"
  //   },
  //   {
  //     "date" : "2023-12-09 09:00:00",
  //     "temp_min" :  282.0,
  //     "temp_max" : 282.92,
  //     "message" : "Carry Umbrella",
  //     "additional_message" : "Its too windy"
  //   }
  // ]

  const [weather_data, setWeather_data] = useState([]);
  const [error, setError] = useState("");

  const addSearchHandler = async (query) => {
    // Fetch weather data from the API
    try {
      const res = await fetch(`http://localhost:8080/getWeather?city=${query}`);
      const data = await res.json();
      setError("");
      setWeather_data(data);
    } catch (error) {
      setError(`No Details For ${query}`);
    }
  };

  return (
    <div className="ui container">
      <Header />
      <SearchWeather addSearchHandler={addSearchHandler} />
      <WeatherDetails weather_data={weather_data} error={error} />
      {/* <TestPage /> */}
    </div>
  );
}

export default App;
