import React from 'react';
import GoogleLogin from 'react-google-login';
import { useCallback } from 'react';

export default function GoogleLoginBtn() {
  const googleLogin = useCallback((response) => {
    const userInfo = {
      profileImg: response.profileObj.imageUrl,
      email: response.profileObj.email,
      name: response.profileObj.name,
    };
  }, []);

  return (
    <GoogleLogin
      clientId="492426253727-luats5v73amk8vj11c3vu8cj8v8sp0hm.apps.googleusercontent.com"
      buttonText="구글 아이디로 로그인"
      onSuccess={googleLogin}
      onFailure={(res) => console.log(res)}
      cookiePolicy={'single_host_origin'}
    />
  );
}
