import React from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';
import Write from '../components/Write';

const Base = styled.div`
  /* box-sizing: border-box; */
  width: 100vw;
  height: 100vh;
  /* padding: 0 35px; */
  /* margin: auto; */
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function WritePage() {
  return (
    <Base>
      <Write />
      <Button
        main_color1="#fae243"
        sub_color1="#fa9f1a"
        hover_color1="#faf000"
        text1="뒤로가기"
        text2="저장하기"
        background_color="darkgreen"
        main_color2="#fae243"
        sub_color2="#fa9f1a"
        hover_color2="#faf000"
      />
    </Base>
  );
}

export default WritePage;
