import styled from "@emotion/styled/";
import {
  faCode, // the user circle icon
  faCoffee,
  faComment,
  faEnvelope,
  faGraduationCap,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";

import SearchBar from "../SearchBar";

const Container = styled.div`
  height: 65%;
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
const Row = styled.div`
  width: 100%;
  heigth: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px 0px;
`;

const A = styled.a`
  margin: 0px 16px;
  width: 32px;
  heigth: 32px;
  align-items: center;
  border-radius: 4px;
  color: var(--icon-color);
  > i,
  svg {
    color: var(--icon-color);
  }
  > i,
  svg:hover {
    scale: 1.4;
    color: var(--icon-hover);
    transition: all 0.2s ease-in-out;
  }
`;
const IconStyle = {
  fontSize: 26,
  width: 26,
  color: "inherits",
  heigth: 26,
};

const MainPage = () => {
  const hidden = useSelector((state) => state.pages[0].show);

  return (
    <React.Fragment>
      {hidden && (
        <Container>
          <Row>
            <A href="https://mail.google.com/mail/ca/u/1/#inbox">
              <FontAwesomeIcon icon={faEnvelope} style={IconStyle} />
            </A>
            <A href="https://www.youtube.com/feed/subscriptions">
              <FontAwesomeIcon icon={faPlay} style={IconStyle} />
            </A>
            <A href="https://www.reddit.com/">
              <FontAwesomeIcon icon={faCoffee} style={IconStyle} />
            </A>
          </Row>

          <Row>
            <A href="https://github.com/t3chnoboy/awesome-awesome-awesome">
              <FontAwesomeIcon icon={faGraduationCap} style={IconStyle} />
            </A>
            <A href="https://devdocs.io/">
              <FontAwesomeIcon icon={faCode} style={IconStyle} />
            </A>
            {/*  */}
            <A href="https://www.opensubtitles.org/en">
              <FontAwesomeIcon icon={faComment} style={IconStyle} />
            </A>
          </Row>

          <SearchBar />
        </Container>
      )}
    </React.Fragment>
  );
};

export default MainPage;
