import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../modules/users';
import axios from 'axios';

const KakaoRedirectHandler = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const CODE = new URL(window.location.href).searchParams.get('code');
    const GRANT_TYPE = 'authorization_code';
    // REST API 키를 입력 해야 합니다!
    const KAKAO_CLIENT_ID = '8c4fe302ab56aaa4483671505fe3adff';
    const KAKAO_REDIRECT_URI = 'http://localhost:3000/oauth/callback/kakao';

    // console.log(CODE);

    async function loginFetch() {
      const getInfo = async (info) => {
        const request = await axios
          .get(`http://localhost:4000/posts/new/${info.id}`)
          .then((res) => {
            return res.data.posted;
          });
        if (request) {
          dispatch(login(info, true));
          navigate(`/result/${info.id}`);
        } else {
          dispatch(login(info, false));
          navigate('/write');
        }
      };

      const tokenResponse = await fetch(
        `https://kauth.kakao.com/oauth/token?grant_type=${GRANT_TYPE}&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&code=${CODE}`,
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
        }
      );

      if (tokenResponse.status === 200) {
        const tokenData = await tokenResponse.json();

        // console.log(tokenData);

        const userResponese = await fetch(`https://kapi.kakao.com/v2/user/me`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${tokenData.access_token}`,
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
        });

        if (userResponese.status === 200) {
          const userKaKaoInfo = await userResponese.json();
          // console.log(userKaKaoInfo);
          getInfo(userKaKaoInfo);
        } else {
          alert('카카오 로그인 회원 정보 획득 실패');
          navigate('/login');
        }
      } else {
        alert('카카오 로그인 토큰 발행 실패');
        navigate('/login');
      }
    }
    loginFetch();
  }, [dispatch, navigate]);
};

export default KakaoRedirectHandler;
