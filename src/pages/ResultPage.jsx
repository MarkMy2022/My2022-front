<<<<<<< Updated upstream
import React from 'react';
import Result from '../components/Result';

function ResultPage() {
  return <Result />;
=======
import React, { useEffect, useState } from 'react';
import TopHeader from '../components/common/TopHeader';
import Result3 from '../components/Result3';

export default function ResultPage() {
  return (
    <>
      <TopHeader></TopHeader>
      <Result3></Result3>
    </>
  );
>>>>>>> Stashed changes
}
