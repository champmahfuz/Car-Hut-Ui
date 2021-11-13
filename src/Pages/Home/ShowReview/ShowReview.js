import React, { useEffect, useState } from 'react';
import { Rating, RatingView } from 'react-simple-star-rating';
const ShowReview = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('https://murmuring-wave-81699.herokuapp.com/usersreview')
            .then(res => res.json())
            .then(data => setReview(data.slice(0, 6)));

    }, []);
    return (
        <div>
            <section>
                <div className="review">
                    <h1>Review</h1>
                    <div className="review-card-body">

                        {review.map(review =>
                            <div className="review-card">

                                <div className="review-info">
                                    <h1> {review.customerName}</h1>
                                    <p>{review.comment}</p>
                                    <RatingView ratingValue={review.rating} />
                                </div>
                            </div>

                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ShowReview;