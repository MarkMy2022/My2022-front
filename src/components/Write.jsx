import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import QuestionForm from './common/QuestionForm';
import Button from './common/Button';

const WriteContainer = styled.form`
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

const Description = styled.div`
  width: 100%;

  & span {
    display: block;
    text-align: start;
    padding-left: 16px;
    margin: 0 auto;
  }

  @media all and (max-width: 550px) {
    & span {
      font-size: 15px;
    }
  }
`;

const NicknameInputContainer = styled.div`
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

function Write() {
  const navigate = useNavigate();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    navigate('/');
  };

  return (
    <WriteContainer onSubmit={onSubmitHandler}>
      <QuestionsContainer>
        <Description>
          <span>
            간단한 답변은 ‘명사’로 작성해주세요 (결과 페이지에는 간단한 답변만
            나와요😊)
          </span>
          <span>상세 답변은 자유롭게 작성해주세요</span>
        </Description>
        <NicknameInputContainer>
          <input
            className="nickname_input"
            type="text"
            placeholder="닉네임을 입력"
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
    </WriteContainer>
  );
}

export default Write;
