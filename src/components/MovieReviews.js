// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => (
    <div className="review-list">
        {reviews.map(review => {
            <div>
                <h3>{review.headline}</h3>
                <h4>By :{review.byline}</h4>
                <p>{review.summary_short} </p>
            </div>
        })
            }
    </div>
)

export default MovieReviews