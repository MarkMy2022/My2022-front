import React from 'react';
import styled from 'styled-components';

const Base = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QuestionContainer = styled.div`
  position: relative;
  width: 320px;
  height: 250px;
  background-color: #fff;
  border: 2px solid orange;
  border-radius: 4px;
  display: flex;
  justify-content: center;
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
`;

const InputForm = styled.textarea`
  width: 300px;
  height: 120px;
  position: absolute;
  bottom: 10px;
  background-color: orange;
  resize: none;
  border: none;
  /* outline: none; */
  font-size: 18px;
`;

function QuestionForm() {
  return (
    <Base>
      <QuestionContainer>
        <Question>올해 가장 기억에 남는 장소는 어디인가요?</Question>
        <Title>장소</Title>
        <InputForm required />
      </QuestionContainer>
    </Base>
  );
}

export default QuestionForm;
