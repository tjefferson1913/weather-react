import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Miami",
    ftemperature: 85,
    ctemperature: 29,
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 70,
    wind: 10
  };
  return (
    <div className="container">
      <div className="Weather">
        <div className="row">
          <div className="offset-6 col-6">
            <form className="weather-search-form" id="weather-search-form">
              <div className="row">
                <div className="col-7">
                  <input
                    type="search"
                    placeholder="Type in city..."
                    autofocus="on"
                    className="form-control"
                    autocomplete="off"
                  />
                </div>
                <div className="col-5">
                  <input
                    type="submit"
                    value="Search"
                    className="form-control btn btn-primary w-100"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <br />
            <h1>{weatherData.city}</h1>
            <br />
          </div>
        </div>
        <div className="card-group">
          <div className="card">
            <div className="card-body">
              <strong>
                {" "}
                <p className="card-text"></p>{" "}
              </strong>
              <p className="temperature">
                <strong></strong>
                <span className="temperature-units"></span>
                <a href="#" class="active">
                  {weatherData.ctemperature}°C
                </a>
                |<a href="#">{weatherData.ftemperature}°F</a>
              </p>
              <div className="clearfix weather-temperature">
                <img src={weatherData.imgUrl} alt="Sunny" class="float-left" />
                <div className="float-left">
                  <div className="row">
                    <div className="col-sm">
                      <ul>
                        <li></li>
                        <li>
                          <p className="card-text">
                            Wind:<span>{weatherData.wind}</span>&nbsp;km/h
                          </p>
                        </li>
                        <li>
                          <p className="card-text">
                            Humidity:<span>{weatherData.humidity}</span>%
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row weather-forecast"></div>
          </div>
        </div>
        <h6>
          <strong>
            <a href="https://github.com/tjefferson1913/Weather-App2-TJ">
              Link to source code
            </a>
          </strong>
        </h6>
      </div>
    </div>
  );
}
