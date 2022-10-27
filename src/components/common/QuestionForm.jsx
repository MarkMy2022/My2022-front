import React from 'react';
import styled from 'styled-components';

const QuestionFormContainer = styled.li`
  position: relative;
  width: 80%;
  height: 250px;
  background-color: #fff;
  border: 2px solid orange;
  border-radius: 4px;
  margin-top: 50px;
`;

const Title = styled.div`
  position: absolute;
  width: 150px;
  height: 50px;
  top: -25px;
  left: calc(80% - 50%);
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
  margin-top: 40px;
  margin-bottom: 20px;
  margin-left: 10px;
  color: #333;
`;

const SimpleInput = styled.input`
  width: 90%;
  height: 50px;
  background-color: orange;
  border: none;
  font-size: 18px;
  padding: 10px;

  &:focus {
    outline: none;
  }

  @media all and (max-width: 380px) {
    height: 30px;
  }
`;

const DetailInput = styled.textarea`
  width: 90%;
  height: 100px;
  margin-top: 10px;
  background-color: orange;
  resize: none;
  border: none;
  font-size: 18px;
  padding: 10px;

  &:focus {
    outline: none;
  }

  @media all and (max-width: 380px) {
    height: 100px;
  }
`;

function QuestionForm({
  title,
  question,
  anwser,
  simple_anwser,
  detail_anwser,
}) {
  return (
    <QuestionFormContainer>
      <Title>{title}</Title>
      <Question>{question}</Question>
      <SimpleInput
        type="text"
        value={anwser.simpleAnwser}
        onChange={simple_anwser}
      />
      <DetailInput
        required={true}
        value={anwser.detailAnwser}
        onChange={detail_anwser}
      />
    </QuestionFormContainer>
  );
}

export default QuestionForm;
