import styled from "@emotion/styled";
import { IconButton } from "@material-ui/core";
import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 5px 0px;
  justify-content: space-between;
`;

const TextNotDone = styled.div`
  overflow-y: scroll;
  scrollbar-width: none;
  width: 70%;
  color: var(--text);
  text-align: center;
`;
const TextDone = styled.div`
  overflow-y: scroll;
  scrollbar-width: none;
  width: 70%;
  text-align: center;
  color: var(--text-done);
  text-decoration: line-through;
`;
const ToDoLi = ({ item, deleteNote, toggleDone }) => {
  return (
    <Wrapper>
      <IconButton size="small" onClick={() => toggleDone(item.id)}>
        <CheckIcon style={{ fontSize: 15, color: "var(--accent)" }} />
      </IconButton>
      {item.done ? (
        <TextDone>{item.content}</TextDone>
      ) : (
        <TextNotDone>{item.content}</TextNotDone>
      )}
      <IconButton size="small" onClick={() => deleteNote(item.id)}>
        <CloseIcon style={{ fontSize: 15, color: "var(--accent)" }} />
      </IconButton>
    </Wrapper>
  );
};

export default ToDoLi;
