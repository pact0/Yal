import styled from "@emotion/styled/";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import List from "@material-ui/core/List";
import { ToDo } from "../../settings/updateSettings";
import ToDoLi from "../ToDoLi";

const Container = styled.div`
  height: 55%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
const Input = styled.input`
  color: var(--text);
  width: 80%;
  font-size: 12px;
  background: transparent;
  border: none;
  text-align: center;
  caret-color: var(--text);
  :focus {
    animation: text-flicker 4s ease-out 0s infinite normal;
    animation: box-flicker 4s ease-out 0s infinite normal;
    outline: none;
  }
`;
const Con = styled.div`
  width: 85%;
  height: 90%;
`;

const ToDoPage = () => {
  const [toDo, setToDo] = useState(ToDo.getAll());
  const hidden = useSelector((state) => state.pages[2].show);

  const [value, setValue] = useState("");
  const [placeholder, setPlaceholder] = useState("it is what it is...");

  const handleAnswerChange = (event) => {
    if (event.key === "Enter") {
      if (value === "") {
        setPlaceholder("Type something here please");
      } else {
        const note = { content: value, done: false };
        ToDo.add(note);
        setToDo(ToDo.getAll());
        setValue("");
      }
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
    setPlaceholder("it is what it is...");
    if (event.keydown === 13 && value !== "") {
      setValue("");
    }
  };

  const toggleDone = (id) => {
    ToDo.toggleDone(id);
    setToDo(ToDo.getAll());
  };
  const deleteNote = (id) => {
    ToDo.delete(id);
    setToDo(ToDo.getAll());
  };
  useEffect(() => {}, [toDo]);
  return (
    <CSSTransition in={hidden} timeout={200} classNames="my-node">
      <React.Fragment>
        {hidden && (
          <React.Fragment>
            <Container>
              <Input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                onKeyPress={handleAnswerChange}
              />
              <Con>
                <List
                  style={{
                    maxHeight: "100%",
                    overflow: "auto",
                    scrollbarWidth: "none",
                  }}
                >
                  {toDo &&
                    toDo.map((x) => {
                      return (
                        <ToDoLi
                          item={x}
                          key={x.id}
                          toggleDone={toggleDone}
                          deleteNote={deleteNote}
                        />
                      );
                    })}
                </List>
              </Con>
            </Container>
          </React.Fragment>
        )}
      </React.Fragment>
    </CSSTransition>
  );
};

export default ToDoPage;
