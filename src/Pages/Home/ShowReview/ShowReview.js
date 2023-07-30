import React, { useEffect, useState } from 'react';
import { Rating, RatingView } from 'react-simple-star-rating';
import './ShowReview.css';
const ShowReview = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('https://car-hut-server.onrender.com/usersreview')
            .then(res => res.json())
            .then(data => setReview(data.slice(0, 6)));

    }, []);
    return (
        <div>
            <section>
                <div className="review">
                    <h2>Review</h2>
                    <div className="review-card-body">

                        {review.map(review =>
                            <div className="review-card">

                                <div className="review-info">
                                    <h5>Name: {review.customerName}</h5>
                                    <p>Comment: {review.comment}</p>
                                    <RatingView ratingValue={review.rating} />
                                </div>
                            </div>


                        )
                        }
                    </div>
                </div>
            </section>
        </div >
    );
};

export default ShowReview;