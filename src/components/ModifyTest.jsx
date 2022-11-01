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
import { red } from '@material-ui/core/colors';

const QuestionFormContainer = styled.li`
  position: relative;
  width: 80%;
  /* height: 250px; */
  height: 260px;
  background-color: #fff;
  /* border: 2px solid orange;
  border-radius: 4px; */
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

// const SimpleInput = styled.input`
//   width: 90%;
//   height: 50px;
//   background-color: orange;
//   border: none;
//   font-size: 18px;
//   padding: 10px;

//   &:focus {
//     outline: none;
//   }

//   @media all and (max-width: 380px) {
//     height: 30px;
//   }
// `;

// const DetailInput = styled.textarea`
//   width: 90%;
//   height: 100px;
//   margin-top: 10px;
//   background-color: orange;
//   resize: none;
//   border: none;
//   font-size: 18px;
//   padding: 10px;

//   &:focus {
//     outline: none;
//   }

//   @media all and (max-width: 380px) {
//     height: 100px;
//   }
// `;

// const DetailAnwser = styled.textarea`
//   width: 90%;
//   height: 160px;
//   background-color: orange;
//   resize: none;
//   border: none;
//   font-size: 18px;
//   padding: 10px;

//   &:focus {
//     outline: none;
//   }

//   @media all and (max-width: 380px) {
//     height: 100px;
//   }
// `;

