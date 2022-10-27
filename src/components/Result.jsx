import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
/*****Start 컴포넌트 저장 모듈*****/
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
/*****End 컴포넌트 저장 모듈*****/
import QuestionForm from './common/QuestionForm';
import Title from './common/QuestionForm';
import Question from './common/QuestionForm';
import QuestionFormContainer from './common/QuestionForm';

import makePdf from './ResultExport';
import onShareKakaoClick from './kakaoShareBtn';
import TitleNick from './TitleNick';
import AnswerComponent from './AnswerComponent';
import ShowResult from './ShowResult';
import { fontSize } from '@mui/system';
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; */

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

const Button = styled.button`
  display: flex;
  padding: 0.2rem;
  margin: 1rem;
  background: none;
  border-style: none;
  border-radius: 10px;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #dfa446;
    cursor: pointer;
  }
`;

const InputForm = styled.textarea`
  width: 300px;
  height: 120px;
  position: absolute;
  /* top: 120px; */
  bottom: 10px;
  background-color: orange;
  /* height: calc(var(--vh, 1vh) * 100); */
  resize: none;
  border: none;
  font-size: 18px;
`;

function Result() {
  /* Start 질문 객체 직접 선언(백엔드가 아닌 프론트엔드 단에서 질문 직접 푸시)  */
  const questions = [
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
        /* post_comments: '저리가', */
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
  ];
  /* End 질문 객체 직접 선언(백엔드가 아닌 프론트엔드 단에서 질문 직접 푸시)  */

  const [users, setUsers] = useState([
    { id: 'van', name: '홍길동', provider: 'naver', posted: true },
  ]);

  const [posts, setPosts] = useState([
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
      /* post_comments: '저리가', */
    },
  ]);

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

  return (
    <>
      <Base className="wholeCard">
        {/*  Start 키워드와 질문 객체 출력 */}
        <div>
          {users.map(({ name }) => {
            return <TitleNick username={name}></TitleNick>;
          })}
        </div>
        {questions.map((question, index) => (
          <ShowResult
            key={index}
            title={question.title}
            question={question.question}
            simple_anwser={question.post.post_content.a1}
            detail_anwser={question.post.post_content.d1}
          />
        ))}

        {/* <div>
          {posts.map(({ post_content }) => {
            return (
              <AnswerComponent postContent={post_content}></AnswerComponent>
            );
          })}
        </div> */}
      </Base>
      <ButtonBlock>
        <Button className="downBtn" onClick={onDownloadBtn}>
          <p href="" style={{ fontSize: '1.5rem' }}>
            사진으로 저장하기
          </p>
        </Button>
        <Button className="downPdfBtn" onClick={onDownloadPdfBtn}>
          <p href="" style={{ fontSize: '1.5rem' }}>
            PDF로 저장하기
          </p>
        </Button>
        {/* <Button className="shareBtn" onClick={onShareBtn}>
          <p>공유하기</p>
        </Button> */}
        <button
          id="kakao-link-btn"
          className="kakaoBtn"
          type="button"
          onClick={onShareKakaoClick}
        >
          공유하기
        </button>
      </ButtonBlock>
    </>
  );
}
export default Result;
