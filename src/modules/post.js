// import axios from 'axios';
const POSTS_READ = 'post/POSTS_READ';
const POST_READ = 'post/POST_READ';
const CREATE = 'post/CREATE';
const MODIFY = 'post/MODIFY';
const DELETE = 'post/DELETE';
// export async function readPosts() {
//   const request = await axios
//     .get('http://localhost:4000/')
//     .then((res) => res.data);
//   console.log('포스트들 조회!');
//   return {
//     type: POSTS_READ,
//     payload: request,
//   };
// }
export function readPost(payload) {
  // const request = await axios
  //   .get(`http://localhost:4000/posts/${user_id}`)
  //   .then((res) => res.data.post);
  console.log('결과 조회!');
  return {
    type: POST_READ,
    payload,
  };
}
export function createPost(payload) {
  // const request = await axios
  //   .post('http://localhost:4000/posts/new', payload)
  //   .then((res) => res.data);
  console.log('포스트 작성!');
  return {
    type: CREATE,
    payload: payload,
  };
}
export function modifyPost(payload) {
  // const request = await axios
  //   .post(`http://localhost:4000/posts/${payload.post_id}/edit`, payload)
  //   .then((res) => res.data);
  console.log('포스트 수정!');
  return {
    type: MODIFY,
    payload,
  };
}

export function deletePost(payload) {
  // const request = axios
  //   .delete(`http://localhost:4000/posts/${post_id}/delete`)
  //   .then((res) => res.data);
  console.log('포스트 삭제!');
  return {
    type: DELETE,
    payload,
    // post_id,
  };
}
const initialState = {
  answer: {},
  // posts: [],
  posted: null,
  updated: null,
  deleted: null,
};
export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        posted: action.payload,
      };
    case POSTS_READ:
      return {
        ...state,
        posts: [...action.payload],
      };
    case POST_READ:
      return {
        ...state,
        answer: { ...action.payload },
      };
    case MODIFY:
      return {
        ...state,
        // answer: state.answer.map((answer) =>
        //   answer._id === action.payload._id ? action.payload : answer
        // ),
        updated: action.payload,
      };
    case DELETE:
      return {
        ...state,
        // answer: state.answer.filter((answer) => answer._id !== action.post_id),
        deleted: action.payload,
      };
    default:
      return state;
  }
}
