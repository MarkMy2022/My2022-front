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

import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { readPost } from '../modules/post';

export default function ResultModePage() {
  const dispatch = useDispatch();
  const { answer } = useSelector((state) => state.post);

  const getPost = async () => {
    const request = await axios
      .get(`http://localhost:4000/posts/a`)
      .then((res) => {
        return res.data.post;
      });
    dispatch(readPost(request));
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      {/* <ModeNight />
      <ModeStar />
      <ModeHouse />
      <ModeMoonF />
      <ModeMoonM />
      <ModeLight />
      <ModeSunset />
      <ModeSummary />
      <ModeDiary /> */}
      <Header></Header>
      <ResultMode />
    </>
  );
}
