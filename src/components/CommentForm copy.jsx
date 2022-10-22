import React from "react";
import { useState } from "react";
import CommentBoard from "./CommentBoard";

export default function CommentForm() {
  const [inputValue, setInputValue] = useState("");
  const [commentList, setCommentList] = useState([]);
  const addComment = () => {
    console.log("im here", inputValue);
    setCommentList([...commentList, inputValue]);
  };
  return (
    <main>
      {/* 댓글 추가 ㅇ, 닉네임, 비밀번호, 댓글수정, 댓글삭제 수정해야함 */}
      <input
        value={inputValue}
        type="text"
        placeholder="닉네임"
        style={{ width: 200 }}
      ></input>
      <input
        value={inputValue}
        type="text"
        placeholder="비밀번호"
        style={{ width: 200 }}
      ></input>

      <input
        value={inputValue}
        type="text"
        placeholder="댓글을 남겨주세요!"
        style={{ width: 400 }}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br />
      <button onClick={addComment}>추가</button>
      <CommentBoard commentList={commentList} />
    </main>
  );
}
