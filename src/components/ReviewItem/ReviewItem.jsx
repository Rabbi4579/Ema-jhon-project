import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const ReviewItem = ({ product,handleRemoveFromCart }) => {
    const { id, img, price, name, quantity } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='right-section'>
                <div className='review-details'>
                    <p className='product-name'>{name}</p>
                    <p className='product-price'>Price: <span className='text-color'>${price}</span></p>
                    <p className='product-quantity'>Order quantity: <span className='text-color'>{quantity}</span></p>
                </div>

                <div >
                    <button onClick={() => handleRemoveFromCart(id)} className='btn-delete'>
                    <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ReviewItem;