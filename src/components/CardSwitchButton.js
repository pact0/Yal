import React from "react";
import styled from "@emotion/styled";

const Button = styled.button`
  width: 32px;
  height: 32px;
  margin: 5px 0px;
  background: transparent;
  border: none;
  color: var(--accent-color2);
  font-size: 20px;
  padding: 2px;
  border-radius: 15px;
  :hover {
    color: var(--accent-color);
    scale: 1.4;
  }
  transition: all 0.1s ease-in-out;
`;
const CardSwitchButton = ({ value, clickHandler, children }) => {
  return (
    <>
      <Button onClick={() => clickHandler(value)}>{children}</Button>
    </>
  );
};

export default CardSwitchButton;
