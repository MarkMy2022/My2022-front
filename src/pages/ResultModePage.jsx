import React, { useEffect, useState } from 'react';
import Header from '../components/common/Header';
import ResultMode from '../components/ResultMode';
import ModeDiary from '../components/ModeDiary';
import ModeSummary from '../components/ModeSummary';

export default function ResultModePage() {
  return (
    <>
      <ModeSummary />
      <ModeDiary />
      <Header></Header>
      <ResultMode></ResultMode>
    </>
  );
}
