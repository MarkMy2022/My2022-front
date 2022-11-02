import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import { readPost } from '../modules/post';

const MyPageContainer = styled.div`
  width: 100%;
  border-radius: 2px;
  background-color: #fff;
`;

const PostsList = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 40%);
  gap: 10px;
`;

function MyPage() {
  const { anwser } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      await axios.get(`http://localhost:4000/posts/b`).then((res) => {
        console.log(res.data.post.post_content);
        return res.data.post.post_content;
      });
    }

    const request = fetchData();

    dispatch(readPost(request));
  }, [dispatch]);

  return (
    <MyPageContainer>
      <PostsList>{}</PostsList>
    </MyPageContainer>
  );
}

export default MyPage;
