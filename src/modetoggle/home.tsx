import React from "react";
import styled from "styled-components";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import { Route, Router } from "react-router-dom";
import Coins from "../routes/Coins";

const Home = () => {
  return (
    <>
      <Wrapper>
        Home
      </Wrapper>
    </>
  );
};

const Wrapper = styled.button`
  background: ${({ theme }) => theme.mode.mainBackground};
  border: 1px solid ${({ theme }) => theme.mode.border};
  box-shadow: 0 1px 3px ${({ theme }) => theme.mode.divider};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: fixed;
  z-index: 1;
  width: 4rem;
  height: 2rem;
  top: 3rem;
  left: 26rem;
  font-size: 14px;
  justify-content: center;
  color: ${({ theme }) => theme.mode.Description};
`;

export default Home;