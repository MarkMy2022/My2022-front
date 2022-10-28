import axios from 'axios';

const CREATE = 'post/CREATE';
const READ = 'post/READ';
// const MODIFY = 'post/MODIFY';

export function createPost(payload) {
  // const request = axios.post('url/posts/new', payload).then((res) => res.data);
  console.log('포스트 작성!');
  return {
    type: CREATE,
    payload,
  };
}

export function readPost() {
  // const request = axios.get('url/posts').then((res) => res.data);
  console.log('포스트 결과!');
  const request = {
    a1: '무야호~',
    d1: '그만큼 좋으시다는 거지~',
  };

  return {
    type: READ,
    payload: request,
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
