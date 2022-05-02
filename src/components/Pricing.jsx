import React from "react";
import styled from "styled-components";
import PriceCards from "./PriceCards";

const Container = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Pricing = () => {
  return (
    <Container>
      <PriceCards price={500} type="Basic" />
      <PriceCards price={1000} type="Advance" />
      <PriceCards price={2000} type="Ultimate" />
    </Container>
  );
};

export default Pricing;
