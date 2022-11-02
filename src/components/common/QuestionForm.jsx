import React from 'react';
import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const QuestionFormContainer = styled.li`
  position: relative;
  width: 80%;
  /* height: 50%; */
  background-color: #fff;
  margin-top: 8%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  width: 40%;
  padding: 0.5rem;
  text-align: center;
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

function QuestionForm({ answer, answer_change, img_change }) {
  return (
    <>
      <QuestionFormContainer>
        <Title>장소</Title>
        <Question>1.올해 가장 기억에 남는 장소는 어디인가요?</Question>
        {/* <SimpleInput
          name="a1"
          type="text"
          value={answer.a1}
          onChange={answer_change}
        /> */}
        {/* <DetailInput
          name="d1"
          required={true}
          value={answer.d1}
          onChange={answer_change}
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
            name="a1"
            value={answer.a1}
            onChange={answer_change}
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
            name="d1"
            required={true}
            value={answer.d1}
            onChange={answer_change}
          />
        </Box>
      </QuestionFormContainer>
      <QuestionFormContainer>
        <Title>Flex</Title>
        <Question>2.올해 가장 기억에 남는 소비는 무엇인가요?</Question>
        {/* <SimpleInput
          name="a2"
          type="text"
          value={answer.a2}
          onChange={answer_change}
        />
        <DetailInput
          name="d2"
          required={true}
          value={answer.d2}
          onChange={answer_change}
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
            value={answer.a2}
            onChange={answer_change}
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
            value={answer.d2}
            onChange={answer_change}
          />
        </Box>
      </QuestionFormContainer>
      <QuestionFormContainer>
        <Title>사람</Title>
        <Question>3.올해 내 삶에 가장 기여한 사람은 누구인가요?</Question>
        {/* <SimpleInput
          name="a3"
          type="text"
          value={answer.a3}
          onChange={answer_change}
        />
        <DetailInput
          name="d3"
          required={true}
          value={answer.d3}
          onChange={answer_change}
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
            value={answer.a3}
            onChange={answer_change}
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
            value={answer.d3}
            onChange={answer_change}
          />
        </Box>
      </QuestionFormContainer>
      <QuestionFormContainer>
        <Title>나</Title>
        <Question>4.올해 나를 사로잡은 감정은 무엇인가요?</Question>
        {/* <SimpleInput
          name="a4"
          type="text"
          value={answer.a4}
          onChange={answer_change}
        />
        <DetailInput
          name="d4"
          required={true}
          value={answer.d4}
          onChange={answer_change}
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
            value={answer.a4}
            onChange={answer_change}
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
            value={answer.d4}
            onChange={answer_change}
          />
        </Box>
      </QuestionFormContainer>
      <QuestionFormContainer>
        <Title>콘텐츠</Title>
        <Question>올해 인상 깊었던 콘텐츠는 무엇인가요?</Question>
        {/* <SimpleInput
          name="a5"
          type="text"
          value={answer.a5}
          onChange={answer_change}
        />
        <DetailInput
          name="d5"
          required={true}
          value={answer.d5}
          onChange={answer_change}
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
            value={answer.a5}
            onChange={answer_change}
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
            value={answer.d5}
            onChange={answer_change}
          />
        </Box>
      </QuestionFormContainer>
      <QuestionFormContainer>
        <Title>도전</Title>
        <Question>올해 도전한 것은 무엇인가요?</Question>
        {/* <SimpleInput
          name="a6"
          type="text"
          value={answer.a6}
          onChange={answer_change}
        />
        <DetailInput
          name="d6"
          required={true}
          value={answer.d6}
          onChange={answer_change}
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
            value={answer.a6}
            onChange={answer_change}
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
            value={answer.d6}
            onChange={answer_change}
          />
        </Box>
      </QuestionFormContainer>
      <QuestionFormContainer>
        <Title>성취</Title>
        <Question>올해 성취한 것은 무엇인가요?</Question>
        {/* <SimpleInput
          name="a7"
          type="text"
          value={answer.a7}
          onChange={answer_change}
        />
        <DetailInput
          name="d7"
          required={true}
          value={answer.d7}
          onChange={answer_change}
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
            value={answer.a7}
            onChange={answer_change}
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
            value={answer.d7}
            onChange={answer_change}
          />
        </Box>
      </QuestionFormContainer>
      <QuestionFormContainer>
        <Title>장소</Title>
        <Question>장소</Question>
        {/* <SimpleInput
          name="a8"
          type="text"
          value={answer.a8}
          onChange={answer_change}
        />
        <DetailInput
          name="d8"
          required={true}
          value={answer.d8}
          onChange={answer_change}
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
            value={answer.a8}
            onChange={answer_change}
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
            value={answer.d8}
            onChange={answer_change}
          />
        </Box>
      </QuestionFormContainer>
      <QuestionFormContainer>
        <Title>너에게</Title>
        <Question>올해 함께한 사람들에게 한마디 해주세요.</Question>
        {/* <DetailAnwser
          name="d9"
          required={true}
          value={answer.d9}
          onChange={answer_change}
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
            name="a9"
            required={true}
            value={answer.a9}
            onChange={answer_change}
          />
        </Box>
      </QuestionFormContainer>
      <QuestionFormContainer>
        <Title>나에게</Title>
        <Question>나에게 한마디 해주세요.</Question>
        {/* <DetailAnwser
          name="d10"
          required={true}
          value={answer.d10}
          onChange={answer_change}
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
            name="a10"
            required={true}
            value={answer.a10}
            onChange={answer_change}
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
    </>
  );
}

export default QuestionForm;
