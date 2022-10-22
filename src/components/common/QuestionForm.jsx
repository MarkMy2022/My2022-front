import React from 'react';
import styled from 'styled-components';

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

const InputForm = styled.textarea`
  width: 300px;
  height: 120px;
  position: absolute;
  bottom: 10px;
  background-color: orange;
  resize: none;
  border: none;
  font-size: 18px;
`;

function QuestionForm({ title, question }) {
  return (
    <QuestionFormContainer>
      <Title>{title}</Title>
      <Question>{question}</Question>
      <InputForm required />
    </QuestionFormContainer>
  );
}

export default QuestionForm;
