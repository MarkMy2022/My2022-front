import React from "react";
import CommentItem from "./CommentItem";

// 댓글리스트!!
// (컴포넌트) 각 댓글들 보여줌! key값 넣어줘야함

export default function CommentBoard(props) {
  // console.log("commentBoard", props.commentList?.post_id);

  return (
    <div>
      <br />
      <h1 style={{ padding: "1rem", textAlign: "center" }}>Comment List</h1>
      {props.commentList?.map((item) => (
        <CommentItem item={item} getComment={props.getComment} />
      ))}
    </div>
  );
}
