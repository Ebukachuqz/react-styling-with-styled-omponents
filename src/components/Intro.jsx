import React from "react";
import styled from "styled-components";
import SpongeBob from "../img/spongebob.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 5px;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Right = styled.div`
  width: 40%;

  @media only screen and (max-width: 480px) {
    margin: auto;
  }
`;

const Title = styled.h1`
  font-weight: 900;
  width: 60%;

  @media only screen and (max-width: 480px) {
    font-size: 20px;
    width: 70%;
  }
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;

  @media only screen and (max-width: 480px) {
    font-size: 12px;
    font-weight: 700;
    width: 70%;
  }
`;

const SubTextArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  margin-top: 40px;

  @media only screen and (max-width: 480px) {
    margin-top: 5px;
    width: 70%;
    flex-direction: column;
  }
`;

const SubtextBtn = styled.button`
  border: none;
  padding: 20px 10px;
  letter-spacing: 3px;
  border-radius: 10px;
  font-weight: bold;
  background: crimson;
  color: white;
  cursor: pointer;

  @media only screen and (max-width: 480px) {
    padding: 10px;
    letter-spacing: 2px;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    margin-top: 10px;
  }
`;

const PhoneNumber = styled.p`
  font-weight: bold;
  font-size: 20px;
  color: pink;

  @media only screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

const Details = styled.p`
  font-size: 20px;
  color: grey;
  @media only screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

const Image = styled.img`
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Styling is not just an art, Its a SKILL</Title>
        <Desc>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus,
          voluptates id. Omnis exercitationem corporis odit et soluta
          accusantium reiciendis obcaecati nisi quam, pariatur, natus possimus.
          Officiis nesciunt vero, consequuntur animi non aut fugiat eos dolores
          similique provident aspernatur culpa id.
        </Desc>
        <SubTextArea>
          <SubtextBtn>START SYLING</SubtextBtn>
          <ContactDetails>
            <PhoneNumber>Call +9999 875-552-8</PhoneNumber>
            <Details>Give us a call today</Details>
          </ContactDetails>
        </SubTextArea>
      </Left>
      <Right>
        <Image src={SpongeBob} />
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Intro;
