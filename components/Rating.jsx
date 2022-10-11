import React, {useState} from 'react'
import ReactStars from 'react-rating-stars-component'
import {FaStar} from "react-icons/fa"


const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      <p className='font-semibold py-1'>Please rate the paper with regards to usefulness:</p>
      <span className='flex py-1'>

      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
            <div className='flex px-2'>
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
              onMouseLeave={() => setHover(null)}/>    
   
          </div>
        )
      })}
      </span>

      <p className='font-semibold py-1'>Rating is {rating}</p>
    </div>
  )
}

export default StarRating
