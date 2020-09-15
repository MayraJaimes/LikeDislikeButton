import React, { useState } from 'react'

const LikeDislikeButton = () => {

  const [likeCount, setLikeCount] = useState(5)
  const [disLikeCount, setDisLikeCount] = useState(8)


  const increaseCount = () => {
    setLikeCount(prevCount => prevCount + 1)
  }

  const decreaseCount = () => {
    if(disLikeCount > 0){
      setDisLikeCount(prevCount => prevCount - 1)
    }
  }

  return(
    <div>
     <button onClick={increaseCount}>{likeCount}</button>
     <button onClick={decreaseCount}>{disLikeCount}</button>

    </div>
  ) 
}

export default LikeDislikeButton;