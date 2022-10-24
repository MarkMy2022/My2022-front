import React from 'react';
import styled from 'styled-components';
import Header from '../components/common/Header';
import Write from '../components/Write';

const Base = styled.div`
  /* box-sizing: border-box;
  padding: 0 35px;
  margin: auto;
  text-align: center; */

  /* width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
`;

function WritePage() {
  return (
    <Base>
      <Header />
      <Write />
    </Base>
  );
}

export default WritePage;
