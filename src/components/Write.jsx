import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import QuestionForm from './common/QuestionForm';
import { createPost } from '../modules/post';
import { useSelector } from 'react-redux';
import { posted } from '../modules/users';
import GlobalButton from './common/GlobalButton';

const WriteContainer = styled.form`
  width: 100%;
  border-radius: 2px;
  background-color: #fff;
  padding: 1rem 0 3rem
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
  width: 80%;
  background-color: aliceblue;
  padding: 1rem 0;
  & p {
    text-align: center;
    line-height: 1.5rem;
  }
  @media all and (max-width: 550px) {
    & p {
      font-size: 15px;
    }
  }
`;

const NicknameInputContainer = styled.div`
  width: 100%;
  padding-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  & .input_text {
    font-size: 32px;
    font-weight: 600;
  }
`;

function Write() {
  const { userId } = useSelector((state) => state.user);
  const [nickname, setNickname] = useState('');
  const [answer, setAnswer] = useState({
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
  } = answer;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nicknameChangeHandler = (event) => {
    setNickname(event.target.value);
  };

  const answerChangeHandler = (event) => {
    setAnswer({
      ...answer,
      [event.target.name]: event.target.value,
    });
  };

  const imgChangeHandler = (event) => {};

  async function createPostApi(body) {
    await axios
      .post('http://localhost:4000/posts/new', body)
      .then((res) => {
        dispatch(createPost(res.data.newPost));
        return res.data.newPost;
      })
      .catch((err) => console.log(err));
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const body = {
      user_id: userId,
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
    const request = createPostApi(body);
    dispatch(posted(true));
    navigate(`/result/${userId}`);
  };

  const goToBack = () => {
    navigate('/');
  };

  return (
    <WriteContainer onSubmit={onSubmitHandler}>
      <QuestionsContainer>
        <Description>
          <p>간단한 답변은 ‘명사’로 작성해주세요</p>
          <p>(결과 페이지에는 간단한 답변만 나와요.😊)</p>
          <p>상세 답변은 자유롭게 작성해주세요.</p>
        </Description>
        <NicknameInputContainer>
          <Box
            sx={{
              width: '100px',
              maxWidth: '100%',
            }}
          >
            <TextField
              rows={2}
              fullWidth
              label="닉네임 입력"
              required={true}
              value={nickname}
              onChange={nicknameChangeHandler}
              inputProps={{ style: { fontSize: 16 } }}
              InputLabelProps={{ style: { fontSize: 12 } }}
            />
          </Box>
          <span className="input_text">님의 2022년</span>
        </NicknameInputContainer>
        <QuestionForm
          answer={answer}
          answer_change={answerChangeHandler}
          img_change={imgChangeHandler}
        />
      </QuestionsContainer>
      <GlobalButton clickEvent={goToBack} text1="뒤로가기" text2="저장하기" />
    </WriteContainer>
  );
}
export default Write;
