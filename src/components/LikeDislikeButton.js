import React, { useState } from 'react'

const LikeDislikeButton = () => {

  const styles = {
    likeButton: {
      width: "200px",
      color: "red",
      margin: "10px",
      padding: "10px"
    },
    disLikeButton: {
      width: "200px",
      color: "blue",
      margin: "10px",
      padding: "10px"
    }
  }

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

  return(
    <div>
     <button style={styles.likeButton} onClick={increaseCount}> Like | {likeCount}</button>
     <button style={styles.disLikeButton} onClick={decreaseCount}> Dislike | {disLikeCount}</button>

    </div>
  ) 
}

export default LikeDislikeButton;