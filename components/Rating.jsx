import React, {useState} from 'react'
import ReactStars from 'react-rating-stars-component'
import {FaStar} from "react-icons/fa"


const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      <p>Please rate the paper with regards to usefullness:</p>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <input
              type = "radio"
              name="rating"
              value={ratingValue}
              onClick = {() => setRating(ratingValue)}
            />
            <FaStar
              className="star"
              color = {ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />  
          </label>
        )
      })}
      <p>Rating is {rating}</p>
    </div>
  )
}

export default StarRating