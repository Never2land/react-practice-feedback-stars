import React, { useState } from 'react';
import Star from './Star';

const Feedback = ({ numberOfStars }) => {
  const stars = new Array(numberOfStars).fill(true);
  const [ratings, setRatings] = useState(1);
  const [hoverRating, setHoverRating] = useState(0);

  const onClick = (rating) => {
    setRatings(rating);
  };
  return (
    <div className="container">
      {stars.map((star, idx) => (
        <Star
          onMouseEnter={() => setHoverRating(idx + 1)}
          onMouseLeave={() => setHoverRating(0)}
          starId={idx + 1}
          ratings={hoverRating || ratings}
          onClick={() => onClick(idx + 1)}
        />
      ))}
    </div>
  );
};

export default Feedback;
