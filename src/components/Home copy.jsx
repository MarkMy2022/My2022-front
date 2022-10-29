import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import Container from "@mui/material/Container";

export default function Home() {
  const Container = styled.div`
    background-color: #ffffff;
  `;

  const MyHeading = styled.h1`
    color: gold;
    text-align: center;
  `;
  const Title_1 = styled.h2`
    background-color: pink;
    font-weight: 700;
    padding: 1em 0;
    text-align: center;
  `;

  const Title_2 = styled.h4`
    background-color: pink;
    font-weight: 700;
    text-align: center;
  `;

  const Logo = styled.img`
    text-align: center;
  `;

  return (
    <Container fixed>
      <img className="logo" alt="logo" src="img/logo.png" width={100} />
      <MyHeading>Thanks and goodbye, 2022</MyHeading>
      <Title_1>
        소중한 나의 <br />
        2022년을 기록해 보세요!
      </Title_1>
      <Title_2>
        Q&A로 한 눈에 보는 <br />올 한해 최고의 순간
      </Title_2>
      <div className="c1image">
        <img className="homeimg" alt="people" src="img/home_people.png" />
      </div>
      <Button variant="contained">나만의 시상식 만들기</Button> <br />
      <Button variant="contained">공유하기</Button>
    </Container>
  );
}
