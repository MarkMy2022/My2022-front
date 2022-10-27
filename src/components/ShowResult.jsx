import React from 'react';
import styled from 'styled-components';

const ShowResultContainer = styled.li`
  position: relative;
  width: 80%;
  height: 250px;
  background-color: #fff;
  border: 2px solid orange;
  border-radius: 4px;
  /* display: flex;
  justify-content: center; */
  /* align-items: flex-start; */
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
  margin-top: 50px;
  margin-left: 10px;
  color: #333;
`;
const SimpleResult = styled.textarea`
  position: absolute;
  bottom: 120px;
  width: 90%;
  height: 50px;
  background-color: orange;
  resize: none;
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
const DetailResult = styled.textarea`
  width: 90%;
  height: 50px;
  position: absolute;
  bottom: 10px;
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
function ShowResult({ title, question, simple_anwser, detail_anwser }) {
  return (
    <ShowResultContainer>
      <Title>{title}</Title>
      <Question>{question}</Question>
      <SimpleResult readOnly>{simple_anwser}</SimpleResult>
      <DetailResult readOnly>{detail_anwser}</DetailResult>
    </ShowResultContainer>
  );
}
export default ShowResult;
