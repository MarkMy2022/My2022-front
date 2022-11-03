import React, { useState } from 'react';
import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, modifyPost, readPost } from '../modules/post';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { posted } from '../modules/users';
import GlobalButton from './common/GlobalButton';

const WriteContainer = styled.form`
  width: 100%;
  border-radius: 2px;
  background-color: #fff;
`;

const NicknameInputContainer = styled.div`
  width: 80%;
  padding-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  & .input_text {
    font-size: 32px;
    font-weight: 600;
  }
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

const QuestionFormContainer = styled.li`
  position: relative;
  width: 80%;
  background-color: #fff;
  margin-top: 8%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  width: 40%;
  padding: 0.5rem;
  background-color: orange;
  border-radius: 15px;
  font-size: 1.5rem;
  color: #fff;
  font-weight: 600;
`;

const Question = styled.h3`
  margin: 1rem 0;
  color: #333;
`;

function QuestionForm({ img_change }) {
  const params = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { answer } = useSelector((state) => state.post);
  const [answers, setAnswers] = useState({});
  const [nickname, setNickname] = useState('');
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
  } = answers;

  const nicknameChangeHandler = (event) => {
    setNickname(event.target.value);
  };

  const answerChangeHandler = (event) => {
    setAnswers({
      ...answers,
      [event.target.name]: event.target.value,
    });
  };

  const onUpdatePost = async (payload) => {
    await axios
      .post(`http://localhost:4000/posts/${params.postId}/edit`, payload)
      .then((res) => {
        console.log(res.data.message);
        return res.data.message;
      })
      .catch((err) => console.log(err));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const body = {
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
    const request = onUpdatePost(body);
    dispatch(modifyPost(request));
    navigate(`/result/${answer.user_id}`);
  };

  const goToResult = () => {
    navigate(`/result/${answer.user_id}`);
  };

  useEffect(() => {
    setNickname(answer.post_content.nickname);
    setAnswers(answer.post_content);
  }, []);

  return (
    <WriteContainer onSubmit={onSubmit}>
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
            required={true}
            defaultValue={answer.post_content.name}
            onChange={nicknameChangeHandler}
            inputProps={{ style: { fontSize: 16 } }}
            InputLabelProps={{ style: { fontSize: 12 } }}
          />
        </Box>
        <span className="input_text">님의 2022년</span>
      </NicknameInputContainer>
      <QuestionsContainer>
        <QuestionFormContainer>
          <Title>장소</Title>
          <Question>1.올해 가장 기억에 남는 장소는 어디인가요?</Question>
          <Box
            sx={{
              width: '90%',
              maxWidth: '90%',
              margin: '0 auto',
            }}
          >
            <TextField
              multiline
              rows={1}
              fullWidth
              name="a1"
              defaultValue={answer.post_content.a1}
              onChange={answerChangeHandler}
              required={true}
            />
          </Box>
          <Box
            sx={{
              width: '90%',
              maxWidth: '90%',
              margin: '0 auto',
              marginTop: '10px',
            }}
          >
            <TextField
              multiline
              rows={3}
              fullWidth
              name="d1"
              required={true}
              defaultValue={answer.post_content.d1}
              onChange={answerChangeHandler}
            />
          </Box>
        </QuestionFormContainer>
        <QuestionFormContainer>
          <Title>Flex</Title>
          <Question>2.올해 가장 기억에 남는 소비는 무엇인가요?</Question>

          <Box
            sx={{
              width: '90%',
              maxWidth: '90%',
              margin: '0 auto',
            }}
          >
            <TextField
              multiline
              rows={1}
              fullWidth
              label="간단 답변"
              name="a2"
              defaultValue={answer.post_content.a2}
              onChange={answerChangeHandler}
              required={true}
            />
          </Box>
          <Box
            sx={{
              width: '90%',
              maxWidth: '90%',
              margin: '0 auto',
              marginTop: '10px',
            }}
          >
            <TextField
              multiline
              rows={3}
              fullWidth
              label="상세 답변"
              name="d2"
              required={true}
              defaultValue={answer.post_content.d2}
              onChange={answerChangeHandler}
            />
          </Box>
        </QuestionFormContainer>
        <QuestionFormContainer>
          <Title>사람</Title>
          <Question>3.올해 내 삶에 가장 기여한 사람은 누구인가요?</Question>

          <Box
            sx={{
              width: '90%',
              maxWidth: '90%',
              margin: '0 auto',
            }}
          >
            <TextField
              multiline
              rows={1}
              fullWidth
              label="간단 답변"
              name="a3"
              defaultValue={answer.post_content.a3}
              onChange={answerChangeHandler}
              required={true}
            />
          </Box>
          <Box
            sx={{
              width: '90%',
              maxWidth: '90%',
              margin: '0 auto',
              marginTop: '10px',
            }}
          >
            <TextField
              multiline
              rows={3}
              fullWidth
              label="상세 답변"
              name="d3"
              required={true}
              defaultValue={answer.post_content.d3}
              onChange={answerChangeHandler}
            />
          </Box>
        </QuestionFormContainer>
        <QuestionFormContainer>
          <Title>나</Title>
          <Question>4.올해 나를 사로잡은 감정은 무엇인가요?</Question>

          <Box
            sx={{
              width: '90%',
              maxWidth: '90%',
              margin: '0 auto',
            }}
          >
            <TextField
              multiline
              rows={1}
              fullWidth
              label="간단 답변"
              name="a4"
              defaultValue={answer.post_content.a4}
              onChange={answerChangeHandler}
              required={true}
            />
          </Box>
          <Box
            sx={{
              width: '90%',
              maxWidth: '90%',
              margin: '0 auto',
              marginTop: '10px',
            }}
          >
            <TextField
              multiline
              rows={3}
              fullWidth
              label="상세 답변"
              name="d4"
              required={true}
              defaultValue={answer.post_content.d4}
              onChange={answerChangeHandler}
            />
          </Box>
        </QuestionFormContainer>
        <QuestionFormContainer>
          <Title>콘텐츠</Title>
          <Question>올해 인상 깊었던 콘텐츠는 무엇인가요?</Question>

          <Box
            sx={{
              width: '90%',
              maxWidth: '90%',
              margin: '0 auto',
            }}
          >
            <TextField
              multiline
              rows={1}
              fullWidth
              label="간단 답변"
              name="a5"
              defaultValue={answer.post_content.a5}
              onChange={answerChangeHandler}
              required={true}
            />
          </Box>
          <Box
            sx={{
              width: '90%',
              maxWidth: '90%',
              margin: '0 auto',
              marginTop: '10px',
            }}
          >
            <TextField
              multiline
              rows={3}
              fullWidth
              label="상세 답변"
              name="d5"
              required={true}
              defaultValue={answer.post_content.d5}
              onChange={answerChangeHandler}
            />
          </Box>
        </QuestionFormContainer>
        <QuestionFormContainer>
          <Title>도전</Title>
          <Question>올해 도전한 것은 무엇인가요?</Question>

          <Box
            sx={{
              width: '90%',
              maxWidth: '90%',
              margin: '0 auto',
            }}
          >
            <TextField
              multiline
              rows={1}
              fullWidth
              label="간단 답변"
              name="a6"
              defaultValue={answer.post_content.a6}
              onChange={answerChangeHandler}
              required={true}
            />
          </Box>
          <Box
            sx={{
              width: '90%',
              maxWidth: '90%',
              margin: '0 auto',
              marginTop: '10px',
            }}
          >
            <TextField
              multiline
              rows={3}
              fullWidth
              label="상세 답변"
              name="d6"
              required={true}
              defaultValue={answer.post_content.d6}
              onChange={answerChangeHandler}
            />
          </Box>
        </QuestionFormContainer>
        <QuestionFormContainer>
          <Title>성취</Title>
          <Question>올해 성취한 것은 무엇인가요?</Question>

          <Box
            sx={{
              width: '90%',
              maxWidth: '90%',
              margin: '0 auto',
            }}
          >
            <TextField
              multiline
              rows={1}
              fullWidth
              label="간단 답변"
              name="a7"
              defaultValue={answer.post_content.a7}
              onChange={answerChangeHandler}
              required={true}
            />
          </Box>
          <Box
            sx={{
              width: '90%',
              maxWidth: '90%',
              margin: '0 auto',
              marginTop: '10px',
            }}
          >
            <TextField
              multiline
              rows={3}
              fullWidth
              label="상세 답변"
              name="d7"
              required={true}
              defaultValue={answer.post_content.d7}
              onChange={answerChangeHandler}
            />
          </Box>
        </QuestionFormContainer>
        <QuestionFormContainer>
          <Title>장소</Title>
          <Question>장소</Question>

          <Box
            sx={{
              width: '90%',
              maxWidth: '90%',
              margin: '0 auto',
            }}
          >
            <TextField
              multiline
              rows={1}
              fullWidth
              label="간단 답변"
              name="a8"
              defaultValue={answer.post_content.a8}
              onChange={answerChangeHandler}
              required={true}
            />
          </Box>
          <Box
            sx={{
              width: '90%',
              maxWidth: '90%',
              margin: '0 auto',
              marginTop: '10px',
            }}
          >
            <TextField
              multiline
              rows={3}
              fullWidth
              label="상세 답변"
              name="d8"
              required={true}
              defaultValue={answer.post_content.d8}
              onChange={answerChangeHandler}
            />
          </Box>
        </QuestionFormContainer>
        <QuestionFormContainer>
          <Title>너에게</Title>
          <Question>올해 함께한 사람들에게 한마디 해주세요.</Question>

          <Box
            sx={{
              width: '90%',
              maxWidth: '90%',
              margin: '0 auto',
              marginTop: '10px',
            }}
          >
            <TextField
              multiline
              rows={6}
              fullWidth
              label="상세 답변"
              name="a9"
              required={true}
              defaultValue={answer.post_content.a9}
              onChange={answerChangeHandler}
            />
          </Box>
        </QuestionFormContainer>
        <QuestionFormContainer>
          <Title>나에게</Title>
          <Question>나에게 한마디 해주세요.</Question>

          <Box
            sx={{
              width: '90%',
              maxWidth: '90%',
              margin: '0 auto',
              marginTop: '10px',
            }}
          >
            <TextField
              multiline
              rows={6}
              fullWidth
              label="상세 답변"
              name="a10"
              required={true}
              defaultValue={answer.post_content.a10}
              onChange={answerChangeHandler}
            />
          </Box>
        </QuestionFormContainer>
      </QuestionsContainer>
      <GlobalButton clickEvent={goToResult} text1="뒤로가기" text2="저장하기" />
    </WriteContainer>
  );
}

export default QuestionForm;
