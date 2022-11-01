import React from 'react';
import styled from 'styled-components';

function Logo() {
  return (
    <div>
      <img src="img/logo.png" alt="logo" width={150} />
    </div>
  );
}

export default function ModeLight() {
  const TextBox = styled.div`
    border-radius: 2px;
    font-size: 1rem;
    /* background-color: #ffffff; */
    background-image: url('img/modeLight.png');
    background-size: cover;
    /* background-size: contain; */
    background-repeat: no-repeat;
    width: 90%;
    /* height: 1000px; */
    text-align: center;
    margin: auto;
    padding: 3rem;
    word-break: keep-all;
    color: #787878;
    font-family: 'GongGothicMedium';
    line-height: 1.8rem;
    top: 0%;
  `;

  function TextList() {
    return (
      <>
        <div
          className="itemwrap"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            padding: '1rem',
            justifyContent: 'space-around',

            paddingTop: '2rem',
          }}
        >
          <div
            className="item"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              flexDirection: 'column',
              width: '40%',
            }}
          >
            <p>기억에 남는 사람</p>
            <p style={{ color: '#12887A' }}>간단 답변</p>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              flexDirection: 'column',
              width: '40%',
            }}
          >
            <p>기억에 남는 장소</p>
            <p style={{ color: '#12887A' }}>간단 답변</p>
          </div>
        </div>

        <div
          className="itemwrap"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            padding: '1rem',
            justifyContent: 'space-around',
          }}
        >
          <div
            className="item"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              width: '40%',
              marginRight: '1rem',
            }}
          >
            <p>가치 있는 소비</p>
            <p style={{ color: '#12887A' }}>간단 답변</p>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              width: '40%',
            }}
          >
            <p>기억에 남는 음식</p>
            <p style={{ color: '#12887A' }}>간단 답변</p>
          </div>
        </div>

        <div
          className="itemwrap"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            padding: '1rem',
            justifyContent: 'space-around',
          }}
        >
          <div
            className="item"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              width: '40%',
              marginRight: '1rem',
            }}
          >
            <p>인상 깊었던 콘텐츠</p>
            <p style={{ color: '#12887A' }}>간단 답변</p>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              width: '40%',
              flexDirection: 'column',
            }}
          >
            <p>도전</p>
            <p style={{ color: '#12887A' }}> 간단 답변</p>
          </div>
        </div>

        <div
          className="itemwrap"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            padding: '1rem',
            justifyContent: 'space-around',
          }}
        >
          <div
            className="item"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              width: '40%',
              marginRight: '1rem',
              flexDirection: 'column',
            }}
          >
            <p>성취</p>
            <p style={{ color: '#12887A' }}>간단 답변</p>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              width: '40%',
            }}
          >
            <p>나를 사로잡은 감정</p>
            <p style={{ color: '#12887A' }}>간단 답변</p>
          </div>
        </div>

        <div
          className="You_Me_Textbox"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundColor: 'rgb(130, 203, 196, 0.5)',
            padding: '1rem',
            paddingTop: '2rem',
          }}
        >
          <div
            className="item"
            style={{
              justifyContent: 'center',
            }}
          >
            <p>함께한 사람들에게</p>
            <p style={{ color: '#FFFAEE' }}>
              간단 답변 간단 답변 간단 답변 간단 답변 간단 답변 간단 답변간단
              답변 간단 답변 간단 답변 간단 답변 간단 답변 간단 답변
            </p>
          </div>

          <div
            style={{
              justifyContent: 'center',
            }}
          >
            <p>나에게</p>
            <p style={{ color: '#FFFAEE' }}>
              간단 답변 간단 답변 간단 답변 간단 답변 간단 답변 간단 답변간단
              답변 간단 답변 간단 답변 간단 답변 간단 답변 간단 답변
            </p>
          </div>
        </div>
      </>
    );
  }

  function Footer() {
    return (
      <>
        <div style={{ padding: '1rem' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <p
              style={{
                fontSize: '0.5rem',
              }}
            >
              My 2022
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <TextBox>
        <Logo />
        <TextList />
        <Footer />
      </TextBox>
    </>
  );
}
