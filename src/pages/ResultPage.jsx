import React, { useEffect, useState } from 'react';
import Header from '../components/common/Header';
import Result from '../components/Result';
import Diarymode from '../components/Diarymode';

export default function ResultPage() {
  return (
    <>
      <Header></Header>
      <Result></Result>
      <Diarymode />
    </>
  );
}
