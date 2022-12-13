import React, { useState } from 'react';

function RatingPopup() {
  const [rating, setRating] = useState(0);

  function handleRatingChange(newRating) {
    setRating(newRating);
  }

  return (
    <div style={{ textAlign: "center", fontSize: "24px" , marginTop: "50px", fontFamily: "Brush Script MT" }}>
      <h1 style={{paddingTop: 150, fontFamily: "Brush Script MT"}}>Please rate this product:</h1>
      {[1, 2, 3, 4, 5].map(value => (
        <button
          style={{fontFamily:"Impact"}}
          key={value}
          type="button"
          onClick={() => handleRatingChange(value)}
        >
          {value} stars
        </button>
      ))}
      <p>You have selected: {rating} stars</p>
    </div>
  );
}
export default RatingPopup;