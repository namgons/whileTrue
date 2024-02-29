import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Col, Container, Image, ListGroup, Navbar, Row, Tab } from "react-bootstrap";
import "./options.css";

const App: React.FC<{}> = () => {
  const handleDatabase = () => {
    chrome.runtime.sendMessage({ from: "options", subject: "databasePage" });
  };

  const handleExit = () => {
    chrome.runtime.sendMessage({ from: "options", subject: "exit" });
  };

  return (
    <Container className="App">
      <Navbar style={{ height: "7%" }} className="mb-5">
        <Navbar.Brand className="d-flex align-items-center">
          <Image style={{ width: "auto", height: 40 }} src={"/icon.png"} className="me-1" />
          whileTrue 설정
        </Navbar.Brand>
      </Navbar>
      <Container style={{ width: "90%" }}>
        <Tab.Container defaultActiveKey="#link1">
          <Row>
            <Col sm={4}>
              <ListGroup>
                <ListGroup.Item action href="#link1">
                  현재 연결되어 있는 노션 정보
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                  노션 데이터베이스 링크 다시 공유하기
                </ListGroup.Item>
                <ListGroup.Item action href="#link3">
                  탈퇴하기
                </ListGroup.Item>
                <ListGroup.Item action href="#link4">
                  프로젝트 정보
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey="#link1"></Tab.Pane>
                <Tab.Pane eventKey="#link2">
                  <Button onClick={handleDatabase} className="p-3">
                    공유하기
                  </Button>
                </Tab.Pane>
                <Tab.Pane eventKey="#link3">
                  <Button variant="danger" className="p-3" onClick={handleExit}>
                    탈퇴하기
                  </Button>
                </Tab.Pane>
                <Tab.Pane eventKey="#link4"></Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </Container>
  );
};

const container = document.createElement("div");
container.setAttribute("id", "root");
document.body.appendChild(container);
const root = createRoot(container);
root.render(<App />);
