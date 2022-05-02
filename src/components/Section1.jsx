import React from "react";
import styled from "styled-components";
import Patrick from "../img/patrick.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Left = styled.div`
  width: 50%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 480px) {
    width: 40%;
  }
`;
const Right = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 30px;
  @media only screen and (max-width: 480px) {
    width: 60%;
  }
`;

const Image = styled.img`
  width: 80%;
  height: 100%;

  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 60%;
  }
`;

const Title = styled.p`
  font-size: 50px;

  b {
    color: crimson;
  }

  @media only screen and (max-width: 480px) {
    font-size: 25px;
    font-weight: 900;
  }
`;

const Desc = styled.p`
  font-size: large;
  margin-top: 40px;
  color: gray;
  font-weight: bold;

  @media only screen and (max-width: 480px) {
    font-size: 12px;
    margin-top: 15px;
  }
`;

const Btn = styled.button`
  padding: 20px;
  background: crimson;
  color: white;
  border: none;
  cursor: pointer;
  margin: 10px auto;
  border-radius: 20px;
  font-weight: bold;
  letter-spacing: 2px;

  @media only screen and (max-width: 480px) {
    padding: 10px;
  }
`;

const Section1 = () => {
  return (
    <Container>
      <Left>
        <Image src={Patrick} />
      </Left>
      <Right>
        <Title>
          <b>Amazing</b> is What I Do<br></br>
          <b>Amazing</b> is How I Live
        </Title>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
          fugit eveniet impedit libero fugiat perferendis, odio doloribus
          asperiores laborum sunt eum quidem soluta accusamus. Facere voluptate
          labore ad laboriosam. Eum, maxime similique. Magnam quo tempore sit
          atque provident nostrum nemo rerum fuga repudiandae aliquam totam
          numquam quia iusto sed laboriosam placeat molestiae quam dolorum
          similique exercitationem non, vitae hic iste! Similique autem,
        </Desc>
        <Btn>PICK YOUR STYLE</Btn>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Section1;
