import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
/*****Start 컴포넌트 저장 모듈*****/
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
/*****End 컴포넌트 저장 모듈*****/
import makePdf from './ResultExport';
import TitleNick from './TitleNick';
import AnswerComponent from './AnswerComponent';
import ShowResult from './ShowResult';

import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Kakao from '../assets/img/kakao_logo.png';

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
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  padding-bottom: 2rem;
`;

const ModifyBtn = styled.button`
  padding: 1rem;
  border: none;
  margin-bottom: 0.5rem;
  border-radius: 1rem;
  &:hover {
    cursor: pointer;
    background-color: #444747d3;
    color: white;
  }
`;
const KakaoShareBtn = styled.button`
  /* padding: 1rem; */
  background: none;
  border: none;
  /* margin-bottom: 0.5rem;
  border-radius: 1rem; */
  &:hover {
    cursor: pointer;
    color: #000000;
    text-decoration: underline;
  }
`;
const DifferentModeBtn = styled.button`
  padding: 1rem;
  border: none;
  margin-bottom: 0.5rem;
  border-radius: 1rem;
  &:hover {
    cursor: pointer;
    background-color: #444747d3;
    color: white;
  }
`;

function Result() {
  /* Start 질문 객체 직접 선언(백엔드가 아닌 프론트엔드 단에서 질문 직접 푸시)  */
  /*  const questions = [
    {
      title: '장소',
      question: '1. 올해 가장 기억에 남는 장소는 어디인가요?',
      post: {
        _id: '1',
        post_id: '1',
        post_user: '홍길동',
        post_content: {
          name: '안선영',
          a1: '안녕',
          d1: '상세 답변1',
        },
        post_comments: '저리가',
      },
    },
    {
      title: 'Flex',
      question: '2. 올해 가장 기억에 남는 소비는 무엇인가요?',
      post: {
        _id: '1',
        post_id: '1',
        post_user: '홍길동',
        post_content: {
          name: '안선영',
          a1: '안녕2',
          d1: '상세 답변2',
        },
      },
    },
    {
      title: '사람',
      question: '3. 올해 내 삶에 가장 기여한 사람은 누구인가요?',
      post: {
        _id: '1',
        post_id: '1',
        post_user: '홍길동',
        post_content: {
          name: '안선영',
          a1: '안녕3',
          d1: '상세 답변3',
        },
      },
    },
    {
      title: '나',
      question: '4. 올해 나를 사로잡은 감정은 무엇인가요?',
      post: {
        _id: '1',
        post_id: '1',
        post_user: '홍길동',
        post_content: {
          name: '안선영',
          a1: '안녕4',
          d1: '상세 답변4',
        },
      },
    },
  ]; */
  /* End 질문 객체 직접 선언(백엔드가 아닌 프론트엔드 단에서 질문 직접 푸시)  */

  const [users, setUsers] = useState([
    { id: 'van', name: '홍길동', provider: 'naver', posted: true },
  ]);
  /* ---------- Start KAKAO SHARE ----------*/
  //Init KAKAO API
  if (!window.Kakao.isInitialized()) {
    // @ts-ignore
    //REST API KEY
    window.Kakao.init('6f7c7a916a1585a8b72c45ee842576dc');
    //@ts-ignore
    console.log(window.Kakao.isInitialized());
  }

  const userId = '';

  const shareKakaoLink = (userId) => {
    // @ts-ignore
    window.Kakao.Link.createCustomButton({
      container: '#kakao-link-btn',
      templateId: 85063,
      templateArgs: {
        userId: `${userId}`,
      },
    });
  };

  const onShareKakaoClick = () => {
    shareKakaoLink(userId);
  };
  /* ---------- End KAKAO SHARE ----------*/

  /* const [posts, setPosts] = useState([
    {
      _id: '1',
      post_id: '1',
      post_user: '홍길동',
      post_content: {
        name: '안선영',
        a1: '안녕',
        a2: '안녕2',
        a3: '안녕3',
        a4: '안녕4',
        d1: '상세 답변1',
        d2: '상세 답변2',
        d3: '상세 답변3',
        d4: '상세 답변4',
      },

    },
  ]);  */

  /*****Start PDF Saving function*****/
  const pdf = makePdf();

  const onDownloadPdfBtn = async (e) => {
    e.preventDefault();
    await pdf.viewWithPdf();
  };
  /*****End PDF Saving function*****/

  /*****Start Img Saving function*****/
  const cardRef = useRef();
  //사진으로 저장하기 함수
  const onDownloadBtn = () => {
    const wholeCard = cardRef.current;
    domtoimage.toBlob(document.querySelector('.wholeCard')).then((blob) => {
      saveAs(blob, 'result.png');
    });
  };
  /*****End Img Saving function *****/

  const navigate = useNavigate();
  const onModifyEvent = () => {
    navigate('/modify');
  };

  const onDifferentClick = () => {
    navigate('/resultmode');
  };
  return (
    <>
      <Base className="wholeCard">
        {/*  Start 키워드와 질문 객체 출력 */}
        <div>
          {users.map(({ name, index }) => {
            return <TitleNick key={index} username={name}></TitleNick>;
          })}
        </div>
        {/* {questions.map((question, index) => (
          <ShowResult
            key={index}
            title={question.title}
            question={question.question}
            simple_anwser={question.post.post_content.a1}
            detail_anwser={question.post.post_content.d1}
          />
        ))} */}
        <ShowResult />
        {/* <div>
          {posts.map(({ post_content }) => {
            return (
              <AnswerComponent postContent={post_content}></AnswerComponent>
            );
          })}
        </div> */}
      </Base>
      <ButtonBlock>
        <Button
          style={{
            width: '200px',
            display: 'flex',
            margin: '0 auto',
            marginBottom: '10px',
          }}
          className="downBtn"
          onClick={onDownloadBtn}
          variant="contained"
          color="info"
          startIcon={<SaveAltIcon />}
        >
          <p href="" style={{ fontSize: '1rem' }}>
            사진으로 저장하기
          </p>
        </Button>
        <Button
          style={{ width: '200px', display: 'flex', margin: '0 auto' }}
          className="downPdfBtn"
          onClick={onDownloadPdfBtn}
          variant="contained"
          color="error"
          startIcon={<PictureAsPdfIcon />}
        >
          <p href="" style={{ fontSize: '1rem' }}>
            PDF로 저장하기
          </p>
        </Button>
      </ButtonBlock>
      <ButtonBlock>
        <ModifyBtn className="modifyBtn" onClick={onModifyEvent}>
          <p href="" style={{ fontSize: '1rem' }}>
            수정하기
          </p>
        </ModifyBtn>

        <DifferentModeBtn className="differentBtn" onClick={onDifferentClick}>
          다른 모드로 만들기
        </DifferentModeBtn>

        <KakaoShareBtn
          id="kakao-link-btn"
          className="kakaoBtn"
          type="button"
          onClick={onShareKakaoClick}
        >
          공유하기
          <img src={Kakao} width={'7%'} height={'7%'} alt="kakao logo" />
        </KakaoShareBtn>
      </ButtonBlock>
    </>
  );
}
export default Result;
