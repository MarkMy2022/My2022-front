import React from 'react';
import styled from 'styled-components';
import Button from './common/Button';
import QuestionForm from './common/QuestionForm';

const WriteContainer = styled.div`
  width: 100%;
  border-radius: 2px;
  background-color: #fff;
`;

const QuestionsContainer = styled.ul`
  width: 100%;
  background-color: #fff;
  list-style: none;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 0;
`;

const NicknameInputContainer = styled.div`
  background-color: green;
  width: 80%;
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
        <Button
          main_color1="#0d47a1"
          sub_color1="#003c8f"
          hover_color1="#1565c0"
          text1="뒤로가기"
          background_color="#fff"
          main_color2="#c62828"
          sub_color2="#9a0007"
          hover_color2="#d32f2f"
          text2="저장하기"
        />
      </QuestionsContainer>
    </WriteContainer>
  );
}

export default Write;
