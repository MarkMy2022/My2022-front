import React from "react";
import CommentItem from "./CommentItem";

export default function CommentBoard(props) {
  // console.log("commentBoard", props.commentList);

  return (
    <div>
      <h1>Comment List</h1>
      {props.commentList?.map((item) => (
        <CommentItem item={item} />
      ))}
    </div>
  );
}
