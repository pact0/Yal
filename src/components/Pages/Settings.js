import styled from "@emotion/styled";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { hidePage, showPage } from "../../reducers/pagesReducer";

const Container = styled.div`
  height: 65%;
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const PageWrap = styled.div`
  text-align: center;
`;
const Settings = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <button onClick={() => dispatch(showPage(7))}>Show</button>
      <button onClick={() => dispatch(hidePage(7))}>Hide</button>
    </Container>
  );
};

export default Settings;
