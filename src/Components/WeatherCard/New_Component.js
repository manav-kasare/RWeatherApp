import React from "react";
import styled from "styled-components";
import Condition from "./Condition";
import Location from "./Location";
import Icon from "./Icon";

function NewComponent({ temp, condition, city, country }) {
  const Card = styled.div`
    margin: 300px auto;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.1);
    width: 200px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 15px;
    color: white;
  `;

  return (
    <Card>
      <Location city={city} country={country} />
      <Icon condition={condition} />
      <Condition temp={temp} condition={condition} />
    </Card>
  );
}

export default NewComponent;
