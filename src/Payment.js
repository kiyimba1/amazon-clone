import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react'
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider'

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const handelSubmit = e => {
        //do all fancy stripe things
    }

    const handelChange = e => {
        
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    (Checkout <Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>q23 React Lane</p>
                        <p>Kampl, Ug</p>
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and Delivery</h3>
                    </div>
                    <div className='payment__item'>
                        {basket.map(item =>
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        )}
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe magic..... */}
                        <form onSubmit={handelSubmit}>
                            <CardElement onChange={ handelChange }/>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Payment
