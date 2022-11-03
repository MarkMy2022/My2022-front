import styled from 'styled-components';
import { useSelector } from 'react-redux';

export default function ModeSunset() {
  const { answer } = useSelector((state) => state.post);

  const TextBox = styled.div`
    border-radius: 2px;
    background-image: url('img/modeSunset.png');
    background-size: cover;
    background-repeat: no-repeat;
    width: 90%;
    margin: auto;
    padding: 3rem;
    word-break: keep-all;
    color: #fff;
    line-height: 1.5rem;
  `;

  const WrapText = styled.div`
    display: 'flex';
    flex-direction: 'row';
  `;
  const Text = styled.p`
    font-family: 'ChosunSm';
    font-size: 1rem;
    color: '#3F4E6B';
    text-align: 'left';
  `;

  function TextList() {
    return (
      <>
        <WrapText>
          <Text
            style={{
              textAlign: 'left',
              paddingTop: '3rem',
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
            {answer.post_content.a1}
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
          <Text style={{ color: '#3F4E6B', textAlign: 'left' }}>
            {answer.post_content.a2}
          </Text>
        </WrapText>

        <WrapText>
          <Text
            style={{
              textAlign: 'left',
            }}
          >
            # 가치 있던 소비
          </Text>
          <Text style={{ color: '#3F4E6B', textAlign: 'left' }}>
            {answer.post_content.a3}
          </Text>
        </WrapText>

        <WrapText>
          <Text
            style={{
              textAlign: 'left',
            }}
          >
            # 기억에 남는 음식
          </Text>
          <Text style={{ color: '#3F4E6B', textAlign: 'left' }}>
            {answer.post_content.a4}
          </Text>
        </WrapText>

        <WrapText>
          <Text
            style={{
              textAlign: 'left',
            }}
          >
            # 인상 깊었던 콘텐츠
          </Text>
          <Text style={{ color: '#3F4E6B', textAlign: 'left' }}>
            {answer.post_content.a5}
          </Text>
        </WrapText>

        <WrapText>
          <Text
            style={{
              textAlign: 'left',
            }}
          >
            # 도전한 것
          </Text>
          <Text style={{ color: '#3F4E6B', textAlign: 'left' }}>
            {answer.post_content.a6}
          </Text>
        </WrapText>

        <WrapText>
          <Text
            style={{
              textAlign: 'left',
            }}
          >
            # 성취한 것
          </Text>
          <Text style={{ color: '#3F4E6B', textAlign: 'left' }}>
            {answer.post_content.a7}
          </Text>
        </WrapText>

        <WrapText>
          <Text
            style={{
              textAlign: 'left',
            }}
          >
            # 나를 사로잡은 감정
          </Text>
          <Text style={{ color: '#3F4E6B', textAlign: 'left' }}>
            {answer.post_content.a8}
          </Text>
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
              {answer.post_content.a9}
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
