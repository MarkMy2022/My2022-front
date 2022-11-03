import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

export default function ModeNight() {
  const { answer } = useSelector((state) => state.post);

  const TextBox = styled.div`
    border-radius: 2px;
    background-image: url('/img/modeNight.png');
    background-size: cover;
    /* background-repeat: no-repeat; */
    width: 100%;
    text-align: center;
    padding: 3rem;
    word-break: keep-all;
    color: #fff;
    line-height: 2rem;
  `;

  const Text = styled.p`
    font-family: 'Cafe24Oneprettynight';
    font-size: 1.3rem;
  `;

  function TextList() {
    return (
      <>
        <div style={{ padding: '1.5rem' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                fontSize: '1.5rem',
              }}
            >
              {answer.post_content.name}님의
            </Text>
            <Text
              style={{
                color: '#FFCD4A',
                paddingLeft: '0.5rem',
                fontSize: '2rem',
              }}
            >
              2022년
            </Text>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Text>1. 올해 가장 기억에 남는 사람은?</Text>
          <Text style={{ color: '#FFCD4A', paddingLeft: '0.5rem' }}>
            {answer.post_content.a1}
          </Text>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Text>2. 올해 가장 기억에 남는 장소는?</Text>
          <Text style={{ color: '#FFCD4A', paddingLeft: '0.5rem' }}>
            {answer.post_content.a2}
          </Text>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Text>3. 올해 가장 가치 있는 소비는?</Text>
          <Text style={{ color: '#FFCD4A', paddingLeft: '0.5rem' }}>
            {answer.post_content.a3}
          </Text>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Text>4. 올해 가장 기억에 남는 음식은? </Text>
          <Text style={{ color: '#FFCD4A', paddingLeft: '0.5rem' }}>
            {answer.post_content.a4}
          </Text>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Text>5. 올해 인상 깊었던 콘텐츠는? </Text>
          <Text style={{ color: '#FFCD4A', paddingLeft: '0.5rem' }}>
            {answer.post_content.a5}
          </Text>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Text>6. 올해 도전한 것은? </Text>
          <Text style={{ color: '#FFCD4A', paddingLeft: '0.5rem' }}>
            {answer.post_content.a6}
          </Text>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Text>7. 올해 성취한 것은? </Text>
          <Text style={{ color: '#FFCD4A', paddingLeft: '0.5rem' }}>
            {answer.post_content.a7}
          </Text>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Text>8. 나를 사로잡은 감정은? </Text>
          <Text style={{ color: '#FFCD4A', paddingLeft: '0.5rem' }}>
            {answer.post_content.a8}
          </Text>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Text>9. 올해 함께한 사람들에게 한마디 </Text>
          <Text style={{ color: '#FFCD4A', paddingLeft: '0.5rem' }}>
            {answer.post_content.a9}
          </Text>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Text>10. 나에게 한마디 </Text>
          <Text style={{ color: '#FFCD4A', paddingLeft: '0.5rem' }}>
            {answer.post_content.a10}
          </Text>
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
