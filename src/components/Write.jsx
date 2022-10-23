import React from 'react';
import styled from 'styled-components';
import QuestionForm from './common/QuestionForm';

// const Base = styled.div`
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

const WriteContainer = styled.div`
  width: 500px;
  height: 550px;
  border-radius: 2px;
  background-color: darkgreen;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QuestionsContainer = styled.ul`
  width: 400px;
  height: 480px;
  background-color: #fff;
  list-style: none;
  overflow-y: scroll;
  padding-bottom: 20px;
`;

const NicknameInputContainer = styled.div`
  width: 320px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  & .nickname_input {
    width: 100px;
    height: 40px;
    border: none;
    outline: 2px solid orange;
    font-size: 32px;

    &:focus {
      outline: 2px solid #c17900;
    }

    &::placeholder {
      font-size: 16px;
    }
  }

  & .input_text {
    font-size: 32px;
    font-weight: 600;
  }
`;

function Write() {
  const questions = [
    {
      title: '장소',
      question: '1.올해 가장 기억에 남는 장소는 어디인가요?',
    },
    {
      title: 'Flex',
      question: '2.올해 가장 기억에 남는 소비는 무엇인가요?',
    },
    {
      title: '사람',
      question: '3.올해 내 삶에 가장 기여한 사람은 누구인가요?',
    },
    {
      title: '나',
      question: '4.올해 나를 사로잡은 감정은 무엇인가요?',
    },
  ];

  return (
    <WriteContainer>
      <QuestionsContainer>
        <NicknameInputContainer>
          <input
            className="nickname_input"
            type="text"
            placeholder="닉네임을 입력하세요."
          />
          <span className="input_text">님의 2022년</span>
        </NicknameInputContainer>
        {questions.map((question, index) => (
          <QuestionForm
            key={index}
            title={question.title}
            question={question.question}
          />
        ))}
      </QuestionsContainer>
    </WriteContainer>
  );
}

export default Write;
