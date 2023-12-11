import React from "react";

const WeatherDetails = (props) => {
  console.log(props);

  const renderList = props.weather_data.map((weather_data) => {
    return (
      <tr className="">
        <td className="">
          <h5 className="ui left aligned header">{weather_data.date}</h5>
        </td>
        <td className="single line">{weather_data.minTemp}</td>
        <td className="single line">{weather_data.maxTemp}</td>
        <td className="left aligned">{weather_data.instruction}</td>
      </tr>
    );
  });

  return (
    <table className="ui celled padded table">
      <thead className="">
        <tr className="">
          <th className="single line">Day</th>
          <th className="">Min Temp (°C)</th>
          <th className="">Max Temp (°C)</th>
          <th className="">Message <i aria-hidden="true" className="envelope icon"></i></th>
        </tr>
      </thead>
      <tbody className="">
        {props.error ? <div>{props.error}</div> : renderList}
      </tbody>
    </table>
  );
};

export default WeatherDetails;
