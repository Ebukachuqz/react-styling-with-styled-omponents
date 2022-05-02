import React, { useState } from "react";
import styled from "styled-components";
import Squidward from "../img/squid.png";
import AnimatedShapes from "./AnimatedShapes";
import MiniCards from "./MiniCards";
import { BsFillPlayCircleFill } from "react-icons/bs";

const Container = styled.div`
  display: flex;
  height: 100%;
  padding: 20px;
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  @media only screen and (max-width: 480px) {
    width: 60%;
  }
`;

const Right = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 40%;
  }
`;

const Image = styled.img`
  height: 80%;
  display: ${(props) => props.isOpen && "none"};

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Video = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  display: ${(props) => !props.isOpen && "none"};
`;

const Header = styled.h1`
  font-weight: 900;
  color: #f3a20b;
`;

const Text = styled.p`
  color: #11a797;
  font-weight: bold;
  margin-top: 20px;

  @media only screen and (max-width: 480px) {
    margin-top: 10px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;

  @media only screen and (max-width: 480px) {
    margin-top: 20px;
  }
`;

const Btn = styled.button`
  padding: 15px 10px;
  width: 150px;
  color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-weight: bold;
  font-size: large;
  border: 2px solid green;
  border-radius: 20px;
  background: #11a797;
  margin-top: 80px;
  align-self: center;
  cursor: pointer;

  @media only screen and (max-width: 480px) {
    margin-top: 30px;
  }
`;

const Section2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Left>
        <Header>LOVELY SMILE</Header>
        <Text>
          Trust you are doing great? How was your day? Great? Wow!!! Keep that
          energy. Not that Great? That's life. Don't worry, you are getting
          better and better opportunities. Give me a big smile, Will you.
        </Text>
        <CardWrapper>
          <MiniCards />
          <MiniCards />
          <MiniCards />
        </CardWrapper>
        <Btn onClick={() => setIsOpen(!isOpen)}>
          Play Video
          <BsFillPlayCircleFill />
        </Btn>
      </Left>
      <Right>
        <Image isOpen={isOpen} src={Squidward} />
        <Video isOpen={isOpen}>
          <iframe
            width="70%"
            height="315"
            src={isOpen ? "https://www.youtube.com/embed/VKKozyPc-sc" : ""}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <Text>Tap Button again to close video</Text>
        </Video>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Section2;
