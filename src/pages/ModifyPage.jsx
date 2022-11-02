import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/common/Header';
import Modify from '../components/Modify';

export default function ModifyPage() {
  const { answer } = useSelector((state) => state.post);
  
  return (
    <>
      <Header />
      {answer.post_content ? (
        <Modify />
      ) : <><p>잘못된 접근입니다!</p><Link to='/'>HOME</Link></>}
    </>
  );
}
