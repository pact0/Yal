import styled from "@emotion/styled/";
import React from "react";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 65%;
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const FluffPage = () => {
  const hidden = useSelector((state) => state.pages[5].show);

  return (
    <React.Fragment>{hidden && <Container>Fluff</Container>}</React.Fragment>
  );
};

export default FluffPage;
