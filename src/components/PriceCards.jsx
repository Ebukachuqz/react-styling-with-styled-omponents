import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  margin-right: 50px;
  box-shadow: -2px 1px 12px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -2px 1px 12px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -2px 1px 12px 0px rgba(0, 0, 0, 0.75);
  background-color: white;

  @media only screen and (max-width: 480px) {
    padding: 10px;
    margin: auto 10px;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  @media only screen and (max-width: 480px) {
    font-size: 10px;
  }
`;

const Price = styled.span`
  font-size: 50px;
  font-weight: bold;

  @media only screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

const Type = styled.button`
  padding: 10px;
  margin: 10px 0;
  border: 1.5px solid crimson;
  border-radius: 20px;
  color: crimson;
  background-color: white;
  @media only screen and (max-width: 480px) {
    margin: 5px 0;
    padding: 5px;
  }
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  margin: 30px 0;
  @media only screen and (max-width: 480px) {
    margin: 15px 0;
  }
`;

const Btn = styled.button`
  border: none;
  font-size: 16px;
  padding: 15px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  color: white;
  background-color: darkblue;

  @media only screen and (max-width: 480px) {
    padding: 8px;
    font-size: 12px;
  }
`;

const PriceCards = ({ price, type }) => {
  return (
    <Container>
      <PriceContainer>
        £<Price>{price}</Price>/month
      </PriceContainer>
      <Type>{type}</Type>
      <List>
        <ListItem>Great Influence and Determined</ListItem>
        <ListItem>Accuracy and Efficiency</ListItem>
        <ListItem>HArdworking 24/7</ListItem>
        <ListItem>Intelligent and Oustanding</ListItem>
        <ListItem>Generous and friendly</ListItem>
      </List>
      <Btn>Hire Me Now</Btn>
    </Container>
  );
};

export default PriceCards;
