const POST_READ = 'post/POST_READ';
const CREATE = 'post/CREATE';
const MODIFY = 'post/MODIFY';
const DELETE = 'post/DELETE';

export function readPost(payload) {
  // console.log('결과 조회!');
  return {
    type: POST_READ,
    payload,
  };
}
export function createPost(payload) {
  // console.log('포스트 작성!');
  return {
    type: CREATE,
    payload,
  };
}
export function modifyPost(payload) {
  // console.log('포스트 수정!');
  return {
    type: MODIFY,
    payload,
  };
}

export function deletePost(payload) {
  // console.log('포스트 삭제!');
  return {
    type: DELETE,
    payload,
  };
}
const initialState = {
  answer: {},
  posted: false,
  updated: null,
  deleted: null,
};
export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        posted: true,
        answer: { ...action.payload },
      };
    case POST_READ:
      return {
        ...state,
        posted: false,
        answer: { ...action.payload },
      };
    case MODIFY:
      return {
        ...state,
        updated: action.payload,
      };
    case DELETE:
      return {
        ...state,
        answer: {},
        posted: false,
        deleted: action.payload,
      };
    default:
      return state;
  }
}
