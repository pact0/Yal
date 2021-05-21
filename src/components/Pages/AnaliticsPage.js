import styled from "@emotion/styled/";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Container = styled.div`
  height: 65%;
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const AnaliticsPage = () => {
  const hidden = useSelector((state) => state.pages[4].show);

  return (
    <CSSTransition in={hidden} timeout={200} classNames="my-node">
      <>{hidden && <Container>Analitics</Container>}</>
    </CSSTransition>
  );
};

export default AnaliticsPage;
