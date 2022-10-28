import { Container } from '@mui/material';
import { height } from '@mui/system';
import React from 'react';
import styled from 'styled-components';

// 첨부 이미지 규격 정해서 width 100
// 텍스트가 스케치북 벗어나지 않도록
// 자동으로 스케치북 늘어날 수 있도록
// 날짜, 데이터 값 받아오기

export default function Diarymode() {
  const DiaryImg = styled.div`
    width: 90%;
    height: auto;

    border: #d1c396 5px solid;
    background-color: #fff4d0;
    padding-top: 5%;
    padding-bottom: 5%;
    margin: auto;
    margin-top: 1rem;
  `;

  const DiaryText = styled.div`
    border: 3px solid #323232;
    border-radius: 20px;
    font-size: 1.5rem;
    line-height: 1.5rem;
    background-color: #ffffff;
    width: 90%;
    /* height: 70%; */
    margin: auto;
    padding: 2rem 0;
    word-break: keep-all;
    font-family: 'ACCchildrensky';
  `;

  return (
    <>
      <DiaryImg>
        <DiaryText>
          <div style={{ fontSize: '1.5rem', fontFamily: 'ACCchildrensky' }}>
            (ㅇㅇ)이의 일기 <br />
            2022년 ㅇㅇ월 ㅇㅇ일 ㅇㅇ요일
          </div>
          <div
            className="container"
            style={{
              objectFit: 'cover',
              // border: "solid red",
              width: '60%',
              // height: "60%",
              paddingBottom: '60%',
              backgroundImage: "url('img/test.jpg')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              alignItems: 'center',
              margin: 'auto',
              marginBottom: '1rem',
              marginTop: '1rem',
            }}
          >
            {/* <img
              src="img/test2.jpg"
              alt="diaryimg"
              width={"100%"}
              height={"50%"}
              Background-size="cover"
            /> */}
          </div>
          올해가 끈나간다. 말도 안댄다. <br />
          (6도전) 했고 (7성취) 해냇다! 나는 너무 머싯다. <br /> (5콘텐츠) 왕
          추천한다 (4음식) 맛도 조터라. <br /> (3소비) 잘 샀다. (2장소) 간 것또
          기억 난다. 내가 제일 사랑하는 사라믄 (1사람)이엇따.
          <br /> 아! 이 사진은 내가 젤로 좋아하는 거다. <br />
          (8감정) 2022년 이엇다.
          <br /> 올해 일기 끗.
        </DiaryText>
      </DiaryImg>

      {/* <div style={{ width: "500px", height: "800px" }}>
        <DiaryImg>sss</DiaryImg>
      </div> */}
      {/* <div
        className="wrap"
        style={{ position: "relative", backgroundImage: "img/001.png" }}
      >
        <img src="img/001.png" alt="logo" width={"100%"} position="absolute" />
        <p style={{ position: "absolute" }}>
          ㅇㅇ이의 일기
          <br />
          고마웠고 잘가라 2022! <br />
          그런데.. <br />나 올해 뭐했지🙄 ⁉
        </p>
      </div> */}
    </>
  );
}
