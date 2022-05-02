import React from "react";
import styled from "styled-components";
import { AiTwotoneMail } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
import Background from "../img/background.jpeg";
const Container = styled.div`
  height: 85%;
  background-image: url(${Background});
`;

const Wrapper = styled.div`
  padding: 20px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    padding: 10px;
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  width: 50%;
  margin-left: 60px;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  margin: 20px auto;
  text-align: center;

  @media only screen and (max-width: 480px) {
    font-size: 20px;
    font-weight: 900;
    margin: 10px auto;
  }
`;

const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    height: auto;
    flex-direction: column;
  }
`;

const LeftForm = styled.div`
  height: 100%;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    height: auto;
    margin: auto;
  }
`;

const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    height: auto;
  }
`;

const Input = styled.input`
  width: 200px;
  padding: 20px;

  @media only screen and (max-width: 480px) {
    padding: 10px;
    margin-bottom: 10px;
  }
`;

const Message = styled.textarea`
  width: 250px;
  height: 55%;
  padding: 20px;

  @media only screen and (max-width: 480px) {
    padding: 10px;
    height: 40px;
    margin-bottom: 10px;
  }
`;

const Btn = styled.button`
  padding: 20px;
  background: blue;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 20px;
  font-weight: bold;
  font-size: larger;
  letter-spacing: 2px;

  @media only screen and (max-width: 480px) {
    padding: 10px;
  }
`;

const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 480px) {
    width: 100%;
    margin: 20px auto;
  }
`;

const Info = styled.div`
  display: flex;
  margin-bottom: 50px;
  align-items: center;
  font-size: 20px;

  @media only screen and (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

const InfoText = styled.p`
  margin-left: 5px;
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            Questions? <br></br> Send Me A Mail.
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" type={"email"} />
              <Input placeholder="Subject" />
            </LeftForm>
            <RightForm>
              <Message placeholder="Your Message" />
              <Btn>Send</Btn>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <Info>
            <AiTwotoneMail color="green" />
            <InfoText>ebukachuqz@gmail.com</InfoText>
          </Info>

          <Info>
            <BsTwitter color="blue" />
            <InfoText>@ebukachuqz</InfoText>
          </Info>

          <Info>
            <IoHome color="crimson" />
            <InfoText>123 Silicon Valley HQ</InfoText>
          </Info>
        </AddressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
