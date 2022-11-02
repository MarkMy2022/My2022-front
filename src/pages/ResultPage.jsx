import React from 'react';

import Header from '../components/common/Header';
import Result from '../components/Result';
// import CommentBoard from '../components/CommentBoard';
import CommentForm from '../components/CommentForm';
import { useParams } from 'react-router-dom';

export default function ResultPage() {
  const params = useParams();
  const id = params.id;

  return (
    <>
      <Header />
      <Result user_id={id} />
      <CommentForm />
    </>
  );
}
