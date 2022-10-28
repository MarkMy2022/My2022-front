import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import QuestionForm from './common/QuestionForm';
import Button from './common/Button';
import { createPost } from '../modules/post';

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
    padding-left: 5px;

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
  const [nickname, setNickname] = useState('');
  const [anwser, setAnwser] = useState({
    a1: '',
    d1: '',
    a2: '',
    d2: '',
    a3: '',
    d3: '',
    a4: '',
    d4: '',
    a5: '',
    d5: '',
    a6: '',
    d6: '',
    a7: '',
    d7: '',
    a8: '',
    d8: '',
    a9: '',
    a10: '',
  });

  const {
    a1,
    d1,
    a2,
    d2,
    a3,
    d3,
    a4,
    d4,
    a5,
    d5,
    a6,
    d6,
    a7,
    d7,
    a8,
    d8,
    a9,
    a10,
  } = anwser;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // console.log(anwser.a1, '간단 대답1');
  // console.log(anwser.d1, '상세 대답1');
  // console.log(anwser.a2, '간단 대답2');
  // console.log(anwser.d2, '상세 대답2');
  // console.log(nickname, '닉네임');

  const nicknameChangeHandler = (event) => {
    setNickname(event.target.value);
  };

  const anwserChangeHandler = (event) => {
    // console.log('대답');
    setAnwser({
      ...anwser,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const body = {
      post_user: '로그인 아이디(카카오네이버구글)',
      post_content: {
        name: nickname,
        a1,
        d1,
        a2,
        d2,
        a3,
        d3,
        a4,
        d4,
        a5,
        d5,
        a6,
        d6,
        a7,
        d7,
        a8,
        d8,
        a9,
        a10,
      },
    };
    dispatch(createPost(body));
    // navigate('/');
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
            value={nickname}
            onChange={nicknameChangeHandler}
          />
          <span className="input_text">님의 2022년</span>
        </NicknameInputContainer>
        <QuestionForm anwser={anwser} anwser_change={anwserChangeHandler} />
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
