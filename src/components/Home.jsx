import styled from 'styled-components';
import '../App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Modal from './Modal';
import { React, useState } from 'react';
import Header from './common/Header';

function HomeHeader() {
  return (
    <>
      <div style={{ position: 'relative' }}>
        <img
          src="img/logo.png"
          alt="logo"
          width={150}
          style={{
            position: 'absolute',
            left: '0',
            right: '0',
            margin: 'auto',
          }}
        />
      </div>
      <Header />
    </>
  );
}

function HeadingBox() {
  const HeadingText = styled.p`
    font-size: 1.5rem;
    line-height: 1.5rem;
    width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'GangwonEduSaeeum_OTFMediumA';
  `;
  return (
    <div className="wrap" style={{ position: 'relative' }}>
      <img src="img/homememo.png" alt="메모지" width={'90%'} />
      <HeadingText>
        𝑻𝒉𝒂𝒏𝒌𝒔 𝒂𝒏𝒅 𝑮𝒐𝒐𝒅𝒃𝒚𝒆
        <br />
        {/* Thanks and Goodbye 2022✨ <br /> */}
        고마웠고 잘가라 2022! <br />
        그런데.. <br />나 올해 뭐했지🙄 ⁉
      </HeadingText>
    </div>
  );
}

function HomeImg() {
  return <img alt="peopleimg" src="img/home.png" width={'80%'} />;
}

function TitleBox() {
  const TitleText1 = styled.p`
    font-size: 1.5rem;
    line-height: 2rem;
    padding: 0.5rem;
  `;
  const TitleText2 = styled.p`
    font-size: 1.2rem;
    line-height: 1.5rem;
    padding: 0.5rem;
  `;

  return (
    <div className="HomeFont">
      <TitleText1>
        소중한 나의
        <br />
        2022년을 기록해 보세요!
      </TitleText1>
      <TitleText2>
        Q&A로 한 눈에 보는 <br />올 한해 최고의 순간
      </TitleText2>
    </div>
  );
}
function HomeButton() {
  /* ---------- Start KAKAO SHARE ----------*/
  //Init KAKAO API
  if (!window.Kakao.isInitialized()) {
    // @ts-ignore
    //REST API KEY
    window.Kakao.init('6f7c7a916a1585a8b72c45ee842576dc');
    //@ts-ignore
    console.log(window.Kakao.isInitialized());
  }

  const shareKakaoLink = () => {
    // @ts-ignore
    window.Kakao.Link.createCustomButton({
      container: '#kakao-link-btn',
      templateId: 85063,
      templateArgs: {
        userId: '',
      },
    });
  };

  const onShareKakaoClick = () => {
    shareKakaoLink('');
  };
  /* ---------- End KAKAO SHARE ----------*/

  const [modal, setModal] = useState(false);
  return (
    <div className="button" align="center">
      <Stack spacing={-1} width={'200px'} padding={2}>
        <Button
          variant="contained"
          onClick={() => {
            setModal(true);
          }}
          style={{ fontSize: '1rem' }}
        >
          My 2022 만들기
        </Button>
        {modal === true ? <Modal /> : null}
        <br />
        <Button
          id="kakao-link-btn"
          variant="outlined"
          color="primary"
          className="kakaoBtn"
          onClick={onShareKakaoClick}
          style={{ fontSize: '1rem' }}
        >
          공유하기
        </Button>
      </Stack>
    </div>
  );
}

export default function Home() {
  const Container = styled.div`
    /* background-color: #225854; */
    background-color: white;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
  `;

  return (
    <>
      <Container fixed>
        <HomeHeader />
        <HeadingBox />
        <TitleBox />
        <HomeImg />
        <HomeButton></HomeButton>
      </Container>
    </>
  );
}
