import React from 'react';
import LikeDislikeButton from './components/LikeDislikeButton'
import './App.css';

function App() {
  return (
    <div className="App">
    <div>
      <h3> Article Example 1</h3>    
      <LikeDislikeButton likeNumber={5} disLikeNumber={9}/>
    </div>
        
    <div>
    <h3> Article Example 2</h3>    
    <LikeDislikeButton likeNumber={2} disLikeNumber={7}/>
  </div>
    </div>
  );
}

export default App;
