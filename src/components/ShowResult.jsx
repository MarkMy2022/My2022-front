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
  margin-bottom: 3rem;
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
  margin-bottom: 2rem;
  margin-left: 10px;
  color: #333;
`;
const SimpleResult = styled.textarea`
  width: 55%;
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
  width: 55%;
  height: 50px;
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
function ShowResult() {
  return (
    <>
      <ShowResultContainer>
        <Title>사람</Title>
        <Question>1. 올해 가장 기억에 남는 사람은 누구인가요?</Question>
        <SimpleResult readOnly></SimpleResult>
        <DetailResult readOnly></DetailResult>
      </ShowResultContainer>

      <ShowResultContainer>
        <Title>장소</Title>
        <Question>2. 올해 가장 기억에 남는 장소는 어디인가요?</Question>
        <SimpleResult readOnly></SimpleResult>
        <DetailResult readOnly></DetailResult>
      </ShowResultContainer>

      <ShowResultContainer>
        <Title>소비</Title>
        <Question>3. 올해 가장 가치 있는 소비는 무엇인가요?</Question>
        <SimpleResult readOnly></SimpleResult>
        <DetailResult readOnly></DetailResult>
      </ShowResultContainer>

      <ShowResultContainer>
        <Title>음식</Title>
        <Question>4. 올해 가장 기억에 남는 음식은 무엇인가요?</Question>
        <SimpleResult readOnly></SimpleResult>
        <DetailResult readOnly></DetailResult>
      </ShowResultContainer>

      <ShowResultContainer>
        <Title>콘텐츠</Title>
        <Question>5. 올해 인상 깊었던 콘텐츠는 무엇인가요?</Question>
        <SimpleResult readOnly></SimpleResult>
        <DetailResult readOnly></DetailResult>
      </ShowResultContainer>

      <ShowResultContainer>
        <Title>도전</Title>
        <Question>6. 올해 도전한 것은 무엇인가요?</Question>
        <SimpleResult readOnly></SimpleResult>
        <DetailResult readOnly></DetailResult>
      </ShowResultContainer>

      <ShowResultContainer>
        <Title>성취</Title>
        <Question>7. 올해 성취한 것은 무엇인가요?</Question>
        <SimpleResult readOnly></SimpleResult>
        <DetailResult readOnly></DetailResult>
      </ShowResultContainer>

      <ShowResultContainer>
        <Title>감정</Title>
        <Question>8. 올해 나를 사로잡은 감정은 무엇인가요?</Question>
        <SimpleResult readOnly></SimpleResult>
        <DetailResult readOnly></DetailResult>
      </ShowResultContainer>

      <ShowResultContainer>
        <Title>너에게,</Title>
        <Question>9. 올해 함께한 사람들에게 한마디 해주세요.</Question>
        <DetailResult readOnly></DetailResult>
      </ShowResultContainer>

      <ShowResultContainer>
        <Title>나에게,</Title>
        <Question>10. 나에게 한마디 해주세요.</Question>
        <DetailResult readOnly></DetailResult>
      </ShowResultContainer>
    </>
  );
}
export default ShowResult;
