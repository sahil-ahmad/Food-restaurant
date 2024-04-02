import React from 'react'
import { review } from '../Data';
import quoteImage from '../assets/images/quote.png';

const Review = () => {
    return (
        <>
            <div className='reviews' id='review'>
                <h1 className='heading'>
                    Customer's <span>Review</span>
                </h1>
            </div>
            <div className='review-container'>
                {
                    review.map((item, index) => (

                        <div className='review-box'>
                        <img src={quoteImage}/>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                            <img src={item.img} />
                            <h3>Johan Deo</h3>
                            <div className='stars'>
                                <i className='fas fa-star' />
                                <i className='fas fa-star' />
                                <i className='fas fa-star' />
                                <i className='fas fa-star' />
                                <i className='fas fa-star-half-alt' />
                            </div>

                        </div>

                    ))
                }
            </div>
        </>
    )
}

export default Review