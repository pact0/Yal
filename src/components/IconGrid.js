import React from "react";
import { IconButton } from "@material-ui/core";
import styled from "@emotion/styled";

const A = styled.a`
  color: "blue";
  margin: 0px 10px;
  width: 64px;
  heigth: 64px;
  object-fit: contain;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const IconGrid = ({ children }) => {
  return (
    <A href="https://chakra-ui.com/docs/data-display/divider">
      <IconButton size="small" color="inherit">
        {children}
      </IconButton>
    </A>
  );
};

export default IconGrid;
