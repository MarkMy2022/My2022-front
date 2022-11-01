import React, { useState } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const ModifyContainer = styled.form`
  width: 100%;
  border-radius: 2px;
  background-color: #fff;
`;

const ModifyQuestionContainer = styled.ul`
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
  width: 80%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  & .input_text {
    font-size: 32px;
    font-weight: 600;
  }
`;

const QuestionListContainer = styled.li`
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

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Modify4({ handleModify, modiData, selectedData }) {
  const classes = useStyles();
  const [nickname, setNickname] = useState('');

  /*   const handleModify = (updatedData) => {
    modifyData(modiData.id, updatedData, selectedData.slice(0));
  }; */

  const nicknameChangeHandler = (event) => {
    setNickname(event.target.value);
  };

  const [isModify, setIsModify] = useState(false);
  const [simple, setSimple] = useState(modi.simple);
  const [detail, setDetail] = useState(modi.detail);

  const combineData = () => {
    return {
      simple: simple,
      detail: detail,
    };
  };

  return (
    <ModifyContainer>
      <form
        className={classes.form}
        noValidate
        onSubmit={(event) => {
          event.preventDefault();
          var updatedData = combineData();
          handleModify(updatedData);
        }}
      >
        <ModifyQuestionContainer>
          <Description>
            <span>
              간단한 답변은 ‘명사’로 작성해주세요 (결과 페이지에는 간단한 답변만
              나와요😊)
            </span>
            <span>상세 답변은 자유롭게 작성해주세요</span>
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
          <QuestionListContainer>
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
                rows={2}
                fullWidth
                label="간단 답변"
                name="a1"
                defaultValue={modi.simple}
                /* value={simple} */
                onChange={(event) => setSimple(event.target.value)}
                required
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
                InputLabelProps={{
                  shrink: true,
                }}
                label="상세 답변"
                name="d1"
                /* value={detail} */
                defaultValue={modi.detail}
                onChange={(event) => setDetail(event.target.value)}
                required
              />
            </Box>
          </QuestionListContainer>

          <Button type="submit" color="primary" className={classes.submit}>
            수정 완료하기1
          </Button>
          <Button onClick={() => setIsModify(false)}>Back</Button>
          <Button
            onClick={() => {
              setIsModify(true);
            }}
          >
            수정 완료하기2
          </Button>
        </ModifyQuestionContainer>
      </form>
    </ModifyContainer>
  );
}
