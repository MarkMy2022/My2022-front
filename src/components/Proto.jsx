import React, { useState } from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";

const Base = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 500px;
  height: 700px;
  border-radius: 2px;
  background-image: url(""); // 여기에 이미지 경로를 적으셔야 합니다.
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
`;

// const CreateBtn = styled(Link)`
const CreateBtn = styled`
  width: 340px;
  height: 40px;
  position: absolute;
  bottom: 120px;
  left: 85px;
  text-decoration: none;
  background-color: #fae243;
  border: 2px solid #fae243;
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
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #fa9f1a;
    border-radius: inherit;
    box-shadow: 0 0 0 2px #fa9f1a;
    transform: translate3d(0, 0.45em, -1em);
  }

  &:hover {
    background-color: #faf000;
    transform: translateY(0.25em);
    color: #333;
  }
`;

// const ShareBtn = styled(Link)`
const ShareBtn = styled`
  width: 150px;
  height: 40px;
  position: absolute;
  bottom: 42px;
  left: 184px;
  text-decoration: none;
  background-color: #ce93d8;
  border: 2px solid #ce93d8;
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
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #9c27b0;
    border-radius: inherit;
    box-shadow: 0 0 0 2px #9c27b0;
    transform: translate3d(0, 0.45em, -1em);
  }

  &:hover {
    background-color: #ffc4ff;
    transform: translateY(0.25em);
    color: #333;
  }
`;

const Menu = styled.div`
  position: absolute;
  top: 10px;
  right: -250px;
  width: 300px;

  & > .menu {
    background-color: #fff;
    border-radius: 8px;
    position: absolute;
    top: 40px;
    right: 250px;
    width: 300px;
    height: 450px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  }

  & .menu.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  & .lists {
    margin-top: 50px;
    width: auto;
    list-style: none;
    padding: 0;
  }

  & .user_circle {
    font-size: 20px;
    color: lightgray;
    text-align: start;
    margin-top: 20px;
    margin-left: 20px;
    cursor: pointer;
  }

  & .list {
    font-size: 20px;
    color: #222;
    text-align: start;
    margin-top: 20px;
    margin-left: 20px;
  }

  & .intro {
    font-size: 16px;
    color: #222;
    text-align: start;
    margin-left: 20px;
    cursor: pointer;
  }

  & .inquiry {
    font-size: 16px;
    color: #222;
    text-align: start;
    margin-top: 20px;
    margin-left: 20px;
    cursor: pointer;
  }

  & hr {
    margin: 20px;
  }
`;

// const ListItm = styled(Link)`
const ListItm = styled`
  text-decoration: none;

  &:visited {
    color: #222;
  }
`;

const CancelBtn = styled(FaTimes)`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 24px;
  cursor: pointer;
`;
const UserCircle = styled(FaUserCircle)`
  font-size: 32px;
`;

const MenuBtn = styled(FaBars)`
  color: #fff;
  font-size: 32px;
  transition: box-shadow 0.4s ease;
  cursor: pointer;
`;

function Proto() {
  const [isActive, setIsActive] = useState(false);

  const onMenuActive = () => {
    setIsActive(!isActive);
  };

  const onClick = () => {
    alert("서비스 준비중 입니다!");
  };

  return (
    <Base>
      <Container>
        <Menu>
          <MenuBtn onClick={onMenuActive} />
          <nav className={`menu ${isActive ? "active" : "inactive"}`}>
            <CancelBtn onClick={onMenuActive} />
            <ul className="lists">
              <li className="user_circle">
                <UserCircle /> 로그인 하세요.
              </li>
              <li className="list">
                <ListItm to="/" onClick={onMenuActive}>
                  홈
                </ListItm>
              </li>
              <li className="list">
                <ListItm to="/mypage" onClick={onMenuActive}>
                  마이페이지
                </ListItm>
              </li>
              <hr />
              <li className="intro">나만의 시상식 소개</li>
              <li className="inquiry">문의 하기</li>
            </ul>
          </nav>
        </Menu>
        <CreateBtn onClick={onClick}>나만의 시상식 만들기</CreateBtn>
        <ShareBtn onClick={onClick}>공유하기</ShareBtn>
      </Container>
    </Base>
  );
}

export default Proto;
