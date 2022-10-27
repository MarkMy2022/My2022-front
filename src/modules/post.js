import axios from 'axios';

const CREATE = 'post/CREATE';
// const READ = 'post/READ';
// const MODIFY = 'post/MODIFY';

export function createPost(payload) {
  // const request = axios.post('url/posts/new', payload).then((res) => res.data);
  console.log('포스트 작성!');

  return {
    type: CREATE,
    payload,
  };
}

const initialState = {
  post: [],
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        post: [action.payload],
      };
    default:
      return state;
  }
}
