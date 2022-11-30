import React from 'react'

import { Rating } from '@mui/material'

function ReviewsList({ review }) {
    const createdAt = (new Date(review.createdAt)).toLocaleString();
    console.log(createdAt)
    return (
        <li className='review-item'>
            <div className='poster-info-grp'>
                <p> {review.user.name} </p>
                <p style={{fontSize: '16px', color: '#555'}}> {review.user.email} </p>
            </div>

            <Rating name="read-only" value={review.rating} readOnly />
            {(review.review === 'No review') ? <p style={{fontStyle: 'italic'}}> {(review.review)} </p> : <p> {(review.review)} </p>}

            <small>Posted On: {createdAt} </small>
        </li>
    )
}

export default ReviewsList