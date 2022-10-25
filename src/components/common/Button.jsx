import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BtnContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.background_color};
  margin-top: 10px;
`;

const CustomButtonOne = styled(Link)`
  width: 150px;
  height: 40px;
  position: absolute;
  bottom: 35px;
  left: 35px;
  text-decoration: none;
  background-color: ${(props) => props.main_color1};
  border: 2px solid ${(props) => props.main_color1};
  border-radius: 4px;
  color: #fff;
  font-size: 32px;
  text-align: center;

  transition: transform 0.15s ease-out;
  transform-style: preserve-3d;

  &:visited {
    color: #fff;
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: ${(props) => props.sub_color1};
    border-radius: inherit;
    box-shadow: 0 0 0 2px ${(props) => props.sub_color1};
    transform: translate3d(0, 0.45em, -1em);
  }

  &:hover {
    background-color: ${(props) => props.hover_color1};
    transform: translateY(0.25em);
    color: #333;
  }
`;

const CustomButtonTwo = styled(Link)`
  width: 150px;
  height: 40px;
  position: absolute;
  bottom: 35px;
  right: 35px;
  text-decoration: none;
  background-color: ${(props) => props.main_color2};
  border: 2px solid ${(props) => props.main_color2};
  border-radius: 4px;
  color: #fff;
  font-size: 32px;
  text-align: center;

  transition: transform 0.15s ease-out;
  transform-style: preserve-3d;

  &:visited {
    color: #fff;
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: ${(props) => props.sub_color2};
    border-radius: inherit;
    box-shadow: 0 0 0 2px ${(props) => props.sub_color2};
    transform: translate3d(0, 0.45em, -1em);
  }

  &:hover {
    background-color: ${(props) => props.hover_color2};
    transform: translateY(0.25em);
    color: #333;
  }
`;

function Button({
  background_color,
  main_color1,
  sub_color1,
  hover_color1,
  main_color2,
  sub_color2,
  hover_color2,
  text1,
  text2,
}) {
  return (
    <BtnContainer background_color={background_color}>
      <CustomButtonOne
        main_color1={main_color1}
        sub_color1={sub_color1}
        hover_color1={hover_color1}
      >
        {text1}
      </CustomButtonOne>
      <CustomButtonTwo
        main_color2={main_color2}
        sub_color2={sub_color2}
        hover_color2={hover_color2}
      >
        {text2}
      </CustomButtonTwo>
    </BtnContainer>
  );
}

export default Button;
