import styled from 'styled-components';
import React, { useState, useEffect, useRef } from 'react';

const AnswerBlock = styled.div`
  background-color: #e19552;
  display: flex;
`;

const Answer = styled.p`
  color: white;
  font-size: 1.5rem;
  text-align: center;
  margin: 1rem;
`;

const AnswerComponent = ({ postId, postContent }) => {
  return (
    <AnswerBlock>
      <Answer>{postContent}</Answer>
    </AnswerBlock>
  );
};

export default AnswerComponent;
