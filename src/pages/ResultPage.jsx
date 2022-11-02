import React from 'react';

import Header from '../components/common/Header';
import Result from '../components/Result';
// import CommentBoard from '../components/CommentBoard';
import CommentForm from '../components/CommentForm';

export default function ResultPage() {
  return (
    <>
      <Header />
      <Result />
      <CommentForm />
    </>
  );
}
