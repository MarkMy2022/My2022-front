import React from 'react';
import styled from 'styled-components';
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
        <Title>사람</Title>
        <Question>1. 올해 가장 기억에 남는 사람은 누구인가요?</Question>
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
            value={answer.d1}
            onChange={answer_change}
          />
        </Box>
      </QuestionFormContainer>
      <QuestionFormContainer>
        <Title>장소</Title>
        <Question>2. 올해 가장 기억에 남는 장소는 어디인가요?</Question>
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
            value={answer.d2}
            onChange={answer_change}
          />
        </Box>
      </QuestionFormContainer>
      <QuestionFormContainer>
        <Title>소비</Title>
        <Question>3. 올해 가장 가치 있는 소비는 무엇인가요?</Question>
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
            value={answer.d3}
            onChange={answer_change}
          />
        </Box>
      </QuestionFormContainer>
      <QuestionFormContainer>
        <Title>음식</Title>
        <Question>4. 올해 가장 기억에 남는 음식은 무엇인가요?</Question>
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
            value={answer.d4}
            onChange={answer_change}
          />
        </Box>
      </QuestionFormContainer>
      <QuestionFormContainer>
        <Title>콘텐츠</Title>
        <Question>5. 올해 인상 깊었던 콘텐츠는 무엇인가요?</Question>
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
            value={answer.d5}
            onChange={answer_change}
          />
        </Box>
      </QuestionFormContainer>
      <QuestionFormContainer>
        <Title>도전</Title>
        <Question>6. 올해 도전한 것은 무엇인가요?</Question>
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
            value={answer.d6}
            onChange={answer_change}
          />
        </Box>
      </QuestionFormContainer>
      <QuestionFormContainer>
        <Title>성취</Title>
        <Question>7. 올해 성취한 것은 무엇인가요?</Question>
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
            value={answer.d7}
            onChange={answer_change}
          />
        </Box>
      </QuestionFormContainer>
      <QuestionFormContainer>
        <Title>감정</Title>
        <Question>8. 올해 나를 사로잡은 감정은 무엇인가요?</Question>
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
            value={answer.d8}
            onChange={answer_change}
          />
        </Box>
      </QuestionFormContainer>
      <QuestionFormContainer>
        <Title>너에게</Title>
        <Question>9. 올해 함께한 사람들에게 한마디 해주세요.</Question>
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
        <Question>10. 나에게 한마디 해주세요.</Question>
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
    </>
  );
}

export default QuestionForm;
