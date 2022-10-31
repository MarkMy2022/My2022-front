import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TitleNick from './TitleNick';

const ModifyResultContainer = styled.form`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`;

const ModifyContainer = styled.li`
  position: relative;
  width: 80%;
  height: 250px;
  background-color: #fff;
  border: 2px solid orange;
  border-radius: 4px;
  /* display: flex;
  justify-content: center; */
  /* align-items: flex-start; */
  margin-top: 50px;
  margin-bottom: 3rem;
  list-style: none;
`;

const Keyword = styled.div`
  position: absolute;
  width: 150px;
  height: 50px;
  top: -25px;
  left: calc(80% - 50%);
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  font-size: 24px;
  color: #fff;
  font-weight: 600;
`;

const Question = styled.h3`
  margin-top: 50px;
  margin-bottom: 2rem;
  margin-left: 10px;
  color: #333;
`;

const ModifyInput = styled.textarea`
  width: 300px;
  background-color: orange;
  resize: none;
  border: none;
  font-size: 1rem;
`;

const ButtonBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  padding-bottom: 2rem;
`;

const Button = styled.button`
  display: flex;
  padding: 0.2rem;
  margin: 1rem;
  background: none;
  border-style: none;
  border-radius: 10px;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #dfa446;
    cursor: pointer;
  }
