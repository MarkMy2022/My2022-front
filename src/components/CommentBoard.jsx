import React from "react";
import CommentItem from "./CommentItem";

// 댓글리스트!!
// (컴포넌트) 각 댓글들 보여줌! key값 넣어줘야함

export default function CommentBoard(props) {
  // console.log("commentBoard", props.commentList?.post_id);

  return (
    <div style={{width: '100%', padding: '1rem', marginTop: '2rem'}}>
      <h1 style={{ padding: "0.5rem", textAlign: "center" }}>댓글 목록</h1>
      {props.commentList?.map((item) => (
        <CommentItem item={item} getComment={props.getComment} />
      ))}
    </div>
  );
}