function QuestionForm({ img_change }) {
  // const imgInputRef = useRef();
  const dispatch = useDispatch();
  const { anwser } = useSelector((state) => state.post);
  const [anwsers, setAnwsers] = useState(anwser);
  // console.log(anwser, '대답!');
  console.log(anwsers.a1, 'a1');
  const {
    name,
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
    d9,
    d10,
  } = anwsers;

  const anwserChangeHandler = (event) => {
    setAnwsers({
      ...anwsers,
      [event.target.name]: event.target.value,
    });
    console.log(a1, d1, '체인지!');
  };

  const getPost = async () => {
    const request = await axios
      .get(`http://localhost:4000/posts/b`)
      .then((res) => {
        console.log(res.data.post.post_content);
        return res.data.post.post_content;
      });

    dispatch(readPost(request));
    // console.log(post.post_content.name);
  };

  const onUpdatePost = async (payload) => {
    await axios
      .post('http://localhost:4000/posts/1/edit', payload)
      .then((res) => {
        console.log(res.data.message);
        return res.data.message;
      })
      .catch((err) => console.log(err));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const body = {
      post_user: 'sdfsdf',
      post_content: {
        name,
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
        d9,
        d10,
      },
    };

    const request = onUpdatePost(body);
    dispatch(modifyPost(request));
  };

  const deleteApi = async () => {
    await axios.delete('http://localhost:4000/posts/6/delete').then((res) => {
      console.log(res.data.message);
      return res.data.message;
    });
  };

  const deleteP = () => {
    const request = deleteApi();
    dispatch(deletePost(request));
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <QuestionFormContainer>
        <Title>장소</Title>
        <Question>1.올해 가장 기억에 남는 장소는 어디인가요?</Question>
        {/* <SimpleInput
          name="a1"
          type="text"
          value={anwser.a1}
          onChange={anwser_change}
        />
        <DetailInput
          name="d1"
          required={true}
          value={anwser.d1}
          onChange={anwser_change}
        /> */}
        <button type="submit">수정!</button>
        <button onClick={deleteP}>삭제!</button>
        <Box
          sx={{
            width: '90%',
            maxWidth: '90%',
            margin: '0 auto',
          }}
        >
          <TextField
            rows={2}
            fullWidth
            name="a1"
            defaultValue={anwser.a1}
            onChange={anwserChangeHandler}
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
            defaultValue={anwser.d1}
            onChange={anwserChangeHandler}
          />
        </Box>
      </QuestionFormContainer>
      <QuestionFormContainer>
        <Title>Flex</Title>
        <Question>2.올해 가장 기억에 남는 소비는 무엇인가요?</Question>
        {/* <SimpleInput
          name="a2"
          type="text"
          value={anwser.a2}
          onChange={anwserChangeHandler}
        />
        <DetailInput
          name="d2"
          required={true}
          value={anwser.d2}
          onChange={anwserChangeHandler}
        /> */}
        <Box
          sx={{
            width: '90%',
            maxWidth: '90%',
            margin: '0 auto',
          }}
        >
          <TextField
            rows={2}
            fullWidth
            label="간단 답변"
            name="a2"
            value={anwser.a2}
            onChange={anwserChangeHandler}
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
            value={anwser.d2}
            onChange={anwserChangeHandler}
          />
        </Box>
      </QuestionFormContainer>
      <QuestionFormContainer>
        <Title>사람</Title>
        <Question>3.올해 내 삶에 가장 기여한 사람은 누구인가요?</Question>
        {/* <SimpleInput
          name="a3"
          type="text"
          value={anwser.a3}
          onChange={anwserChangeHandler}
        />
        <DetailInput
          name="d3"
          required={true}
          value={anwser.d3}
          onChange={anwserChangeHandler}
        /> */}
        <Box
          sx={{
            width: '90%',
            maxWidth: '90%',
            margin: '0 auto',
          }}
        >
          <TextField
            rows={2}
            fullWidth
            label="간단 답변"
            name="a3"
            value={anwser.a3}
            onChange={anwserChangeHandler}
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
            value={anwser.d3}
            onChange={anwserChangeHandler}
          />
        </Box>
      </QuestionFormContainer>
      <QuestionFormContainer>
        <Title>나</Title>
        <Question>4.올해 나를 사로잡은 감정은 무엇인가요?</Question>
        {/* <SimpleInput
          name="a4"
          type="text"
          value={anwser.a4}
          onChange={anwserChangeHandler}
        />
        <DetailInput
          name="d4"
          required={true}
          value={anwser.d4}
          onChange={anwserChangeHandler}
        /> */}
        <Box
          sx={{
            width: '90%',
            maxWidth: '90%',
            margin: '0 auto',
          }}
        >
          <TextField
            rows={2}
            fullWidth
            label="간단 답변"
            name="a4"
            value={anwser.a4}
            onChange={anwserChangeHandler}
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
            value={anwser.d4}
            onChange={anwserChangeHandler}
          />
        </Box>
      </QuestionFormContainer>
      <QuestionFormContainer>
        <Title>콘텐츠</Title>
        <Question>올해 인상 깊었던 콘텐츠는 무엇인가요?</Question>
        {/* <SimpleInput
          name="a5"
          type="text"
          value={anwser.a5}
          onChange={anwserChangeHandler}
        />
        <DetailInput
          name="d5"
          required={true}
          value={anwser.d5}
          onChange={anwserChangeHandler}
        /> */}
        <Box
          sx={{
            width: '90%',
            maxWidth: '90%',
            margin: '0 auto',
          }}
        >
          <TextField
            rows={2}
            fullWidth
            label="간단 답변"
            name="a5"
            value={anwser.a5}
            onChange={anwserChangeHandler}
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
            value={anwser.d5}
            onChange={anwserChangeHandler}
          />
        </Box>
      </QuestionFormContainer>
      <QuestionFormContainer>
        <Title>도전</Title>
        <Question>올해 도전한 것은 무엇인가요?</Question>
        {/* <SimpleInput
          name="a6"
          type="text"
          value={anwser.a6}
          onChange={anwserChangeHandler}
        />
        <DetailInput
          name="d6"
          required={true}
          value={anwser.d6}
          onChange={anwserChangeHandler}
        /> */}
        <Box
          sx={{
            width: '90%',
            maxWidth: '90%',
            margin: '0 auto',
          }}
        >
          <TextField
            rows={2}
            fullWidth
            label="간단 답변"
            name="a6"
            value={anwser.a6}
            onChange={anwserChangeHandler}
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
            value={anwser.d6}
            onChange={anwserChangeHandler}
          />
        </Box>
      </QuestionFormContainer>
      <QuestionFormContainer>
        <Title>성취</Title>
        <Question>올해 성취한 것은 무엇인가요?</Question>
        {/* <SimpleInput
          name="a7"
          type="text"
          value={anwser.a7}
          onChange={anwserChangeHandler}
        />
        <DetailInput
          name="d7"
          required={true}
          value={anwser.d7}
          onChange={anwserChangeHandler}
        /> */}
        <Box
          sx={{
            width: '90%',
            maxWidth: '90%',
            margin: '0 auto',
          }}
        >
          <TextField
            rows={2}
            fullWidth
            label="간단 답변"
            name="a7"
            value={anwser.a7}
            onChange={anwserChangeHandler}
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
            value={anwser.d7}
            onChange={anwserChangeHandler}
          />
        </Box>
      </QuestionFormContainer>
      <QuestionFormContainer>
        <Title>장소</Title>
        <Question>장소</Question>
        {/* <SimpleInput
          name="a8"
          type="text"
          value={anwser.a8}
          onChange={anwserChangeHandler}
        />
        <DetailInput
          name="d8"
          required={true}
          value={anwser.d8}
          onChange={anwserChangeHandler}
        /> */}
        <Box
          sx={{
            width: '90%',
            maxWidth: '90%',
            margin: '0 auto',
          }}
        >
          <TextField
            rows={2}
            fullWidth
            label="간단 답변"
            name="a8"
            value={anwser.a8}
            onChange={anwserChangeHandler}
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
            value={anwser.d8}
            onChange={anwserChangeHandler}
          />
        </Box>
      </QuestionFormContainer>
      <QuestionFormContainer>
        <Title>너에게</Title>
        <Question>올해 함께한 사람들에게 한마디 해주세요.</Question>
        {/* <DetailAnwser
          name="d9"
          required={true}
          value={anwser.d9}
          onChange={anwserChangeHandler}
        /> */}
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
            name="d9"
            required={true}
            value={anwser.d9}
            onChange={anwserChangeHandler}
          />
        </Box>
      </QuestionFormContainer>
      <QuestionFormContainer>
        <Title>나에게</Title>
        <Question>나에게 한마디 해주세요.</Question>
        {/* <DetailAnwser
          name="d10"
          required={true}
          value={anwser.d10}
          onChange={anwserChangeHandler}
        /> */}
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
            name="d10"
            required={true}
            value={anwser.d10}
            onChange={anwserChangeHandler}
          />
        </Box>
      </QuestionFormContainer>
      <Stack direction="row" alignItems="center" spacing={2} mt={1}>
        <Button variant="contained" component="label">
          <PhotoCamera />
          Upload
          <input
            hidden
            accept="image/*"
            multiple
            type="file"
            name="img"
            onChange={img_change}
          />
        </Button>
      </Stack>
    </form>
  );
}

export default QuestionForm;
