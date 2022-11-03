import React, { useRef } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
/*****Start 컴포넌트 저장 모듈*****/
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
/*****End 컴포넌트 저장 모듈*****/
import ShowResult from './ShowResult';
import { Button } from '@mui/material';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { useNavigate } from 'react-router-dom';

const Base = styled.p`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`;

const ButtonBlock = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  justify-content: center;
  padding-bottom: 4rem;
`;

const ButtonBlock2 = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const KakaoShareBtn = styled.button`
  background: none;
  border: none;

  &:hover {
    cursor: pointer;
    color: #000000;
    text-decoration: underline;
  }
`;

function Result() {
  /* ---------- Start KAKAO SHARE ----------*/
  //Init KAKAO API
  if (!window.Kakao.isInitialized()) {
    // @ts-ignore
    //REST API KEY
    window.Kakao.init('6f7c7a916a1585a8b72c45ee842576dc');
    //@ts-ignore
    console.log(window.Kakao.isInitialized());
  }

  const navigate = useNavigate();
  const { answer } = useSelector((state) => state.post);
  /*   const { userId } = useSelector((state) => state.user);*/
  const shareKakaoLink = () => {
    // @ts-ignore
    window.Kakao.Link.createCustomButton({
      container: '#kakao-link-btn2',
      templateId: 85063,
      templateArgs: {
        userId: '',
      },
    });
  };

  const onShareKakaoClick = () => {
    shareKakaoLink();
  };
  /* ---------- End KAKAO SHARE ----------*/

  /*****Start Img Saving function*****/
  const cardRef = useRef();
  //사진으로 저장하기 버튼 이벤트
  const onDownloadBtn = () => {
    const wholeCard = cardRef.current;
    domtoimage.toBlob(document.querySelector('.wholeCard')).then((blob) => {
      saveAs(blob, 'result.png');
    });
  };
  /*****End Img Saving function *****/

  const onModifyEvent = () => {
    navigate(`/modify/${answer.post_id}`);
  };

  //다른 모드로 만들기 버튼 이벤트
  const onDifferentClick = () => {
    navigate(`/resultmode`);
  };

  return (
    <>
      <Base className="wholeCard">
        <ShowResult />
      </Base>
      <ButtonBlock>
        <Button
          style={{
            marginRight: '10px',
            backgroundColor: '#99CCCC',
          }}
          className="downBtn"
          onClick={onDownloadBtn}
          variant="contained"
          startIcon={<SaveAltIcon />}
        >
          <p href="" style={{ fontSize: '1rem' }}>
            사진으로 저장하기
          </p>
        </Button>
        <Button
          style={{ backgroundColor: '#9999CC' }}
          variant="contained"
          className="differentBtn"
          onClick={onDifferentClick}
        >
          <p href="" style={{ fontSize: '1rem' }}>
            다른 모드로 만들기
          </p>
        </Button>
      </ButtonBlock>
      <ButtonBlock2>
        <KakaoShareBtn
          id="kakao-link-btn2"
          className="kakaoBtn"
          type="button"
          onClick={onShareKakaoClick}
        >
          <p href="" style={{ fontSize: '1.5rem' }}>
            공유하기
          </p>
          <br />
          <img width="15%" src="/img/kakao_logo2.png" alt="카카오 로고2"></img>
        </KakaoShareBtn>
      </ButtonBlock2>
    </>
  );
}
export default Result;
