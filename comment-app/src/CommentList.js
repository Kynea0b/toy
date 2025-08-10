import React from 'react';

const CommentList = ({ comments }) => {
  return (
    <div>
      <h3>コメント一覧</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