`;

function Modify({ content }) {
  /* Start DB 스키마 */
  const [users, setUsers] = useState([
    {
      _id: 'user1',
      id: 'van1234',
      name: '홍길동',
      provider: 'naver',
      posted: true,
    },
  ]);
  const [posts, setPosts] = useState([
    {
      _id: 'post1',
      post_id: '1',
      post_user: 'van1234',
      post_content: [
        {
          name: '홍길동',
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
      ],
      post_comments: [
        {
          comment_id: 1,
          name: '나는 미미',
          pw: '1234',
          content: '잘 꾸미셨네요',
        },
        {
          comment_id: 2,
          name: '나는 관종',
          pw: '1234',
          content: '2023도 함께',
        },
      ],
    },
  ]);
  /* End DB 스키마 */

  /* 수정하기 버튼 이벤트 */
  /*   const onModifyBtn = async (e) => {
    e.preventDefault();
    console.log('수정하기 버튼 눌림');
  }; */

  const [data, setData] = useState([]);
  const dataId = useRef(0); // 어떤 DOM도 선택하지 않고 0이란 값만 들어있음.
  const [isEdit, setIsEdit] = useState(false); // 수정버튼 스위치 state

  // toggleIsEdit()이 호출이 되면 setIsEdit()이 되고 !(Not)연산을 통해 isEdit이 true면 false로, false면 true로 바꿔줌
  const toggleIsEdit = () => setIsEdit(!isEdit);

  // 수정하기 textarea값을 저장하기 위해 state를 만들어줌
  // state기본값을 content로 설정하여, 수정눌렀을때 작성했던 내용을 그대로 불러옴
  const [localContent, setLocalContent] = useState(posts.post_content);

  const localInput = useRef();

  const navigate = useNavigate();

  // 수정완료 눌렀을때
  // 해당 id값과, 새로바뀔 컨텐츠인 localContent를 전달
  const onModifyBtn = () => {
    if (localContent.length < 5) {
      localInput.current.focus();

      return;
    }

    if (window.confirm(`포스트를 정말 수정하시겠습니까?`)) {
      onEdit(posts.post_id, localContent); // 해당 id값과, 새컨텐츠 전달
      toggleIsEdit(); // 수정하고 나면 수정폼은 닫아줌'
      navigate('/result');
    }
  };

  // 수정완료 버튼 누를시 실행
  // 어떤 id를 가진 포스트를 수정할껀지를 targetId로 받고,
  // 어떻게 내용을 변경 시킬건지를 newContent으로 받음
  const onEdit = (targetId, newContent) => {
    setData(
      posts.map((post) => {
        return post.post_id === targetId // 전달한 id값이랑 posts에 있는 id값이랑 일치하는 id는 '?' 실행
          ? { ...post, content: newContent } // id가 일치하면 수정대상이니 수정한 내용으로 업데이트
          : posts; // 수정 대상이 아니면 그냥 원래 있던값 리턴
      })
    );
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <ModifyResultContainer onSubmit={onSubmit}>
      <div>
        {users.map(({ name, index }) => {
          return <TitleNick key={index} username={name}></TitleNick>;
        })}
      </div>
      <ModifyContainer>
        <Keyword>사람</Keyword>
        <Question>1. 올해 가장 기억에 남는 사람은 누구인가요?</Question>
        <div className="content">
          {
            <>
              <ModifyInput
                ref={localInput}
                value={localContent} // 수정내용 기본값 설정
                onChange={(e) => {
                  setLocalContent(e.target.value);
                }}
              />
              {/* <>{content}</> */}
            </>
          }
        </div>
        <div className="content">
          {
            <>
              <ModifyInput
                ref={localInput}
                value={localContent} // 수정내용 기본값 설정
                onChange={(e) => {
                  setLocalContent(e.target.value);
                }}
              />
            </>
          }
        </div>
      </ModifyContainer>

      <ModifyContainer>
        <Keyword>장소</Keyword>
        <Question>2. 올해 가장 기억에 남는 장소는 어디인가요?</Question>
        <ModifyInput
          type="text"
          name="a1"
          value="간단 답변"
          placeholder="간단 답변을 적어주세요"
        />
        <ModifyInput>상세 답변</ModifyInput>
      </ModifyContainer>

      <ModifyContainer>
        <Keyword>소비</Keyword>
        <Question>3. 올해 가장 가치 있는 소비는 무엇인가요?</Question>
        <ModifyInput
          type="text"
          name="a1"
          value="간단 답변"
          placeholder="간단 답변을 적어주세요"
        />
        <ModifyInput
          type="text"
          name="d1"
          value="상세 답변"
          placeholder="상세 답변을 적어주세요"
        />
      </ModifyContainer>

      <ModifyContainer>
        <Keyword>음식</Keyword>
        <Question>4. 올해 가장 기억에 남는 음식은 무엇인가요?</Question>
        <ModifyInput
          type="text"
          name="a1"
          value="간단 답변"
          placeholder="간단 답변을 적어주세요"
        />
        <ModifyInput
          type="text"
          name="d1"
          value="상세 답변"
          placeholder="상세 답변을 적어주세요"
        />
      </ModifyContainer>

      <ModifyContainer>
        <Keyword>콘텐츠</Keyword>
        <Question>5. 올해 인상 깊었던 콘텐츠는 무엇인가요?</Question>
        <ModifyInput
          type="text"
          name="a1"
          value="간단 답변"
          placeholder="간단 답변을 적어주세요"
        />
        <ModifyInput
          type="text"
          name="d1"
          value="상세 답변"
          placeholder="상세 답변을 적어주세요"
        />
      </ModifyContainer>

      <ModifyContainer>
        <Keyword>도전</Keyword>
        <Question>6. 올해 도전한 것은 무엇인가요?</Question>
        <ModifyInput
          type="text"
          name="a1"
          value="간단 답변"
          placeholder="간단 답변을 적어주세요"
        />
        <ModifyInput
          type="text"
          name="d1"
          value="상세 답변"
          placeholder="상세 답변을 적어주세요"
        />
      </ModifyContainer>

      <ModifyContainer>
        <Keyword>성취</Keyword>
        <Question>7. 올해 성취한 것은 무엇인가요?</Question>
        <ModifyInput
          type="text"
          name="a1"
          value="간단 답변"
          placeholder="간단 답변을 적어주세요"
        />
        <ModifyInput
          type="text"
          name="d1"
          value="상세 답변"
          placeholder="상세 답변을 적어주세요"
        />
      </ModifyContainer>

      <ModifyContainer>
        <Keyword>감정</Keyword>
        <Question>8. 올해 나를 사로잡은 감정은 무엇인가요?</Question>
        <ModifyInput
          type="text"
          name="a1"
          value="간단 답변"
          placeholder="간단 답변을 적어주세요"
        />
        <ModifyInput
          type="text"
          name="d1"
          value="상세 답변"
          placeholder="상세 답변을 적어주세요"
        />
      </ModifyContainer>

      <ModifyContainer>
        <Keyword>너에게,</Keyword>
        <Question>9. 올해 함께한 사람들에게 한마디 해주세요.</Question>
        <ModifyInput
          type="text"
          name="d1"
          value="상세 답변"
          placeholder="상세 답변을 적어주세요"
        />
      </ModifyContainer>

      <ModifyContainer>
        <Keyword>나에게,</Keyword>
        <Question>10. 나에게 한마디 해주세요.</Question>
        <ModifyInput
          type="text"
          name="d1"
          value="상세 답변"
          placeholder="상세 답변을 적어주세요"
        />
      </ModifyContainer>
      <ButtonBlock>
        <Button type="submit" className="modifyBtn" onClick={onModifyBtn}>
          <p href="" style={{ fontSize: '1.5rem' }}>
            수정 완료하기
          </p>
        </Button>
      </ButtonBlock>
    </ModifyResultContainer>
  );
}
export default Modify;
