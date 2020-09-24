import React, { useState, useEffect } from "react";

import "./App.css";
import WeatherEngine from "./Components/Engine";

function App() {
  return (
    <div className="App">
      {/* <div className="rightSide">
        <div className="weather">
          <WeatherEngine location="sydney,au" className="weather-card" />
        </div>
      </div>
      <div className="leftSide">
        <div className="news">
          < className="news_component" />
        </div>
      </div> */}
      <WeatherEngine location="sydney,au" className="weather-card" />
    </div>
  );
}

export default App;
