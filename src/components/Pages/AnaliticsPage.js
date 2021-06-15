import styled from "@emotion/styled/";
import React from "react";
import { CSSTransition } from "react-transition-group";
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

const AnaliticsPage = () => {
  const hidden = useSelector((state) => state.pages[4].show);

  return (
    <CSSTransition in={hidden} timeout={200} classNames="my-node">
      <React.Fragment>
        {hidden && <Container>Analitics</Container>}
      </React.Fragment>
    </CSSTransition>
  );
};

export default AnaliticsPage;
