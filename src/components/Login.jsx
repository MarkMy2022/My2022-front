import React from 'react';
import styled from 'styled-components';
import Header from './common/Header';

// KAKAO 로그인 용
// CLIENT_ID 로 REST API 키 사용 필요
const KAKAO_CLIENT_ID = process.env.REACT_APP_KAKAO_CLIENT_ID;
const KAKAO_REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

export default function Login() {
  const LoginContainer = styled.div`
    padding: 1rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
  `;

  function LoginBtn() {
    const LoginButton = styled.button`
      width: 90%;
      position: relative;
      font-weight: bold;
      border-radius: 10px;
      padding: 1rem;
      margin-top: 2rem;
      margin: auto;
      cursor: pointer;
      border: solid 0.5px;
      border-color: #c8c8c8;
      display: flex;
      align-items: center;
      justify-content: center;
    `;
    // 직접 만든거
    return (
      <div
        className="LoginBox"
        style={{
          padding: '1rem',
          margin: '2rem',
          width: '100%',
        }}
      >
        <a href={KAKAO_AUTH_URL}>
          <img
            src="img/카카오로그인.png"
            alt="카카오로그인"
            style={{ width: '100%' }}
          />
        </a>
      </div>
    );
  }
  function HomeImg() {
    return <img alt="peopleimg" src="img/home.png" width={'90%'} />;
  }

  return (
    <LoginContainer>
      <Header />
      <a href="/">
        <img
          src="img/logo.png"
          alt="logo"
          style={{ width: '70%', margin: '5% 0' }}
        />
      </a>
      <HomeImg />
      <LoginBtn />
    </LoginContainer>
  );
}
