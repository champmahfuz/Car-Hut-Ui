import React, { useRef, useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { Rating, RatingView } from 'react-simple-star-rating';
import useAuth from '../../hooks/useAuth';
const Review = () => {
    const { user } = useAuth();
    const initialInfo = { customerName: user.displayName, email: user.email }
    const [rating, setRating] = useState(0) // initial rating value
    const [review, setReview] = useState(initialInfo);
    const reviewRef = useRef();

    const rate = { rating: rating }
    console.log(rate)
    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)
        // Some logic
    }
    const handleAddReview = e => {
        const comment = reviewRef.current.value;

        const newReview = {
            comment, ...initialInfo, ...rate
        };
        console.log(newReview)
        fetch('https://car-hut-server.onrender.com/usersreview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully Add review')
                    e.target.reset();
                }
            })

        e.preventDefault();
    }

    return (
        <div>
            <Form onSubmit={handleAddReview}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="email" name="email" value={user.displayName} readOnly placeholder="Enter email" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="email" name="email" value={user.email} readOnly placeholder="Enter email" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Write Something</Form.Label>
                    <Form.Control as="textarea"
                        placeholder="comment here"
                        style={{ height: '100px' }} ref={reviewRef} type="text" />
                </Form.Group>
                <div className='App'>
                    <Rating onClick={handleRating} ratingValue={rating} /* Rating Props */ />
                </div>
                <Button variant="primary" type="submit" value="Add">
                    Submite Review
                </Button>
            </Form>

        </div>
    );
};

export default Review;
