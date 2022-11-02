import React from 'react';
import styled from 'styled-components';

export default function ModeSunset() {
  const TextBox = styled.div`
    border-radius: 2px;

    /* background-color: #ffffff; */
    background-image: url('img/modeSunset.png');
    background-size: cover;
    /* background-size: contain; */
    background-repeat: no-repeat;
    width: 90%;
    /* height: 1000px; */
    /* text-align: center; */
    margin: auto;
    padding: 3rem;
    word-break: keep-all;
    color: #fff;
    line-height: 1.5rem;
    /* text-align: 'left'; */
  `;

  const WrapText = styled.div`
    display: 'flex';
    flex-direction: 'row';
    /* text-align: 'left'; */
  `;
  const Text = styled.p`
    font-family: 'ChosunSm';
    font-size: 1rem;
    color: '#3F4E6B';
    /* justify-content: 'flex-start'; */
    text-align: 'left';
  `;

  function TextList() {
    return (
      <>
        <WrapText>
          <Text
            style={{
              textAlign: 'left',
            }}
          >
            # 기억에 남는 사람
          </Text>
          <Text
            style={{
              color: '#3F4E6B',
              textAlign: 'left',
            }}
          >
            간단 답변
          </Text>
        </WrapText>

        <WrapText>
          <Text
            style={{
              textAlign: 'left',
            }}
          >
            # 기억에 남는 장소
          </Text>
          <Text style={{ color: '#3F4E6B', textAlign: 'left' }}>간단 답변</Text>
        </WrapText>

        <WrapText>
          <Text
            style={{
              textAlign: 'left',
            }}
          >
            # 가치 있던 소비
          </Text>
          <Text style={{ color: '#3F4E6B', textAlign: 'left' }}>간단 답변</Text>
        </WrapText>

        <WrapText>
          <Text
            style={{
              textAlign: 'left',
            }}
          >
            # 기억에 남는 음식
          </Text>
          <Text style={{ color: '#3F4E6B', textAlign: 'left' }}>간단 답변</Text>
        </WrapText>

        <WrapText>
          <Text
            style={{
              textAlign: 'left',
            }}
          >
            # 인상 깊었던 콘텐츠
          </Text>
          <Text style={{ color: '#3F4E6B', textAlign: 'left' }}>간단 답변</Text>
        </WrapText>

        <WrapText>
          <Text
            style={{
              textAlign: 'left',
            }}
          >
            # 도전한 것
          </Text>
          <Text style={{ color: '#3F4E6B', textAlign: 'left' }}>간단 답변</Text>
        </WrapText>

        <WrapText>
          <Text
            style={{
              textAlign: 'left',
            }}
          >
            # 성취한 것
          </Text>
          <Text style={{ color: '#3F4E6B', textAlign: 'left' }}>간단 답변</Text>
        </WrapText>

        <WrapText>
          <Text
            style={{
              textAlign: 'left',
            }}
          >
            # 나를 사로잡은 감정
          </Text>
          <Text style={{ color: '#3F4E6B', textAlign: 'left' }}>간단 답변</Text>
        </WrapText>

        <div>
          <WrapText
            style={{
              backgroundColor: 'rgb(255, 255, 255, 0.1)',
              margin: '1rem 0',
              padding: '0.5rem',
            }}
          >
            <Text
              style={{
                textAlign: 'left',
                color: '#FFCD4A',
              }}
            >
              # 함께한 사람들에게
            </Text>
            <Text
              style={{
                color: '#303031',
                textAlign: 'left',
              }}
            >
              상세 답변 상세 답변 상세 답변 상세 답변 상세 답변 상세 답변 상세
              답변 상세 답변
            </Text>
          </WrapText>

          <WrapText
            style={{
              backgroundColor: 'rgb(255, 255, 255, 0.1)',
            }}
          >
            <Text
              style={{
                color: '#FFCD4A',
                paddingLeft: '0.5rem',

                textAlign: 'left',
              }}
            >
              # 나에게
            </Text>
            <Text
              style={{
                color: '#303031',
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
