import React from 'react';
import Diarymode from '../components/Diarymode';
import React, { useEffect, useState } from 'react';
import Header from '../components/common/Header';
import Result from '../components/Result';

export default function ResultPage() {
  return (
    <>
      <Diarymode />
      <Header></Header>
      <Result></Result>
    </>
  );
}
