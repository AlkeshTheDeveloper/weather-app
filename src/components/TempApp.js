import React from "react";
import "./css/style.css";
import { useState, useEffect } from "react";
function TempApp() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("New delhi");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9458921954b7a737010c0469d34a281f
`;
      const response = await fetch(url);
      const resJson = await response.json();

      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            placeholder="Enter cityname"
          />
        </div>

        {!city ? (
          <p className="errorMsg">No data found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp} &#176;C</h1>
              <h3 className="tempmin_max">
                Min {city.temp_min} &#176;C | Max: {city.temp_max} &#176; C
              </h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
        )}
      </div>
    </>
  );
}

export default TempApp;
