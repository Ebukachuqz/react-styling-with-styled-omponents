import React from "react";
import styled from "styled-components";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

const Container = styled.div`
  height: 15%;
  background: darkblue;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-evenly;
  align-items: center;
  @media only screen and (max-width: 480px) {
    padding: 10px;
  }
`;

const List = styled.ul`
  margin: 0;
  list-style: None;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 30%;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    font-size: 12px;
    font-weight: bold;
  }
`;

const IconsList = styled.ul`
  margin: 0;
  list-style: None;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 30px;
  width: 40%;

  @media only screen and (max-width: 480px) {
    font-size: 20px;
  }
`;
const ListItem = styled.li`
  margin-right: 20px;
  list-style: None;
`;

const MediaList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;

  @media only screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

const Copyright = styled.span`
  font-size: 15px;
  color: white;
  width: 30%;
  letter-spacing: 2px;
  @media only screen and (max-width: 480px) {
    font-size: 10px;
  }
`;
const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem>Hire</ListItem>
          <ListItem>Collaborate</ListItem>
          <ListItem>Sponsor</ListItem>
          <ListItem>Employ</ListItem>
        </List>

        <MediaList>
          <h4>Follow Me On</h4>
          <IconsList>
            <ListItem>
              <AiFillGithub />
            </ListItem>
            <ListItem>
              <AiFillLinkedin />
            </ListItem>
            <ListItem>
              <BsTwitter />
            </ListItem>
          </IconsList>
        </MediaList>

        <Copyright>Designed & Styled By Ebuka Chuqz ©</Copyright>
      </Wrapper>
    </Container>
  );
};

export default Footer;
