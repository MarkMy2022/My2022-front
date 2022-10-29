//프론트엔드에서 몽고DB 연결 없을 때 테스트로 사용할 데이터

const userList = [
  {
    _id: '1',
    id: 'honghong',
    name: '궤도키드',
    provider: 'kakao',
    posted: 'true',
  },
  {
    _id: '2',
    id: 'ebulsok',
    name: '순봉씨',
    provider: 'google',
    posted: 'true',
  },
  {
    _id: '3',
    id: 'lkf290',
    name: 'soonsu',
    provider: 'naver',
    posted: 'false',
  },
];

const postList = [
  {
    /* "no": 1,
      "title": "첫번째 게시글입니다.",
      "content": "첫번째 게시글 내용입니다.",
      "createDate": "2020-10-25",
      "readCount": 6 */
    _id: 'post 고유 id',
    post_id: 1,
    post_user: 'honghong',
    post_content: {
      name: '글 작성자 이름',
      a1: '답변1',
      a2: '답변2',
      a3: '답변3',
      a4: '답변4',
      a5: '답변5',
      a6: '답변6',
      a7: '답변7',
      a8: '답변8',
      a9: '답변9',
      a10: '답변10',
      d1: '상세 답변1',
      d2: '상세 답변2',
      d3: '상세 답변3',
      d4: '상세 답변4',
      d5: '상세 답변5',
      d6: '상세 답변6',
      d7: '상세 답변7',
      d8: '상세 답변8',
    },
    post_comments: [
      {
        comment_id: 1,
        name: '댓글 작성자 이름1',
        pw: '댓글 패스워드',
        content: '댓글 내용',
      },
      {
        comment_id: 2,
        name: '댓글 작성자 이름2',
        pw: '댓글 패스워드',
        content: '댓글 내용',
      },
    ],
  },
  {
    /* "no": 1,
      "title": "첫번째 게시글입니다.",
      "content": "첫번째 게시글 내용입니다.",
      "createDate": "2020-10-25",
      "readCount": 6 */
    _id: 'post 고유 id',
    post_id: 1,
    post_user: 'ebulsok',
    post_content: {
      name: '글 작성자 이름',
      a1: '답변1',
      a2: '답변2',
      a3: '답변3',
      a4: '답변4',
      a5: '답변5',
      a6: '답변6',
      a7: '답변7',
      a8: '답변8',
      a9: '답변9',
      a10: '답변10',
      d1: '상세 답변1',
      d2: '상세 답변2',
      d3: '상세 답변3',
      d4: '상세 답변4',
      d5: '상세 답변5',
      d6: '상세 답변6',
      d7: '상세 답변7',
      d8: '상세 답변8',
    },
    post_comments: [
      {
        comment_id: 1,
        name: '댓글 작성자 이름1',
        pw: '댓글 패스워드',
        content: '댓글 내용',
      },
      {
        comment_id: 2,
        name: '댓글 작성자 이름2',
        pw: '댓글 패스워드',
        content: '댓글 내용',
      },
    ],
  },
  {
    /* "no": 1,
      "title": "첫번째 게시글입니다.",
      "content": "첫번째 게시글 내용입니다.",
      "createDate": "2020-10-25",
      "readCount": 6 */
    _id: 'post 고유 id',
    post_id: 1,
    post_user: 'lkf290',
    post_content: {
      name: '글 작성자 이름',
      a1: '답변1',
      a2: '답변2',
      a3: '답변3',
      a4: '답변4',
      a5: '답변5',
      a6: '답변6',
      a7: '답변7',
      a8: '답변8',
      a9: '답변9',
      a10: '답변10',
      d1: '상세 답변1',
      d2: '상세 답변2',
      d3: '상세 답변3',
      d4: '상세 답변4',
      d5: '상세 답변5',
      d6: '상세 답변6',
      d7: '상세 답변7',
      d8: '상세 답변8',
    },
    post_comments: [
      {
        comment_id: 1,
        name: '댓글 작성자 이름1',
        pw: '댓글 패스워드',
        content: '댓글 내용',
      },
      {
        comment_id: 2,
        name: '댓글 작성자 이름2',
        pw: '댓글 패스워드',
        content: '댓글 내용',
      },
    ],
  },
];

const getPostByNo = (post_id) => {
  const array = postList.filter((x) => x.post_id == post_id);
  if (array.length == 1) {
    return array[0];
  }
  return null;
};

export { userList, postList, getPostByNo };
