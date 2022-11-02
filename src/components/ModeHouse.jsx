import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { readPost } from '../modules/post';
import axios from 'axios';

export default function ModeNight() {
  const dispatch = useDispatch();
  const [dataList, setDataList] = useState({});
  const { answer } = useSelector((state) => state.post);

  const getPost = async () => {
    console.log('리덕스', answer);
    const request = await axios
      .get(`http://localhost:4000/posts/2`)
      .then((res) => {
        console.log(answer.name);
        setDataList(res.data.post);
        return res.data.post.post_content;
      });
    dispatch(readPost(request));
  };

  useEffect(() => {
    console.log('야');
    getPost();
  }, []);

  const TextBox = styled.div`
    border-radius: 2px;
    font-size: 1rem;
    /* background-color: #ffffff; */
    background-image: url('img/modeHouse.png');
    background-size: cover;
    /* background-size: contain; */
    background-repeat: no-repeat;
    width: 90%;
    /* height: 1000px; */
    text-align: center;
    margin: auto;
    padding: 3rem;
    word-break: keep-all;
    color: #fff;
    font-family: 'GongGothicMedium';
    line-height: 1.8rem;
    top: 0%;
  `;

  function TextList() {
    return (
      <>
        <div style={{ padding: '1.5rem' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <p
              style={{
                fontSize: '1.5rem',
              }}
            >
              {answer.name}님의
            </p>
            <p
              style={{
                color: '#FFCD4A',
                paddingLeft: '0.5rem',
                fontSize: '2rem',
              }}
            >
              2022년
            </p>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <p>1. 올해 가장 기억에 남는 사람은?</p>
          <p style={{ color: '#FFCD4A', paddingLeft: '0.5rem' }}>{answer.a1}</p>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <p>2. 올해 가장 기억에 남는 장소는?</p>
          <p style={{ color: '#FFCD4A', paddingLeft: '0.5rem' }}>{answer.a2}</p>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <p>3. 올해 가장 가치 있는 소비는?</p>
          <p style={{ color: '#FFCD4A', paddingLeft: '0.5rem' }}>{answer.a3}</p>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <p>4. 올해 가장 기억에 남는 음식은? </p>
          <p style={{ color: '#FFCD4A', paddingLeft: '0.5rem' }}>{answer.a4}</p>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <p>5. 올해 인상 깊었던 콘텐츠는? </p>
          <p style={{ color: '#FFCD4A', paddingLeft: '0.5rem' }}>{answer.a5}</p>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <p>6. 올해 도전한 것은? </p>
          <p style={{ color: '#FFCD4A', paddingLeft: '0.5rem' }}>{answer.a6}</p>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <p>7. 올해 성취한 것은? </p>
          <p style={{ color: '#FFCD4A', paddingLeft: '0.5rem' }}>{answer.a7}</p>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <p>8. 나를 사로잡은 감정은? </p>
          <p style={{ color: '#FFCD4A', paddingLeft: '0.5rem' }}>{answer.a8}</p>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <p>9. 올해 함께한 사람들에게 한마디 </p>
          <p style={{ color: '#FFCD4A', paddingLeft: '0.5rem' }}>{answer.a9}</p>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <p>10. 나에게 한마디 </p>
          <p style={{ color: '#FFCD4A', paddingLeft: '0.5rem' }}>
            {answer.a10}
          </p>
        </div>
      </>
    );
  }

  function Footer() {
    return (
      <>
        <div style={{ padding: '1rem' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <p
              style={{
                fontSize: '0.5rem',
              }}
            >
              My 2022
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <TextBox>
        <TextList />
        <Footer />
      </TextBox>
    </>
  );
}
