import React from "react";
import styled from "styled-components";

const Photo = ({ urlToImage }) => {
  const Div = styled.div`
    margin-left: 10px;
    margin-top: 10px;
    min-width: 100px;
    min-height: 100px;
    max-width: 100px;
    max-height: 100px;
    background-color: rgba(255, 255, 255, 0.2);
  `;

  const Image = styled.img`
    width: 100%;
    height: 100%;
  `;
  return (
    <Div>
      <a href={urlToImage}>
        <Image src={urlToImage} />
      </a>
    </Div>
  );
};

export default Photo;
