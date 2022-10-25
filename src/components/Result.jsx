import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
/*****Start 컴포넌트 저장 모듈*****/
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
/*****End 컴포넌트 저장 모듈*****/

const Base = styled.p`
  width: 500px;
  background-color: #006633;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`;

const QuestionFormContainer = styled.li`
  position: relative;
  width: 320px;
  height: 250px;
  background-color: #fff;
  border: 2px solid orange;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const Title = styled.div`
  position: absolute;
  width: 150px;
  height: 50px;
  top: -25px;
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  font-size: 24px;
  color: #fff;
  font-weight: 600;
`;

const Question = styled.h3`
  margin-top: 50px;
  margin-left: 10px;
  color: #333;
`;

const Answer = styled.textarea`
  width: 300px;
  height: 120px;
  position: absolute;
  bottom: 10px;
  background-color: orange;
  resize: none;
  border: none;
  font-size: 18px;
`;

function Result({ title, question, answer }) {
  useEffect(() => {
    axios.post('/api/result/results').then((response) => {
      if (response.data.success) {
        console.log(response.data);
      } else {
        alert(' 데이터를 가져오는 데 실패했습니다.');
      }
    });
  }, []);

  /*****Start 캡쳐 function*****/
  const cardRef = useRef();
  //사진으로 저장하기 함수
  const onDownloadBtn = () => {
    const wholeCard = cardRef.current;
    domtoimage
      .toBlob(document.querySelector('.QuestionFormContainer'))
      .then((blob) => {
        saveAs(blob, 'card.png');
      });
  };
  /*****End 캡쳐 function*****/

  return (
    <Base className="wholeCard">
      <QuestionFormContainer>
        <Title>{title}</Title>
        <Question>{question}</Question>
        <Answer>{answer}</Answer>
      </QuestionFormContainer>

      <QuestionFormContainer>
        <Title>{title}</Title>
        <Question>{question}</Question>
        <Answer>{answer}</Answer>
      </QuestionFormContainer>

      <QuestionFormContainer>
        <Title>{title}</Title>
        <Question>{question}</Question>
        <Answer>{answer}</Answer>
      </QuestionFormContainer>

      <button className="downBtn" onClick={onDownloadBtn}>
        사진으로 저장하기
      </button>
    </Base>
  );
}
export default Result;
