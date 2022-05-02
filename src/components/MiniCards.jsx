import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 150px;
  background: #11a797;
  color: white;
  margin-left: 10px;
  border-radius: 20px;
  box-shadow: -3px 1px 10px 1px rgba(17, 167, 151, 0.75);
  -webkit-box-shadow: -3px 1px 10px 1px rgba(17, 167, 151, 0.75);
  -moz-box-shadow: -3px 1px 10px 1px rgba(17, 167, 151, 0.75);

  @media only screen and (max-width: 480px) {
    padding: 5px;
  }
`;

const Header = styled.h2`
  font-weight: 900;

  @media only screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
const Text = styled.p`
  text-align: center;
  font-weight: bold;

  @media only screen and (max-width: 480px) {
    font-weight: bold;
    font-size: 12px;
  }
`;

const MiniCards = () => {
  return (
    <Container>
      <Header>HEY</Header>
      <Text>
        You are getting better and better opportunities. Give me a big smile,
        Will you.
      </Text>
    </Container>
  );
};

export default MiniCards;
