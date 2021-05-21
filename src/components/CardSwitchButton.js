import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "@emotion/styled";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "@material-ui/core";

const Button = styled.button`
  background: transparent;
  border: none;
  color: var(--accent-color2);
  font-size: 18px;
  padding: 2px;
`;
const CardSwitchButton = ({ value, clickHandler, children }) => {
  return (
    <>
      <IconButton
        size="small"
        color="inherit"
        onClick={() => clickHandler(value)}
      >
        {children}
      </IconButton>
    </>
  );
};

export default CardSwitchButton;
