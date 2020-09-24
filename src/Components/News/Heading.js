import React from "react";
import styled from "styled-components";

const Heading = (props) => {
  const News_heading = styled.h1`
    padding: 10px 10px;
    color: white;
    font-family: "Fira Sans", sans-serif;
    font-size: 2rem;
    font-weight: 900;
  `;
  return <News_heading>News</News_heading>;
};

export default Heading;
