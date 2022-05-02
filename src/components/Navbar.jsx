import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;

const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
`;

const NavBtn = styled.button`
  border: 2px solid black;
  padding: 10px 20px;
  background: crimson;
  color: white;
  border-radius: 10px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  width: 30%;

  h1 {
    font-weight: 900;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

const NavLinkItem = styled.li`
  margin-right: 10px;
  font-size: 20px;
  font-weight: bold;
  color: grey;
`;

const Navbar = () => {
  return (
    <Container>
      <NavHeader>
        <Logo>
          <h1>StyleCOM</h1>
        </Logo>
        <NavLinks>
          <NavLinkItem>Home</NavLinkItem>
          <NavLinkItem>About</NavLinkItem>
          <NavLinkItem>Projects</NavLinkItem>
          <NavLinkItem>Myself</NavLinkItem>
        </NavLinks>
      </NavHeader>
      <NavBtn>Join Us</NavBtn>
    </Container>
  );
};

export default Navbar;
