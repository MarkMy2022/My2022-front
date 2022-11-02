import React, { useEffect } from 'react';

import Header from '../components/common/Header';
import Result from '../components/Result';
// import CommentBoard from '../components/CommentBoard';
import CommentForm from '../components/CommentForm';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { readPost } from '../modules/post';

export default function ResultPage() {
  const dispatch = useDispatch();
  const { answer } = useSelector((state) => state.post);
  const getPost = async () => {
    const request = await axios
      .get(`http://localhost:4000/posts/a`)
      .then((res) => {
        return res.data.post;
      });
    dispatch(readPost(request));
  };

  useEffect(() => {
    getPost();
  }, []);

  const params = useParams();
  const id = params.id;

  return (
    <>
      <Header />
      {answer.post_content ? (
        <>
          <Result user_id={id} /> <CommentForm />
        </>
      ) : null}
    </>
  );
}
