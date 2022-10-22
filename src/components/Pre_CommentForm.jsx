import React from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Button from "@mui/material/Button";
import styled from "styled-components";

export default function CommentForm() {
  const Container = styled.div`
    background-color: #225854;
    /* background-color: white; */
    height: 700px;
    margin-top: 20px;
    padding: 20px;
    /* display: flex;
    flex-direction: column; */
    /* align-items: center; */
    /* justify-content: center; */
  `;

  return (
    <Container fixed>
      <TextareaAutosize
        aria-label="empty textarea"
        placeholder="이름"
        style={{ width: 200 }}
      />

      <TextareaAutosize
        aria-label="empty textarea"
        placeholder="비밀번호"
        style={{ width: 200 }}
      />

      <TextareaAutosize
        aria-label="empty textarea"
        minRows={5}
        placeholder="내용을 입력해 주세요"
        style={{ width: 400 }}
      />
      <input
        placeholder="내용을 입력해 주세요"
        Row={5}
        style={{ width: 400 }}
      ></input>
      <Button variant="contained">댓글 남기기</Button>
    </Container>
  );
}
