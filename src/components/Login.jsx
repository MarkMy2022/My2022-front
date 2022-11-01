import React from 'react';
import styled from 'styled-components';
import NaverLogin from './NaverLogin';
import GoogleLogin from './GoogleLogin';

// KAKAO 로그인 용
// CLIENT_ID 로 REST API 키 사용 필요
const KAKAO_CLIENT_ID = '8c4fe302ab56aaa4483671505fe3adff';
const KAKAO_REDIRECT_URI = 'http://localhost:3000/oauth/callback/kakao';
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
      margin: 0.5rem;
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
        style={{ padding: '3rem', marginTop: '3rem', width: '90%' }}
      >
        <LoginButton
          style={{
            color: 'white',
            backgroundColor: '#03c75a',
          }}
        >
          <img
            src="img/naver.png"
            alt="네이버로그인"
            style={{ width: '8%', position: 'absolute', left: '10%' }}
          />
          네이버 간편로그인
        </LoginButton>

        <NaverLogin />

        <a href={KAKAO_AUTH_URL}>
          <LoginButton style={{ backgroundColor: ' #FEE500' }}>
            <img
              src="img/kakao.png"
              alt="카카오로그인"
              style={{ width: '8%', position: 'absolute', left: '10%' }}
            />
            카카오 간편로그인
          </LoginButton>
        </a>

        <a href="/login/auth/google" style={{ color: 'black' }}>
          <LoginButton
            style={{
              backgroundColor: '#ffffff',
            }}
          >
            <img
              src="img/google.png"
              alt="구글로그인"
              style={{ width: '8%', position: 'absolute', left: '10%' }}
            />
            구글 간편로그인
          </LoginButton>
        </a>
        <GoogleLogin />
      </div>
    );
  }

  return (
    <LoginContainer>
      <header>sssss</header>
      <a href="/">
        <img
          src="img/logo.png"
          alt="logo"
          style={{ width: '70%', marginTop: '20%' }}
        />
      </a>
      <LoginBtn />
      Login
      <NaverLogin />
    </LoginContainer>
  );
}
