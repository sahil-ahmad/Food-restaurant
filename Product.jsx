import React from 'react'
import { product } from '../Data';

const Product = () => {
    return (
        <>
            <div className='product' id='products'>
                <h1 className='heading'>
                    Our <span>Product</span>
                </h1>
            </div>
            <div className='box-containers'>
                {
                    product.map((item, index) => (
                        <div className='box'>
                            <div className='icons'>
                                <a href='#' className=' fas fa-shopping-cart'></a>
                                <a href='#' className=' fas fa-heart'></a>
                                <a href='#' className=' fas fa-eye'></a>
                            </div>
                            <div className='image'>
                                <img src={item.img} alt />
                            </div>
                            <div className='content'>
                                <h3>Fresh Food</h3>
                                <div className='stars'>
                                    <i className='fas fa-star' />
                                    <i className='fas fa-star' />
                                    <i className='fas fa-star' />
                                    <i className='fas fa-star' />
                                    <i className='fas fa-star-half-alt' />
                                </div>
                            </div>



                        </div>
                    ))

                }
            </div>
        </>
    )
}

export default Product;