import React, { FC, Fragment, useState } from "react";
import { SiteType } from "../../common/constants";
import { Problem } from "../../common/class";
import { Button, Container, Image, Row } from "react-bootstrap";

chrome.runtime.sendMessage({
  from: "problemPage",
  subject: "checkProblemList",
});

const selectLogo = (siteType: SiteType) => {
  switch (siteType) {
    case SiteType.BOJ:
      return "/baekjoon_logo.png";
    case SiteType.PROGRAMMERS:
      return "/programmers_logo.png";
  }
};

const RandomSelectTab: FC<{}> = () => {
  const [problem, setProblem] = useState<Problem>({
    siteType: SiteType.DEFAULT,
    number: "",
    title: "",
    url: "",
  });

  const handleClick1 = () => {
    chrome.runtime.sendMessage({ from: "popup", subject: "openProblemTab", url: problem.url });
  };

  const handleClick2 = () => {
    chrome.runtime.sendMessage(
      { from: "problemPage", subject: "selectRandomProblem" },
      (selectedProblem) => {
        setProblem(selectedProblem);
      }
    );
  };

  return (
    <Container className="h-100 d-flex flex-column justify-content-evenly">
      <div style={{ height: "50%" }}>
        {problem.siteType !== SiteType.DEFAULT ? (
          <>
            <div>
              <Row className="justify-content-center">
                <Image style={{ width: "auto", height: 70 }} src={selectLogo(problem.siteType)} />
              </Row>
              <Row>
                <span>
                  {problem.number}. {problem.title}
                </span>
              </Row>
            </div>
            <Row className="mt-4">
              <Button variant="primary" onClick={handleClick1}>
                바로가기
              </Button>
            </Row>
          </>
        ) : (
          <div className="h-100 d-flex flex-column justify-content-center align-items-center">
            <span>문제를 선택해주세요.</span>
          </div>
        )}
      </div>
      <Row>
        <Button variant="secondary" onClick={handleClick2}>
          Select
        </Button>
      </Row>
    </Container>
  );
};

export default RandomSelectTab;