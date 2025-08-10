import React, { useState } from 'react';
import './App.css';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

function App() {
  const [comments, setComments] = useState([]);

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div className="App">
      <h1>簡単なコメント投稿アプリ</h1>
      <CommentBox addComment={addComment} />
      <CommentList comments={comments} />
    </div>
  );
}

export default App;
