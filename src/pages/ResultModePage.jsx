import React, { useEffect, useState } from 'react';
import Header from '../components/common/Header';
import ResultMode from '../components/ResultMode';
import ModeDiary from '../components/ModeDiary';
import ModeSummary from '../components/ModeSummary';
import ModeNight from '../components/ModeNight';
import ModeMoonF from '../components/ModeMoonF';
import ModeMoonM from '../components/ModeMoonM';
import ModeLight from '../components/ModeLight';
import ModeSunset from '../components/ModeSunset';
import ModeHouse from '../components/ModeHouse';

import ModeStar from '../components/ModeStar';

export default function ResultModePage() {
  return (
    <>
      <Header></Header>
      <ModeNight />
      <ModeStar />
      <ModeHouse />
      <ModeMoonF />
      <ModeMoonM />
      <ModeLight />
      <ModeSunset />
      <ModeSummary />
      <ModeDiary />
    </>
  );
}
