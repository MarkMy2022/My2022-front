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

export default function ModeMoonM() {
  const { answer } = useSelector((state) => state.post);

  const TextBox = styled.div`
    border-radius: 2px;
    font-size: 1rem;
    background-image: url('/img/modeMoonM.png');
    background-size: cover;
    background-repeat: no-repeat;
    width: 90%;
    text-align: center;
    margin: auto;
    padding: 3rem;
    word-break: keep-all;
    color: #fff;
    font-family: 'GmarketSansMedium';
    line-height: 1.8rem;
    top: 0%;
  `;

  const Text = styled.p`
    font-family: 'ChosunSm';
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
            <Text>기억에 남는 사람</Text>
            <Text style={{ color: '#FFCD4A' }}>{answer.post_content.a1}</Text>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '50%',
            }}
          >
            <Text>기억에 남는 장소</Text>
            <Text style={{ color: '#FFCD4A' }}>{answer.post_content.a2}</Text>
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
            <Text>가치 있는 소비</Text>
            <Text style={{ color: '#FFCD4A' }}>{answer.post_content.a3}</Text>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '50%',
              verticalAlign: 'top',
            }}
          >
            <Text>기억에 남는 음식</Text>
            <Text style={{ color: '#FFCD4A' }}>{answer.post_content.a4}</Text>
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
            <Text>인상 깊었던 콘텐츠</Text>
            <Text style={{ color: '#FFCD4A' }}>{answer.post_content.a5}</Text>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '50%',
            }}
          >
            <Text>도전</Text>
            <Text style={{ color: '#FFCD4A' }}> {answer.post_content.a6}</Text>
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
            <Text>성취</Text>
            <Text style={{ color: '#FFCD4A' }}>{answer.post_content.a7}</Text>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '50%',
            }}
          >
            <Text>나를 사로잡은 감정</Text>
            <Text style={{ color: '#FFCD4A' }}>{answer.post_content.a8}</Text>
          </div>
        </div>

        <div
          className="You_Me_Textbox"
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'rgb(255, 255, 255, 0.1)',
            padding: '1rem',
            paddingTop: '1rem',
          }}
        >
          <div className="item" style={{}}>
            <Text>함께한 사람들에게</Text>
            <Text style={{ color: '#343331' }}>{answer.post_content.a9}</Text>
          </div>

          <div
            style={{
              paddingTop: '1rem',
            }}
          >
            <Text>나에게</Text>
            <Text style={{ color: '#343331' }}>{answer.post_content.a10}</Text>
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
