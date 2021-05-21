import SearchBar from "../SearchBar";
import IconGrid from "../IconGrid";
import styled from "@emotion/styled/";
import MailIcon from "@material-ui/icons/Mail";
import YouTubeIcon from "@material-ui/icons/YouTube";
import GitHubIcon from "@material-ui/icons/GitHub";
import BackupIcon from "@material-ui/icons/Backup";
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
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const MainPage = () => {
  const hidden = useSelector((state) => state.pages[0].show);

  const fontSize = 50;
  const color = "var(--accent-color)";
  return (
    <CSSTransition in={hidden} timeout={200} classNames="my-node">
      <>
        {hidden && (
          <Container>
            <Row>
              <IconGrid>
                <MailIcon style={{ color: color, fontSize: fontSize }} />
              </IconGrid>
              <IconGrid>
                <YouTubeIcon
                  style={{ color: color, fontSize: fontSize + 10 }}
                />
              </IconGrid>
              <IconGrid>
                <GitHubIcon style={{ color: color, fontSize: fontSize - 8 }} />
              </IconGrid>
              <IconGrid>
                <BackupIcon style={{ color: color, fontSize: fontSize + 5 }} />
              </IconGrid>
            </Row>

            <Row>
              <IconGrid>
                <MailIcon style={{ color: color, fontSize: fontSize }} />
              </IconGrid>
              <IconGrid>
                <MailIcon style={{ color: color, fontSize: fontSize }} />
              </IconGrid>
              <IconGrid>
                <MailIcon style={{ color: color, fontSize: fontSize }} />
              </IconGrid>
              <IconGrid>
                <MailIcon style={{ color: color, fontSize: fontSize }} />
              </IconGrid>
            </Row>

            <SearchBar />
          </Container>
        )}
      </>
    </CSSTransition>
  );
};

export default MainPage;
