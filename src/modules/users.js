const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';
const POSTED = 'user/POSTED';

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

export function posted(payload) {
  return {
    type: POSTED,
    payload,
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
    case POSTED:
      return {
        ...state,
        havePost: action.payload,
      };
    default:
      return state;
  }
}
