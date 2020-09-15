import React, { useState } from 'react';
import './LikeDislikeButton.css';

const LikeDislikeButton = () => {


  const [likeCount, setLikeCount] = useState(5)
  const [clickedLike, setClickedLike] = useState(false)

  const [disLikeCount, setDisLikeCount] = useState(8)
  const [clickedDisLike, setClickedDisLike] = useState(false)


  const increaseCount = () => {
    if(clickedLike === false){
      setLikeCount(prevCount => prevCount + 1)
      setClickedLike(true)
    }
    else {
      setLikeCount(prevCount => prevCount - 1)
      setClickedLike(false)
    }
  }

  const decreaseCount = () => {
    if(disLikeCount > 0){

      if(clickedDisLike === false){
        setDisLikeCount(prevCount => prevCount - 1)
        setClickedDisLike(true);
      }
      else{
        setDisLikeCount(prevCount => prevCount + 1)
        setClickedDisLike(false);
      }
    }
  }
  


  //disLikeButtonActive

  return(
    <div>
     <button className={`button likeButton ${clickedLike ? "likeButtonActive" : ""}`} onClick={increaseCount}> Like | {likeCount}</button>
     <button className={`button disLikeButton ${clickedDisLike ? "disLikeButtonActive" : ""}`} onClick={decreaseCount}> Dislike | {disLikeCount}</button>

    </div>
  ) 
}

export default LikeDislikeButton;