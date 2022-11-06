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
import CommentForm from './CommentForm';

const Base = styled.div`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`;

const ButtonBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  justify-content: center;
  padding-bottom: 1rem;
`;

const ButtonBlock2 = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  justify-content: center;
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
  const { answer } = useSelector((state) => state.post);
  /* ---------- Start KAKAO SHARE ----------*/
  //Init KAKAO API
  if (!window.Kakao.isInitialized()) {
    // @ts-ignore
    //REST API KEY
    window.Kakao.init(process.env.REACT_APP_KAKAO_SHARE);
    //@ts-ignore
    // console.log(window.Kakao.isInitialized());
  }

  const navigate = useNavigate();

  const shareKakaoLink = () => {
    // @ts-ignore
    window.Kakao.Link.createCustomButton({
      container: '#kakao-link-btn2',
      templateId: 85063,
      templateArgs: {
        path: `result/${answer.user_id}`,
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

  //다른 모드로 만들기 버튼 이벤트
  const onDifferentClick = () => {
    navigate(`/resultmode`);
  };

  return (
    <>
      <Base className="wholeCard">
        <ShowResult />
        <ButtonBlock>
          <Button
            style={{
              marginRight: '2%',
              backgroundColor: '#377D71',
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
            style={{ backgroundColor: '#F8B400' }}
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
          <Button
            style={{ backgroundColor: '#FF6363' }}
            variant="contained"
            className="differentBtn"
            onClick={() => {
              navigate('/login');
            }}
          >
            <p href="/login" style={{ fontSize: '1rem' }}>
              MY2022 만들기!
            </p>
          </Button>
        <KakaoShareBtn
          id="kakao-link-btn2"
          className="kakaoBtn"
          type="button"
          onClick={onShareKakaoClick}
        >
          <br />
          <img
            width="50%"
            src="/img/kakao_logo.png"
            alt="카카오 로고"
          ></img>
          <p href="" style={{ fontSize: '1rem' }}>
            공유하기
          </p>
        </KakaoShareBtn>
      </ButtonBlock2>
      <CommentForm />
      </Base>
    </>
  );
}
export default Result;
