import { WrapText } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

export default function ModeLight() {
  const TextBox = styled.div`
    border-radius: 2px;
    font-size: 1rem;
    /* background-color: #ffffff; */
    background-image: url('img/modeStar.png');
    background-size: cover;
    /* background-size: contain; */
    background-repeat: no-repeat;
    width: 90%;
    /* height: 1000px; */
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
            간단 답변
          </Text>
        </WrapText>

        <WrapText>
          <Text>기억에 남는 사람</Text>
          <Text style={{ color: '#FFCD4A', paddingLeft: '0.5rem' }}>
            간단 답변
          </Text>
        </WrapText>

        <WrapText>
          <Text>기억에 남는 장소</Text>
          <Text style={{ color: '#FFCD4A', paddingLeft: '0.5rem' }}>
            간단 답변
          </Text>
        </WrapText>

        <WrapText>
          <Text>가치 있던 소비</Text>
          <Text style={{ color: '#FFCD4A', paddingLeft: '0.5rem' }}>
            간단 답변
          </Text>
        </WrapText>

        <WrapText>
          <Text>기억에 남는 음식</Text>
          <Text style={{ color: '#FFCD4A', paddingLeft: '0.5rem' }}>
            간단 답변
          </Text>
        </WrapText>

        <WrapText>
          <Text>인상 깊었던 콘텐츠</Text>
          <Text style={{ color: '#FFCD4A', paddingLeft: '0.5rem' }}>
            간단 답변
          </Text>
        </WrapText>

        <WrapText>
          <Text>도전한 것</Text>
          <Text style={{ color: '#FFCD4A', paddingLeft: '0.5rem' }}>
            간단 답변
          </Text>
        </WrapText>

        <WrapText>
          <Text>성취한 것 </Text>
          <Text style={{ color: '#FFCD4A', paddingLeft: '0.5rem' }}>
            간단 답변
          </Text>
        </WrapText>

        <WrapText>
          <Text>나를 사로잡은 감정 </Text>
          <Text style={{ color: '#FFCD4A', paddingLeft: '0.5rem' }}>
            간단 답변
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
              상세 답변 상세 답변 상세 답변 상세 답변 상세 답변 상세 답변 상세
              답변 상세 답변
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
              상세 답변 상세 답변 상세 답변 상세 답변 상세 답변 상세 답변 상세
              답변 상세 답변 상세 답변 상세 답변
            </Text>
          </WrapText>
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
