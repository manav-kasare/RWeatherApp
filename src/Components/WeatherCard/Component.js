import React from "react";
import styled from "styled-components";
import Location from "./Location.js";
import Icon from "./Icon.js";
import Condition from "./Condition.js";

const WeatherCard = ({ temp, condition, city, country }) => {
  let highColor = 0;
  let lowColor = 0;
  let bg = null;

  if (temp > 12) {
    // hot weather
    let highColor = (1 - (temp - 12) / 28) * 255;
    let lowColor = highColor - 150;
    bg = `linear-gradient(
      to bottom,
      rgb(255, ${highColor}, 0),
      rgb(255, ${lowColor}, 0)
        )`;
  } else if (temp <= 12) {
    // cold weather
    let highColor = (1 - (temp + 20) / 32) * 255;
    let lowColor = highColor - 150;
    bg = `linear-gradient(
      to bottom,
      rgb(0, ${highColor}, 255),
      rgb(0, ${lowColor}, 255)
        )`;
  }

  const Card = styled.div`
    margin: 0 auto;
    align-items: center;
    background: ${bg};
    width: 200px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 15px;
  `;
  return (
    <Card>
      <Location city={city} country={country} />
      <Icon condition={condition} />
      <Condition temp={temp} condition={condition} />
    </Card>
  );
};
export default WeatherCard;
