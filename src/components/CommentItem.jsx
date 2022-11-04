import styled from 'styled-components';
import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';

// 각 댓글  틀
// 수정버튼!!!!!!!!!!!!!!!!
// 삭제 버튼 !!!!!!!!!!!!!1
// 이름+비번+내용 모두 입력해야 등록될 수 있도록
export default function CommentItem(props) {
  const { answer } = useSelector((state) => state.post);

  // 수정
  async function editComment(editComment) {
    const result = await fetch(
      `http://localhost:4000/posts/${answer.post_id}/${props.item.comment_id}/editComment`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editComment),
      }
    );
    if (result.status === 201) {
      props.getComment();
    } else throw new Error('상태 이상');
  }

  // 삭제
  async function delComment() {
    const result = await fetch(
      `http://localhost:4000/posts/${answer.post_id}/${props.item.comment_id}/delComment`,
      {
        method: 'DELETE',
      }
    );
    if (result.status === 200) {
      props.getComment();
    } else throw new Error('상태 이상');
  }

  const [content, setContent] = useState(props.item.content);
  const Wrap = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    text-align: left;
    flex-direction: column;
  `;
  const CommentItem = styled.div`
    width: 90%;
    height: auto;
    border-radius: 10px;
    padding: 1rem;
    margin: 0.4rem;
    background-color: #f4f2ef;
    display: flex;
    justify-content: space-between;
  `;

  const TextGroup = styled.div`
    margin-right: 1rem;
  `;

  function Button() {
    const BtnGroup = styled.ul`
      display: flex;
    `;
    const ModifyBtn = styled.button`
      font-size: 0.8rem;
      background-color: white;
      width: 2.5rem;
      height: 1.5rem;
      border: none;
      border-radius: 5px;
      margin-right: 0.2rem;
      cursor: pointer;
    `;
    const DeleteBtn = styled.button`
      font-size: 0.8rem;
      background-color: white;
      width: 2.5rem;
      height: 1.5rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    `;

    // 수정 버튼
    const handleModify = () => {
      const pwInput = prompt('비밀번호를 입력하세요.');
      if (pwInput === props.item.password) {
        modiDiv.current.style.display = 'block';
        reply.current.value = content;
      } else alert('비밀번호가 틀렸습니다.');
    };

    // 삭제 버튼
    const handelDelete = (comment) => {
      const pwInput = prompt('삭제하시겠습니까? 비밀번호를 입력하세요.');
      if (pwInput === props.item.password) {
        delComment();
      } else alert('비밀번호가 틀렸습니다.');
    };

    return (
      <>
        <BtnGroup>
          <ModifyBtn onClick={handleModify}>수정</ModifyBtn>
          <DeleteBtn onClick={handelDelete}>삭제</DeleteBtn>
        </BtnGroup>
      </>
    );
  }

  const reply = useRef();
  const modiDiv = useRef();
  const modify = () => {
    const comment = {
      content: reply.current.value,
    };
    editComment(comment);
    setContent(reply.current.value);
    modiDiv.current.style.display = 'none';
  };

  const ModiModifyBtn = styled.button`
    font-size: 0.8rem;
    background-color: #f5d1d1;
    width: 4.5rem;
    height: 1.5rem;
    border: none;
    border-radius: 5px;
    margin-top: 0.5rem;
    cursor: pointer;
  `;

  return (
    <>
      <Wrap>
        <CommentItem>
          <TextGroup>
            <p className="nickName" style={{ paddingBottom: '0.3rem' }}>
              {props.item.name}
            </p>
            <p className="content" style={{ wordBreak: 'break-word' }}>
              {props.item.content}
            </p>
          </TextGroup>
          <Button password={props.item.password} />
        </CommentItem>

        <div
          className="modify"
          style={{ display: 'none', width: '60%' }}
          ref={modiDiv}
        >
          <div
            className="modifybox"
            style={{
              display: 'flex',
              padding: '0.7rem',
              wordBreak: 'break-word',
              backgroundColor: '#ffeeee',

              borderRadius: '10px',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <textarea
              ref={reply}
              rows="3"
              placeholder="내용을 수정해주세요!"
              style={{
                outline: 'none',
                width: '100%',
                padding: '0.3rem',
                height: 'auto',
                resize: 'none',
              }}
            />

            <ModiModifyBtn onClick={modify}>수정 완료</ModiModifyBtn>
          </div>
        </div>
      </Wrap>
    </>
  );
}
