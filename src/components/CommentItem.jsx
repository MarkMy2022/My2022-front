import React from "react";
import styled from "styled-components";

export default function CommentItem(props) {
  const Wrap = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
  `;
  const CommentItem = styled.p`
    display: flex;
    width: 400px;
    height: auto;
    /* border: 2px solid #fcf3d7; */
    border-radius: 10px;
    padding: 10px;
    margin: 5px;
    background-color: #f4f2ef;

    display: flex;
    justify-content: space-between;
  `;

  const BtnGroup = styled.ul`
    display: flex;
  `;

  const ModifyBtn = styled.button`
    background-color: white;
    width: 50px;
    height: 30px;
    border: none;
    border-radius: 5px;
  `;

  const DeleteBtn = styled.button`
    background-color: white;
    width: 50px;
    height: 30px;
    border: none;
    border-radius: 5px;
  `;

  return (
    <Wrap>
      <CommentItem>
        {props.item}
        <BtnGroup>
          <ModifyBtn>수정</ModifyBtn>|<DeleteBtn>삭제</DeleteBtn>
        </BtnGroup>
      </CommentItem>
    </Wrap>
  );
}
