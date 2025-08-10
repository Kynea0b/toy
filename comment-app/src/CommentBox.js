import React, { useState } from 'react';

const CommentBox = ({ addComment }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      addComment(comment);
      setComment('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="コメントを入力"
      />
      <button type="submit">投稿</button>
    </form>
  );
};

export default CommentBox;
