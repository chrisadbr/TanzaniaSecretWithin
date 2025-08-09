/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import { reviews } from '../data';
// import axios from 'axios';
import './Reviews.css';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
// import axios from 'axios';
// 
const Reviews = ({ autoslides = false, interval = 3000 }) => {
    const [curr, setCurr] = useState(0);
    const prev = () => setCurr(curr => curr === 0 ? reviews?.data.length - 1 : curr - 1)
    const next = () => setCurr(curr => curr === reviews?.data.length - 1 ? 0 : curr + 1)
    // 
    // const [reviews, setReviews] = useState({});
    // const url =  'https://api.content.tripadvisor.com/api/v1/lushoto/27451039/reviews';
    // const options = {
    //   method: 'GET',
    //   params: {key: '15084303C8784F44BD4C3E2D3C01151F', language: 'en'},
    //   headers: {accept: 'application/json'}
    // }; 
    // useEffect(() => {
    //       fetch(url, options)
    //       .then(res => res.json())
    //       .then(data => setReviews(data))
    //       .catch(function (error) {
    //         console.error(error);
    //       });
    // }, [reviews])
    useEffect(() => {
        if (!autoslides) return;
        const slideInterval = setInterval(next, interval);
        console.log(slideInterval)
        // 
        return clearInterval(interval)
    }, [])

    return (
        <div className='reviews__container'>
            <div className="reviews__wrapper">
                <div className="reviews__contect">
                    {reviews?.data.map((review) => (
                        <div className='review-container' style={{ transform: `translateY(-${curr * 100}%)` }}>
                            <div className="img-name__container">
                                <div className="reviews__img-container">
                                    <img src={review.user.avatar.medium} alt="" />
                                </div>
                                <div className="review-username">
                                    <h4>{review.user.name}</h4>
                                </div>
                            </div>
                            <div className="review_rating_date_header">
                                <div className="review_rating">
                                    <img src={review.rating_image_url} alt="" />
                                </div>
                                <div className="review_header">
                                    <h4>{review.title}</h4>
                                </div>
                                <div className="review_date">
                                    {new Date(review.travel_date).toString().split(' ')[1]}{' '}
                                    {new Date(review.travel_date).toString().split(' ')[3]}
                                    .{review.trip_type}
                                </div>
                            </div>
                            <div className={`${review.text.length > 500 ? 'para-white_over' : 'para-white'}`} style={{ fontSize: '16px', color: 'white', height: '17vh', width: '100%', fontWeight: 200 }}>
                                {review.text}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="carousel__dots_container">
                    <div className="carousel__dots">
                        {reviews?.data.map((_, i) => (
                            <div className={`${curr === i ? 'dots_curr' : 'dots'}`} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="slides-btn__container-review">
                <button onClick={prev} className='carousel__btn-review'>
                    <SlArrowLeft className='caraosel_arrow' />
                </button>
                <button onClick={next} className='carousel__btn-review'>
                    <SlArrowRight className='caraosel_arrow' />
                </button>
            </div>
        </div>
    )
}

export default Reviews