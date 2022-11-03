import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export default function ModeMoonF() {
  const { answer } = useSelector((state) => state.post);

  const TextBox = styled.div`
    border-radius: 2px;
    font-size: 1rem;
    background-image: url('img/modeMoonM.png');
    background-size: cover;
    background-repeat: no-repeat;
    width: 90%;
    text-align: center;
    margin: auto;
    padding: 3rem;
    word-break: keep-all;
    color: #fff;
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
            paddingTop: '4rem',
          }}
        >
          <div
            className="item"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              width: '30%',
            }}
          >
            <p>기억에 남는 사람</p>
            <p style={{ color: '#FFCD4A' }}>{answer.post_content.a1}</p>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              width: '30%',
            }}
          >
            <p>기억에 남는 장소</p>
            <p style={{ color: '#FFCD4A' }}>{answer.post_content.a2}</p>
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
              width: '30%',
              marginRight: '1rem',
            }}
          >
            <p>가치 있는 소비</p>
            <p style={{ color: '#FFCD4A' }}>{answer.post_content.a3}</p>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              width: '30%',
            }}
          >
            <p>기억에 남는 음식</p>
            <p style={{ color: '#FFCD4A' }}>{answer.post_content.a4}</p>
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
              width: '30%',
              marginRight: '1rem',
            }}
          >
            <p>인상 깊었던 콘텐츠</p>
            <p style={{ color: '#FFCD4A' }}>{answer.post_content.a5}</p>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              width: '30%',
              flexDirection: 'column',
            }}
          >
            <p>도전</p>
            <p style={{ color: '#FFCD4A' }}> {answer.post_content.a6}</p>
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
              width: '30%',
              marginRight: '1rem',
              flexDirection: 'column',
            }}
          >
            <p>성취</p>
            <p style={{ color: '#FFCD4A' }}>{answer.post_content.a7}</p>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              width: '30%',
            }}
          >
            <p>나를 사로잡은 감정</p>
            <p style={{ color: '#FFCD4A' }}>{answer.post_content.a8}</p>
          </div>
        </div>

        <div
          className="You_Me_Textbox"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundColor: 'rgb(255, 255, 255, 0.1)',
            padding: '1rem',
          }}
        >
          <div
            className="item"
            style={{
              justifyContent: 'center',
            }}
          >
            <p>함께한 사람들에게</p>
            <p style={{ color: '#343331' }}>{answer.post_content.a9}</p>
          </div>

          <div
            style={{
              justifyContent: 'center',
            }}
          >
            <p>나에게</p>
            <p style={{ color: '#343331' }}>{answer.post_content.a10}</p>
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
        <TextList />
        <Footer />
      </TextBox>
    </>
  );
}
