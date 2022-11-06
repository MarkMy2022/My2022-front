import React, { useEffect } from 'react';

import Header from '../components/common/Header';
import Result from '../components/Result';
// import CommentBoard from '../components/CommentBoard';
// import CommentForm from '../components/CommentForm';
import { useParams, Link } from 'react-router-dom';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { readPost } from '../modules/post';

export default function ResultPage() {
  const params = useParams();

  const dispatch = useDispatch();
  const { answer, posted } = useSelector((state) => state.post);
  const getPost = async () => {
    await axios
      .get(`http://localhost:4000/posts/${params.userId}`)
      .then((res) => {
        dispatch(readPost(res.data.post));
        return res.data.post;
      });
  };

  useEffect(() => {
    if(!posted) getPost();
  }, []);

  return (
    <>
      <Header />
      {answer.post_content ? (
        <>
          <Result />
        </>
      ) : null }
    </>
  );
}
