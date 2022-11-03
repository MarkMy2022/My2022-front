import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

function Logo() {
  return (
    <div>
      <img src="/img/logo.png" alt="logo" width={150} />
    </div>
  );
}

export default function ModeLight() {
  const { answer } = useSelector((state) => state.post);

  const TextBox = styled.div`
    border-radius: 2px;
    font-size: 1rem;
    background-image: url('/img/modeLight.png');
    background-size: cover;
    background-repeat: no-repeat;
    width: 90%;
    text-align: center;
    margin: auto;
    padding: 3rem;
    word-break: keep-all;
    color: #787878;
    font-family: 'GmarketSansMedium';
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
            justifyContent: 'space-around',
            paddingTop: '2rem',
            paddingBottom: '1rem',
          }}
        >
          <div
            className="item"
            style={{
              display: 'flex',

              flexDirection: 'column',
              width: '50%',
            }}
          >
            <p>기억에 남는 사람</p>
            <p style={{ color: '#12887A' }}>{answer.post_content.a1}</p>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '50%',
            }}
          >
            <p>기억에 남는 장소</p>
            <p style={{ color: '#12887A' }}>{answer.post_content.a2}</p>
          </div>
        </div>

        <div
          className="itemwrap"
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            paddingBottom: '1rem',
          }}
        >
          <div
            style={{
              display: 'flex',

              flexDirection: 'column',
              width: '50%',
            }}
          >
            <p>가치 있는 소비</p>
            <p style={{ color: '#12887A' }}>{answer.post_content.a3}</p>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '50%',
              verticalAlign: 'top',
            }}
          >
            <p>기억에 남는 음식</p>
            <p style={{ color: '#12887A' }}>{answer.post_content.a4}</p>
          </div>
        </div>

        <div
          className="itemwrap"
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            paddingBottom: '1rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '50%',
            }}
          >
            <p>인상 깊었던 콘텐츠</p>
            <p style={{ color: '#12887A' }}>{answer.post_content.a5}</p>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '50%',
            }}
          >
            <p>도전</p>
            <p style={{ color: '#12887A' }}> {answer.post_content.a6}</p>
          </div>
        </div>

        <div
          className="itemwrap"
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            paddingBottom: '1rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '50%',
            }}
          >
            <p>성취</p>
            <p style={{ color: '#12887A' }}>{answer.post_content.a7}</p>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '50%',
            }}
          >
            <p>나를 사로잡은 감정</p>
            <p style={{ color: '#12887A' }}>{answer.post_content.a8}</p>
          </div>
        </div>

        <div
          className="You_Me_Textbox"
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'rgb(130, 203, 196, 0.5)',
            padding: '1rem',
            paddingTop: '1rem',
          }}
        >
          <div className="item" style={{}}>
            <p>함께한 사람들에게</p>
            <p style={{ color: '#FFFAEE' }}>{answer.post_content.a9}</p>
          </div>

          <div
            style={{
              paddingTop: '1rem',
            }}
          >
            <p>나에게</p>
            <p style={{ color: '#FFFAEE' }}>{answer.post_content.a10}</p>
          </div>
        </div>
      </>
    );
  }

  function Footer() {
    return (
      <>
        <div style={{ paddingTop: '1rem' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
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
