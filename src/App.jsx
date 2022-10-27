import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import ModifyPage from './pages/ModifyPage';
import WritePage from './pages/WritePage';
import ResultPage from './pages/ResultPage';
import ResultModePage from './pages/ResultModePage';

function App() {
  // App.js가 렌더링될 때 이 함수가 사용자의 뷰포트 높이를 계산해주고 그 값을 --vw, --vh 라는 css 변수에 저장해줌(최상위 css에서 사용)
  const setScreenSize = () => {
    // let vw = window.innerWidth * 0.01;
    // let vh = window.innerHeight * 0.01;
    // document.documentElement.style.setProperty('--vw', `${vw}px`);
    // document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    setScreenSize();
  });

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/resultmode" element={<ResultModePage />} />
        <Route path="/modify" element={<ModifyPage />} />
      </Routes>
    </>
  );
}

export default App;
