import React, { useState } from 'react';
import './LikeDislikeButton.css';

const LikeDislikeButton = ({likeNumber, disLikeNumber}) => {


  const [likeCount, setLikeCount] = useState(likeNumber)
  const [clickedLike, setClickedLike] = useState(false)

  const [disLikeCount, setDisLikeCount] = useState(disLikeNumber)
  const [clickedDisLike, setClickedDisLike] = useState(false)


  const increaseLikeCount = () => {
    if(clickedLike === false){
      setLikeCount(prevCount => prevCount + 1)
      setClickedLike(true)

      if(clickedDisLike){
        setClickedDisLike(false);
        setDisLikeCount(prevCount => prevCount - 1)
      }
    }
    else {
      setLikeCount(prevCount => prevCount - 1)
      setClickedLike(false)
    }
  }

  const increaseDislikeCount = () => {

      if(clickedDisLike === false){
        setDisLikeCount(prevCount => prevCount + 1)
        setClickedDisLike(true);

        if(clickedLike){
          setClickedLike(false);
          setLikeCount(prevCount => prevCount - 1)

        }
      }
      else{
        setDisLikeCount(prevCount => prevCount - 1)
        setClickedDisLike(false);
      }
    
  }
  
  return(
    <div>
     <button className={`button likeButton ${clickedLike ? "likeButtonActive" : ""}`} onClick={increaseLikeCount}> Like | {likeCount}</button>
     <button className={`button disLikeButton ${clickedDisLike ? "disLikeButtonActive" : ""}`} onClick={increaseDislikeCount}> Dislike | {disLikeCount}</button>

    </div>
  ) 
}

export default LikeDislikeButton;