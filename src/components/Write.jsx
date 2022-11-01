import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import QuestionForm from './common/QuestionForm';
import { createPost } from '../modules/post';
import GlobalButton from './common/GlobalButton';
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
  /* & .nickname_input {
    width: 100px;
    height: 40px;
    border: none;
    outline: 2px solid orange;
    font-size: 32px;
    padding-left: 5px;
    &:focus {
      outline: 2px solid #C17900;
    }
    &::placeholder {
      font-size: 16px;
    }
  } */
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

  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const nicknameChangeHandler = (event) => {
    setNickname(event.target.value);
  };

  const anwserChangeHandler = (event) => {
    setAnwser({
      ...anwser,
      [event.target.name]: event.target.value,
    });
  };

  const imgChangeHandler = (event) => {};

  async function createPostApi(body) {
    await axios
      .post('http://localhost:4000/posts/new', body)
      .then((res) => {
        console.log(res.data);
        return res.data.message;
      })
      .catch((err) => console.log(err));
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const body = {
      post_user: 'b',
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
    dispatch(createPost(request));
    setAnwser({
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
    setNickname('');
    // navigate('/');
  };

  return (
    <WriteContainer onSubmit={onSubmitHandler}>
      <QuestionsContainer>
        <Description>
          <span>
            간단한 답변은 ‘명사’로 작성해주세요 (결과 페이지에는 간단한 답변만
            나와요:미소짓는_상기된_얼굴:)
          </span>
          <span>상세 답변은 자유롭게 작성해주세요</span>
        </Description>
        <NicknameInputContainer>
          {/* <input
            className="nickname_input"
            type="text"
            placeholder="닉네임을 입력"
            value={nickname}
            onChange={nicknameChangeHandler}
          /> */}
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
          anwser={anwser}
          anwser_change={anwserChangeHandler}
          img_change={imgChangeHandler}
        />
      </QuestionsContainer>
      <GlobalButton />
    </WriteContainer>
  );
}
export default Write;
