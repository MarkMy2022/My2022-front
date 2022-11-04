import styled from 'styled-components';
import React, { useEffect } from 'react';
import { useState, useRef } from 'react';
import CommentBoard from './CommentBoard';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { readPost } from '../modules/post';
import axios from 'axios';

// 댓글폼!
// 이름 , 비번, 내용 인풋!
// 그리고 아래 (컴포넌트) **댓글 리스트(커멘트 보드) 보임

export default function CommentForm() {
  const dispatch = useDispatch();
  // 리덕스로 불러온 것
  const { answer } = useSelector((state) => state.post);
  const commentList = answer.post_comments;

  const getPost = async () => {
    const request = await axios
      .get(`http://localhost:4000/posts/${answer.user_id}`)
      .then((res) => {
        return res.data.post;
      });
    dispatch(readPost(request));
  };

  // 댓글 등록 백엔드 연결
  async function postComment(newComment) {
    const result = await fetch(
      `http://localhost:4000/posts/${answer.post_id}/newComment`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newComment),
      }
    );
    if (result.status === 201) {
      getPost();
    } else throw new Error('상태 이상');
  }

  const addComment = () => {
    const newComment = {
      name: nameRef.current.value,
      password: passwordRef.current.value,
      content: contentRef.current.value,
    };
    postComment(newComment);
  };

  const nameRef = useRef();
  const passwordRef = useRef();
  const contentRef = useRef();

  const Container = styled.div`
    background-color: aliceblue;
    padding: 0.8rem;
    margin: 1rem auto 3rem;
    width: 95%;
  `;

  function CommentForm() {
    return (
      <>
        <p style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>댓글 남기기</p>
        <form style={{ display: 'flex' }}>
          <input
            ref={nameRef}
            type="text"
            placeholder="이름"
            required
            style={{
              width: '50%',

              margin: '0.2rem',
              outline: 'none',
              padding: '0.3rem',
            }}
          ></input>
          <input
            ref={passwordRef}
            type="password"
            placeholder="비밀번호"
            style={{
              width: '50%',
              margin: '0.2rem',
              outline: 'none',
              padding: '0.3rem',
            }}
          ></input>
        </form>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '0 0.2rem',
          }}
        >
          <textarea
            ref={contentRef}
            whitespace="pre-wrap"
            placeholder="댓글을 남겨주세요!"
            rows="3"
            style={{
              margin: '0.2rem',
              outline: 'none',
              width: '100%',
              padding: '0.3rem',
              height: '5rem',
              resize: 'none',
            }}
          />
          <Button
            variant="outlined"
            color="primary"
            onClick={addComment}
            style={{ margin: '0.2rem' }}
          >
            댓글 등록하기
          </Button>
        </div>
      </>
    );
  }

  return (
    <>
      {/* <Container>
        <CommentForm />
      </Container> */}
      <CommentBoard commentList={commentList} getComment={getPost} />
      <Container>
        <CommentForm />
      </Container>
    </>
  );
}
