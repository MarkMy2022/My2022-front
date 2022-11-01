import React from 'react';
import { useEffect, useState } from 'react';
import Header from '../components/common/Header';
import Result from '../components/Result';
import CommentForm from '../components/CommentForm';
import CommentBoard from '../components/CommentBoard';

export default function ResultPage() {
  return (
    <>
      <Header></Header>
      <Result></Result>
      {/* <CommentForm></CommentForm>
      <CommentBoard></CommentBoard> */}
    </>
  );
}
