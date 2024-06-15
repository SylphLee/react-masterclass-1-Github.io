import React from "react";
import styled from "styled-components";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import NightsStayIcon from "@material-ui/icons/NightsStay";

interface IToggle {
  thememode: string;
  toggleTheme: () => void;
}

interface IWrapper {
  thememode: string;
}

const Toggle = ({ thememode, toggleTheme }: IToggle) => {
  return (
    <>
      <Wrapper onClick={toggleTheme} thememode={thememode}>
      <WbSunnyIcon />
      <NightsStayIcon />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.button<IWrapper>`
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
  right: 26rem;
  svg {
    color: ${({ theme }) => theme.mode.themeIcon};
    &:first-child {
      transform: ${({ thememode }) => (thememode === "light" ? "translateY(0)" : "translateY(2rem)")};
      transition: background 0.25s ease 2s;
    }
    &:nth-child(2) {
      transform: ${({ thememode }) => (thememode === "dark" ? "translateY(0)" : "translateY(-2rem)")};
      transition: background 0.25s ease 2s;
    }
  }
`;

export default Toggle;