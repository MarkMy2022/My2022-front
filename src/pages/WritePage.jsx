import React from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';
import Header from '../components/common/Header';
import Write from '../components/Write';

const Base = styled.div`
  /* box-sizing: border-box;
  padding: 0 35px;
  margin: auto;
  text-align: center; */

  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function WritePage() {
  return (
    <Base>
      <Header />
      <Write />
      <Button
        main_color1="#0d47a1"
        sub_color1="#003c8f"
        hover_color1="#1565c0"
        text1="뒤로가기"
        background_color="darkgreen"
        main_color2="#c62828"
        sub_color2="#9a0007"
        hover_color2="#d32f2f"
        text2="저장하기"
      />
    </Base>
  );
}

export default WritePage;
