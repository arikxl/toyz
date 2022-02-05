import React from 'react';

const Rating = ({rating, reviewsCount}) => {
  return (
    <div>
        <h3>rating: {rating}({reviewsCount})</h3>
    </div>
  );
};

export default Rating;
