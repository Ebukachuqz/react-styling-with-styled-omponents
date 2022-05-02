import React from "react";
import styled from "styled-components";

const Square = styled.div`
  width: 70px;
  height: 70px;
  position: absolute;
  top: -70px;
  left: -70px;
  opacity: 0.6;
  background-color: blue;
  animation: square 15s linear alternate infinite;
  z-index: -1;

  @keyframes square {
    to {
      transform: translate(100vw, 100vh);
    }
  }
`;

const Rectangle = styled.div`
  width: 60px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: -60px;
  opacity: 0.7;
  background-color: yellow;
  animation: rectangle 18s linear alternate infinite;
  z-index: -1;

  @keyframes rectangle {
    to {
      transform: translate(80vw, -80vh);
    }
  }
`;

const Circle = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  position: absolute;
  top: -110px;
  left: 80%;
  opacity: 0.5;
  background-color: green;
  animation: circle 17s linear alternate infinite;
  z-index: -1;

  @keyframes circle {
    to {
      transform: translate(-100vw, 100vh);
    }
  }
`;

const AnimatedShapes = () => {
  return (
    <>
      <Square />
      <Rectangle />
      <Circle />
    </>
  );
};

export default AnimatedShapes;
