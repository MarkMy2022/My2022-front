import axios from 'axios';

const CREATE = 'post/CREATE';
// const READ = 'post/READ';
// const MODIFY = 'post/MODIFY';

export function createPost(payload) {
  const request = axios.post('url/posts/new', payload).then((res) => res.data);

  return {
    type: CREATE,
    payload: request,
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
        post: action.payload,
      };
    default:
      return state;
  }
}
