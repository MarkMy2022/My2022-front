import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import ModifyPage from './pages/ModifyPage';
import WritePage from './pages/WritePage';
import ResultPage from './pages/ResultPage';
import ResultModePage from './pages/ResultModePage';
import KakaoRedirectHandler from './components/KakaoRedirectHandler';
import ModeChoosePage from './pages/ModeChoosePage';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/write" element={<WritePage />} />
        {/* <Route path="/result/:id" element={<ResultPage />} /> */}
        <Route path="/result" element={<ResultPage />} />
        <Route path="/resultmode" element={<ResultModePage />} />
        <Route path="/modify" element={<ModifyPage />} />
        <Route path="/modeChoose" element={<ModifyPage />} />
        <Route
          path="/oauth/callback/kakao"
          element={<KakaoRedirectHandler />}
        />
        {/* <Route
          path="/oauth/callback/naver"
          element={<NaverRedirectHandler />}
        />
        <Route
          path="/oauth/callback/google"
          element={<GoogleRedirectHandler />}
        /> */}
      </Routes>
    </>
  );
}

export default App;
