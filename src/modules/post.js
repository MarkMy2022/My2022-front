// import axios from 'axios';

const READ = 'post/READ';
const CREATE = 'post/CREATE';
// const MODIFY = 'post/MODIFY';

// 추후 async 처리 할 것
export function readPost() {
  // const request = axios.get('url/posts').then((res) => res.data);
  console.log('포스트 결과!');
  const response = {
    a1: '무야호1~',
    d1: '그만큼 좋으시다는 거지1~',
    a2: '무야호2~',
    d2: '그만큼 좋으시다는 거지2~',
    a3: '무야호3~',
    d3: '그만큼 좋으시다는 거지3~',
    a4: '무야호4~',
    d4: '그만큼 좋으시다는 거지4~',
    a5: '무야호5~',
    d5: '그만큼 좋으시다는 거지5~',
    a6: '무야호6~',
    d6: '그만큼 좋으시다는 거지6~',
    a7: '무야호7~',
    d7: '그만큼 좋으시다는 거지7~',
    a8: '무야호8~',
    d8: '그만큼 좋으시다는 거지8~',
    d9: '그만큼 좋으시다는 거지9~',
    d10: '그만큼 좋으시다는 거지10~',
  };

  return {
    type: READ,
    payload: response,
  };
}

export function createPost(payload) {
  // const request = axios.post('url/posts/new', payload).then((res) => res.data);
  console.log('포스트 작성!');
  return {
    type: CREATE,
    payload,
  };
}

const initialState = {
  // post: [],
  post: {},
  result: {},
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        post: { ...action.payload },
      };
    case READ:
      return {
        ...state,
        result: { ...action.payload },
      };
    default:
      return state;
  }
}
