import React from "react";
import styled from "styled-components";
import "../App.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Home() {
  const Container = styled.div`
    /* background-color: #225854; */
    background-color: white;
    height: 700px;
    /* margin-top: 20px; */
    padding: 20px;
    /* display: flex;
    flex-direction: column; */
    /* align-items: center; */
    /* justify-content: center; */
  `;

  const MyHeading = styled.h1`
    color: gold;

    text-align: center;
  `;
  const Title_1 = styled.p`
    /* background-color: pink; */
    font-weight: 600;
    font-size: xx-large;
    /* color: white; */
    /* padding: 0.5em 0; */
    text-align: center;
  `;

  const Title_2 = styled.p`
    /* background-color: pink; */
    font-size: x-large;
    /* color: white; */
    font-weight: 700;
    text-align: center;
  `;

  const Logo = styled.img`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const TotalUser = styled.div`
    margin-top: 20px;
    width: 100%;
    height: 33px;
    background: rgb(240, 240, 240);
    border-radius: 10px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
  `;
  return (
    <Container fixed>
      <header>
        <div className="logo">
          <img src="img/005.png" alt="logo" width={150} />
        </div>
      </header>
      <div className="HomeFont">
        <MyHeading>Thanks and goodbye, 2022</MyHeading>
        <Title_1>
          소중한 나의 <br />
          2022년을 기록해 보세요!
        </Title_1>
        <Title_2>
          Q&A로 한 눈에 보는 <br />올 한해 최고의 순간
        </Title_2>
        <div className="c1image">
          <img
            className="homeimg"
            alt="people"
            src="img/people.png"
            width={400}
          />
        </div>
        <div className="button" align="center">
          <Stack spacing={-1} width={250}>
            <Button variant="contained">나만의 시상식 만들기</Button> <br />
            <Button variant="contained">공유하기</Button>
          </Stack>

          <TotalUser>누적 사용자</TotalUser>
        </div>
      </div>
    </Container>
  );
}
