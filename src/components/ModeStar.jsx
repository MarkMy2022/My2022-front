import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export default function ModeStar() {
  const { answer } = useSelector((state) => state.post);

  const TextBox = styled.div`
    border-radius: 2px;
    font-size: 1rem;
    background-image: url('/img/modeStar.png');
    background-size: cover;
    background-repeat: no-repeat;
    width: 90%;
    text-align: center;
    margin: auto;
    padding: 3rem;
    word-break: keep-all;
    color: #fff;

    line-height: 1.8rem;
    top: 0%;
  `;

  const WrapText = styled.div`
    display: 'flex';
    flex-wrap: 'wrap';
    justify-content: 'center';
    flex-direction: 'column';
  `;
  const Text = styled.p`
    font-family: 'ChosunSm';
  `;

  function TextList() {
    return (
      <>
        <WrapText>
          <Text>기억에 남는 사람</Text>
          <Text
            style={{
              color: '#FFCD4A',
              paddingLeft: '0.5rem',
            }}
          >
            {answer.post_content.a1}
          </Text>
        </WrapText>

        <WrapText>
          <Text>기억에 남는 장소</Text>
          <Text style={{ color: '#FFCD4A' }}>{answer.post_content.a2}</Text>
        </WrapText>

        <WrapText>
          <Text>가치 있던 소비</Text>
          <Text style={{ color: '#FFCD4A' }}>{answer.post_content.a3}</Text>
        </WrapText>

        <WrapText>
          <Text>기억에 남는 음식</Text>
          <Text style={{ color: '#FFCD4A' }}>{answer.post_content.a4}</Text>
        </WrapText>

        <WrapText>
          <Text>인상 깊었던 콘텐츠</Text>
          <Text style={{ color: '#FFCD4A' }}>{answer.post_content.a5}</Text>
        </WrapText>

        <WrapText>
          <Text>도전한 것</Text>
          <Text style={{ color: '#FFCD4A' }}>{answer.post_content.a6}</Text>
        </WrapText>

        <WrapText>
          <Text>성취한 것 </Text>
          <Text style={{ color: '#FFCD4A' }}>{answer.post_content.a7}</Text>
        </WrapText>

        <WrapText>
          <Text>나를 사로잡은 감정 </Text>
          <Text style={{ color: '#FFCD4A', marginBottom: '1rem' }}>
            {answer.post_content.a8}
          </Text>
        </WrapText>

        <div>
          <WrapText
            style={{
              backgroundColor: 'rgb(255, 255, 255, 0.3)',
              paddingBottom: '1rem',
            }}
          >
            <Text
              style={{
                color: '#384C9F',
                paddingLeft: '0.5rem',
                textAlign: 'left',
              }}
            >
              함께한 사람들에게
            </Text>
            <Text
              style={{
                color: 'black',
                paddingLeft: '0.5rem',
                textAlign: 'left',
              }}
            >
              {answer.post_content.a9}
            </Text>
          </WrapText>

          <WrapText
            style={{
              backgroundColor: 'rgb(255, 255, 255, 0.3)',
            }}
          >
            <Text
              style={{
                color: '#384C9F',
                paddingLeft: '0.5rem',
                textAlign: 'left',
              }}
            >
              나에게
            </Text>
            <Text
              style={{
                color: 'black',
                paddingLeft: '0.5rem',
                textAlign: 'left',
              }}
            >
              {answer.post_content.a10}
            </Text>
          </WrapText>
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
                color: 'black',
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
