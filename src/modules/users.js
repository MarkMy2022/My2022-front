const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';

export function login(loginInfo, posted) {
  return {
    type: LOGIN,
    id: loginInfo.id,
    name: loginInfo.kakao_account.profile.nickname,
    posted,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

const initState = {
  userId: '',
  userName: '',
  isLogin: false,
  havePost: false,
};

export default function usersReducer(state = initState, action) {
  switch (action.type) {
    // login 함수가 dipatch 에 의해 전달 되면 백엔드 서로 부터 받은 email, nickname 정보를 세팅하고
    // 제일 중요한 isLogin 값을 true 로 변경, 해당 값은 Header 및 Item 페이지에서 로그인 여부를 판단하는
    // 값이 되어 해당 값에 따라 조건부 처리
    case LOGIN:
      return {
        ...state,
        userId: action.id,
        userName: action.name,
        isLogin: true,
        havePost: action.posted,
      };
    case LOGOUT:
      return {
        ...state,
        userId: '',
        userName: '',
        isLogin: false,
        havePost: false,
      };
    default:
      return state;
  }
}
